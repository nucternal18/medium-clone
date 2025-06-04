import React, { useState } from "react";
import { View, StyleSheet, Image } from "react-native";
import { Button, Text, Portal, Dialog } from "react-native-paper";
import * as ImagePicker from "expo-image-picker";

interface ImageUploadProps {
  onImageUpload: (imageUrl: string) => void;
}

export default function ImageUpload({ onImageUpload }: ImageUploadProps) {
  const [isDialogVisible, setIsDialogVisible] = useState(false);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const pickImage = async () => {
    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [16, 9],
      quality: 0.8,
    });

    if (!result.canceled) {
      setSelectedImage(result.assets[0].uri);
      setIsDialogVisible(true);
    }
  };

  const handleConfirm = () => {
    if (selectedImage) {
      // TODO: Upload image to your storage service
      // For now, we'll just use the local URI
      onImageUpload(selectedImage);
      setSelectedImage(null);
      setIsDialogVisible(false);
    }
  };

  return (
    <>
      <Button
        mode="outlined"
        onPress={pickImage}
        icon="image"
        style={styles.button}
      >
        Insert Image
      </Button>

      <Portal>
        <Dialog
          visible={isDialogVisible}
          onDismiss={() => setIsDialogVisible(false)}
        >
          <Dialog.Title>Insert Image</Dialog.Title>
          <Dialog.Content>
            {selectedImage && (
              <Image
                source={{ uri: selectedImage }}
                style={styles.preview}
                resizeMode="cover"
              />
            )}
            <Text style={styles.helpText}>
              The image will be inserted at the current cursor position.
            </Text>
          </Dialog.Content>
          <Dialog.Actions>
            <Button onPress={() => setIsDialogVisible(false)}>Cancel</Button>
            <Button onPress={handleConfirm}>Insert</Button>
          </Dialog.Actions>
        </Dialog>
      </Portal>
    </>
  );
}

const styles = StyleSheet.create({
  button: {
    marginVertical: 8,
  },
  preview: {
    width: "100%",
    height: 200,
    borderRadius: 8,
    marginBottom: 16,
  },
  helpText: {
    color: "#666",
  },
});

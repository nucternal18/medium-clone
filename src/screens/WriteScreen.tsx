import React, { useState, useRef } from "react";
import {
  View,
  StyleSheet,
  ScrollView,
  TextInput as RNTextInput,
} from "react-native";
import { TextInput, Button, Text, SegmentedButtons } from "react-native-paper";
import MarkdownPreview from "../components/MarkdownPreview";
import ImageUpload from "../components/mdx/ImageUpload";

type EditorMode = "write" | "preview";

export default function WriteScreen() {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [isPublishing, setIsPublishing] = useState(false);
  const [mode, setMode] = useState<EditorMode>("write");
  const contentInputRef = useRef<RNTextInput>(null);

  const handlePublish = () => {
    setIsPublishing(true);
    // TODO: Implement article publishing
    console.log("Publishing article:", { title, content });
    setIsPublishing(false);
  };

  const handleImageUpload = (imageUrl: string) => {
    const imageMarkdown = `\n![Image](${imageUrl})\n`;
    const currentContent = content;
    const cursorPosition = contentInputRef.current?.props.selection?.start || 0;

    const newContent =
      currentContent.slice(0, cursorPosition) +
      imageMarkdown +
      currentContent.slice(cursorPosition);

    setContent(newContent);
  };

  const renderEditor = () => (
    <View style={styles.content}>
      <TextInput
        label="Title"
        value={title}
        onChangeText={setTitle}
        style={styles.titleInput}
        mode="outlined"
        placeholder="Write a title..."
      />

      <ImageUpload onImageUpload={handleImageUpload} />

      <TextInput
        ref={contentInputRef}
        label="Content (MDX)"
        value={content}
        onChangeText={setContent}
        style={styles.contentInput}
        mode="outlined"
        multiline
        numberOfLines={20}
        placeholder="# Write your story in MDX format..."
      />
    </View>
  );

  const renderPreview = () => (
    <View style={styles.content}>
      <Text variant="headlineMedium" style={styles.previewTitle}>
        {title || "Untitled"}
      </Text>
      <MarkdownPreview content={content} />
    </View>
  );

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <SegmentedButtons
          value={mode}
          onValueChange={(value) => setMode(value as EditorMode)}
          buttons={[
            { value: "write", label: "Write" },
            { value: "preview", label: "Preview" },
          ]}
          style={styles.segmentedButtons}
        />
      </View>

      <ScrollView style={styles.scrollView}>
        {mode === "write" ? renderEditor() : renderPreview()}
      </ScrollView>

      <View style={styles.footer}>
        <Button
          mode="contained"
          onPress={handlePublish}
          style={styles.publishButton}
          loading={isPublishing}
          disabled={!title || !content || isPublishing}
        >
          Publish
        </Button>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  header: {
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: "#eee",
  },
  segmentedButtons: {
    marginBottom: 8,
  },
  scrollView: {
    flex: 1,
  },
  content: {
    padding: 16,
  },
  titleInput: {
    marginBottom: 16,
  },
  contentInput: {
    marginBottom: 16,
  },
  footer: {
    padding: 16,
    borderTopWidth: 1,
    borderTopColor: "#eee",
  },
  publishButton: {
    marginTop: 8,
  },
  previewTitle: {
    marginBottom: 16,
  },
});

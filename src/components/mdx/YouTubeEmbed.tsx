import React from "react";
import { View, StyleSheet, Dimensions } from "react-native";
import { WebView } from "react-native-webview";
import { Card, Text } from "react-native-paper";

interface YouTubeEmbedProps {
  id: string;
  title?: string;
}

export function YouTubeEmbed({ id, title }: YouTubeEmbedProps) {
  const videoUrl = `https://www.youtube.com/embed/${id}`;
  const { width } = Dimensions.get("window");
  const videoHeight = (width * 9) / 16; // 16:9 aspect ratio

  return (
    <Card style={styles.container}>
      <Card.Content>
        {title && (
          <Text variant="titleMedium" style={styles.title}>
            {title}
          </Text>
        )}
        <View style={[styles.videoContainer, { height: videoHeight }]}>
          <WebView
            source={{ uri: videoUrl }}
            style={styles.video}
            allowsFullscreenVideo
            javaScriptEnabled
            domStorageEnabled
          />
        </View>
      </Card.Content>
    </Card>
  );
}

const styles = StyleSheet.create({
  container: {
    marginVertical: 16,
    overflow: "hidden",
  },
  title: {
    marginBottom: 8,
  },
  videoContainer: {
    width: "100%",
    backgroundColor: "#000",
    overflow: "hidden",
    borderRadius: 8,
  },
  video: {
    flex: 1,
  },
});

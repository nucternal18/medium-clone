import React from "react";
import { View, StyleSheet, Dimensions } from "react-native";
import { Text, Button } from "react-native-paper";
import { WebView } from "react-native-webview";

interface CodePenEmbedProps {
  id: string;
  height?: number;
  theme?: "light" | "dark";
  title?: string;
}

export default function CodePenEmbed({
  id,
  height = 400,
  theme = "light",
  title,
}: CodePenEmbedProps) {
  const { width } = Dimensions.get("window");
  const embedUrl = `https://codepen.io/embed/${id}?height=${height}&theme-id=${
    theme === "dark" ? "dark" : "light"
  }&default-tab=result`;

  return (
    <View style={styles.container}>
      {title && (
        <Text variant="titleMedium" style={styles.title}>
          {title}
        </Text>
      )}
      <View style={[styles.embedContainer, { height }]}>
        <WebView
          source={{ uri: embedUrl }}
          style={styles.webview}
          scrollEnabled={false}
          javaScriptEnabled={true}
          domStorageEnabled={true}
        />
      </View>
      <Button
        mode="text"
        onPress={() => window.open(`https://codepen.io/${id}`, "_blank")}
        style={styles.button}
      >
        View on CodePen
      </Button>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginVertical: 16,
    borderRadius: 8,
    overflow: "hidden",
    backgroundColor: "#f8f9fa",
  },
  title: {
    padding: 12,
    backgroundColor: "#f1f3f5",
  },
  embedContainer: {
    width: "100%",
    borderWidth: 1,
    borderColor: "#e9ecef",
  },
  webview: {
    flex: 1,
  },
  button: {
    marginTop: 8,
  },
});

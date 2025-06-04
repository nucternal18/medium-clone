import React from "react";
import { View, StyleSheet, Dimensions } from "react-native";
import { WebView } from "react-native-webview";
import { Card, Text } from "react-native-paper";

interface GitHubGistProps {
  id: string;
  file?: string;
}

export function GitHubGist({ id, file }: GitHubGistProps) {
  const gistUrl = file
    ? `https://gist.github.com/${id}.js?file=${file}`
    : `https://gist.github.com/${id}.js`;

  return (
    <Card style={styles.container}>
      <Card.Content>
        <View style={styles.gistContainer}>
          <WebView
            source={{ uri: gistUrl }}
            style={styles.gist}
            scrollEnabled={false}
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
  gistContainer: {
    width: "100%",
    minHeight: 200,
    backgroundColor: "#fff",
    overflow: "hidden",
    borderRadius: 8,
  },
  gist: {
    flex: 1,
  },
});

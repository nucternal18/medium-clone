import React from "react";
import { StyleSheet, useWindowDimensions, Image, View } from "react-native";
import Markdown from "react-native-markdown-display";
import { MarkdownNode, MarkdownStyle } from "../types/markdown";

interface MarkdownPreviewProps {
  content: string;
}

const markdownStyles: MarkdownStyle = {
  body: {
    color: "#333",
    fontSize: 16,
    lineHeight: 32,
  },
  heading1: {
    fontSize: 32,
    fontWeight: "bold",
    marginTop: 26,
    marginBottom: 16,
  },
  heading2: {
    fontSize: 24,
    fontWeight: "bold",
    marginTop: 20,
    marginBottom: 12,
  },
  heading3: {
    fontSize: 20,
    fontWeight: "bold",
    marginTop: 16,
    marginBottom: 8,
  },
  paragraph: {
    marginBottom: 16,
  },
  code_inline: {
    backgroundColor: "#f0f0f0",
    padding: 4,
    borderRadius: 4,
    fontFamily: "monospace",
  },
  code_block: {
    backgroundColor: "#f0f0f0",
    padding: 16,
    borderRadius: 8,
    marginVertical: 16,
    fontFamily: "monospace",
  },
  blockquote: {
    borderLeftWidth: 4,
    borderLeftColor: "#ccc",
    paddingLeft: 16,
    marginLeft: 0,
    marginVertical: 16,
  },
  list_item: {
    marginBottom: 8,
  },
};

export default function MarkdownPreview({ content }: MarkdownPreviewProps) {
  const { width } = useWindowDimensions();

  const renderImage = (node: MarkdownNode) => (
    <Image
      source={{ uri: node.attributes?.src }}
      style={{
        width: width - 32,
        height: 200,
        borderRadius: 8,
        marginVertical: 16,
      }}
      resizeMode="cover"
    />
  );

  return (
    <View style={styles.container}>
      <Markdown
        style={markdownStyles}
        rules={{
          img: renderImage,
        }}
      >
        {content}
      </Markdown>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: "#fff",
  },
});

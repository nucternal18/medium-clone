import React from "react";
import { View, FlatList, StyleSheet } from "react-native";
import { Text, Card, Button } from "react-native-paper";
import { useRouter } from "expo-router";
import { Article } from "../types";
import MarkdownPreview from "../components/MarkdownPreview";

// Temporary mock data
const mockArticles: Article[] = [
  {
    id: "1",
    title: "Getting Started with React Native",
    content: `# Getting Started with React Native

React Native is a powerful framework for building mobile applications using JavaScript and React.

## Key Features

- Cross-platform development
- Native performance
- Hot reloading
- Large ecosystem

\`\`\`javascript
// Example code
const App = () => {
  return (
    <View>
      <Text>Hello, React Native!</Text>
    </View>
  );
};
\`\`\`

> React Native combines the best parts of native development with React, a best-in-class JavaScript library for building user interfaces.`,
    published: true,
    authorId: "1",
    author: {
      id: "1",
      name: "John Doe",
      email: "john@example.com",
      createdAt: new Date(),
    },
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  // Add more mock articles as needed
];

export default function HomeScreen() {
  const router = useRouter();

  const handleArticlePress = (articleId: string) => {
    router.push(`/article/${articleId}`);
  };

  const renderArticle = ({ item }: { item: Article }) => (
    <Card style={styles.card} mode="elevated">
      <Card.Content>
        <Text variant="titleLarge">{item.title}</Text>
        <View style={styles.previewContainer}>
          <MarkdownPreview content={item.content} />
        </View>
        <Text variant="labelSmall" style={styles.author}>
          By {item.author?.name}
        </Text>
      </Card.Content>
      <Card.Actions>
        <Button mode="text" onPress={() => handleArticlePress(item.id)}>
          Read More
        </Button>
      </Card.Actions>
    </Card>
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={mockArticles}
        renderItem={renderArticle}
        keyExtractor={(item) => item.id}
        contentContainerStyle={styles.list}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f5f5f5",
  },
  list: {
    padding: 16,
  },
  card: {
    marginBottom: 16,
  },
  previewContainer: {
    maxHeight: 200,
    overflow: "hidden",
  },
  author: {
    marginTop: 8,
    color: "#666",
  },
});

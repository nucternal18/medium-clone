import React from "react";
import { View, FlatList, StyleSheet, SafeAreaView } from "react-native";
import { Text, Card, Button } from "react-native-paper";
import { useRouter } from "expo-router";
import { Article } from "../../src/types";

export default function BookmarksScreen() {
  const router = useRouter();

  // Mock bookmarked articles
  const bookmarkedArticles: Article[] = [
    {
      id: "1",
      title: "Getting Started with React Native",
      content: `# Getting Started with React Native

React Native is a powerful framework for building mobile applications using JavaScript and React.

## Key Features

- Cross-platform development
- Native performance
- Hot reloading
- Large ecosystem`,
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

  const handleArticlePress = (articleId: string) => {
    router.push(`/article/${articleId}`);
  };

  const renderArticle = ({ item }: { item: Article }) => (
    <Card style={styles.card} mode="elevated">
      <Card.Content>
        <Text variant="titleLarge">{item.title}</Text>
        <Text variant="bodyMedium" style={styles.author}>
          By {item.author?.name}
        </Text>
        <Text variant="bodySmall" style={styles.date}>
          {new Date(item.createdAt).toLocaleDateString()}
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
    <SafeAreaView style={styles.container}>
      {bookmarkedArticles.length > 0 ? (
        <FlatList
          data={bookmarkedArticles}
          renderItem={renderArticle}
          keyExtractor={(item) => item.id}
          contentContainerStyle={styles.list}
        />
      ) : (
        <View style={styles.emptyState}>
          <Text variant="headlineSmall">No Bookmarks Yet</Text>
          <Text variant="bodyMedium" style={styles.emptyStateText}>
            Save articles to read them later
          </Text>
        </View>
      )}
    </SafeAreaView>
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
  author: {
    marginTop: 8,
    color: "#666",
  },
  date: {
    color: "#999",
    marginTop: 4,
  },
  emptyState: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 16,
  },
  emptyStateText: {
    marginTop: 8,
    color: "#666",
    textAlign: "center",
  },
});

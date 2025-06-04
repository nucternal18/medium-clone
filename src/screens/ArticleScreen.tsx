import React, { useState } from "react";
import { View, StyleSheet, ScrollView, Share } from "react-native";
import {
  Text,
  Avatar,
  Button,
  Divider,
  IconButton,
  Portal,
  Dialog,
} from "react-native-paper";
import { useLocalSearchParams } from "expo-router";
import MarkdownPreview from "../components/MarkdownPreview";
import { Article } from "../types";

// Temporary mock data
const mockArticle: Article = {
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

> React Native combines the best parts of native development with React, a best-in-class JavaScript library for building user interfaces.


### This is an important note about React Native development.

`,
  published: true,
  authorId: "1",
  author: {
    id: "1",
    name: "John Doe",
    email: "john@example.com",
    image: "https://via.placeholder.com/150",
    createdAt: new Date(),
  },
  createdAt: new Date(),
  updatedAt: new Date(),
};

export default function ArticleScreen() {
  const { id } = useLocalSearchParams<{ id: string }>();
  const [isFollowing, setIsFollowing] = useState(false);
  const [isBookmarked, setIsBookmarked] = useState(false);
  const [showShareDialog, setShowShareDialog] = useState(false);
  // TODO: Fetch article data based on id
  const article = mockArticle;

  const handleShare = async () => {
    try {
      await Share.share({
        message: `Check out this article: ${article.title}`,
        url: `https://medium-clone.com/article/${article.id}`,
      });
    } catch (error) {
      console.error("Error sharing:", error);
    }
  };

  const handleFollow = () => {
    setIsFollowing(!isFollowing);
    // TODO: Implement follow/unfollow functionality
  };

  const handleBookmark = () => {
    setIsBookmarked(!isBookmarked);
    // TODO: Implement bookmark functionality
  };

  return (
    <View style={styles.container}>
      <ScrollView>
        <View style={styles.header}>
          <Text variant="headlineLarge" style={styles.title}>
            {article.title}
          </Text>

          <View style={styles.authorInfo}>
            <Avatar.Image
              size={40}
              source={{ uri: article.author?.image }}
              style={styles.avatar}
            />
            <View style={styles.authorDetails}>
              <Text variant="titleMedium">{article.author?.name}</Text>
              <Text variant="bodySmall" style={styles.date}>
                {new Date(article.createdAt).toLocaleDateString()}
              </Text>
            </View>
          </View>

          <View style={styles.actions}>
            <IconButton
              icon={isBookmarked ? "bookmark" : "bookmark-outline"}
              onPress={handleBookmark}
            />
            <IconButton icon="share-variant" onPress={handleShare} />
          </View>
        </View>

        <Divider style={styles.divider} />

        <View style={styles.content}>
          <MarkdownPreview content={article.content} />
        </View>

        <View style={styles.footer}>
          <Button
            mode="contained"
            onPress={handleFollow}
            style={styles.followButton}
            icon={isFollowing ? "check" : "plus"}
          >
            {isFollowing ? "Following" : "Follow"} {article.author?.name}
          </Button>
        </View>
      </ScrollView>

      <Portal>
        <Dialog
          visible={showShareDialog}
          onDismiss={() => setShowShareDialog(false)}
        >
          <Dialog.Title>Share Article</Dialog.Title>
          <Dialog.Content>
            <Text>Share this article with others</Text>
          </Dialog.Content>
          <Dialog.Actions>
            <Button onPress={() => setShowShareDialog(false)}>Close</Button>
          </Dialog.Actions>
        </Dialog>
      </Portal>
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
  },
  title: {
    marginBottom: 16,
  },
  authorInfo: {
    flexDirection: "row",
    alignItems: "center",
  },
  avatar: {
    marginRight: 12,
  },
  authorDetails: {
    flex: 1,
  },
  date: {
    color: "#666",
  },
  actions: {
    flexDirection: "row",
    justifyContent: "flex-end",
    marginTop: 8,
  },
  divider: {
    marginVertical: 16,
  },
  content: {
    padding: 16,
  },
  footer: {
    padding: 16,
    borderTopWidth: 1,
    borderTopColor: "#eee",
  },
  followButton: {
    marginTop: 8,
  },
});

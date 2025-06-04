import React from "react";
import { View, StyleSheet, ScrollView } from "react-native";
import { Text, Avatar, Button, Card } from "react-native-paper";
import { Article } from "../types";

// Temporary mock data
const mockUser = {
  id: "1",
  name: "John Doe",
  email: "john@example.com",
  bio: "Software developer and writer",
  image: "https://via.placeholder.com/150",
  createdAt: new Date(),
};

const mockArticles: Article[] = [
  {
    id: "1",
    title: "Getting Started with React Native",
    content: "React Native is a powerful framework...",
    published: true,
    authorId: "1",
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  // Add more mock articles as needed
];

export default function ProfileScreen() {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Avatar.Image
          size={100}
          source={{ uri: mockUser.image }}
          style={styles.avatar}
        />
        <Text variant="headlineSmall" style={styles.name}>
          {mockUser.name}
        </Text>
        <Text variant="bodyMedium" style={styles.bio}>
          {mockUser.bio}
        </Text>
        <Button mode="outlined" style={styles.editButton}>
          Edit Profile
        </Button>
      </View>

      <View style={styles.content}>
        <Text variant="titleLarge" style={styles.sectionTitle}>
          My Articles
        </Text>

        {mockArticles.map((article) => (
          <Card key={article.id} style={styles.articleCard}>
            <Card.Content>
              <Text variant="titleMedium">{article.title}</Text>
              <Text variant="bodySmall" style={styles.date}>
                {new Date(article.createdAt).toLocaleDateString()}
              </Text>
            </Card.Content>
            <Card.Actions>
              <Button mode="text">Edit</Button>
              <Button mode="text">Delete</Button>
            </Card.Actions>
          </Card>
        ))}
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  header: {
    alignItems: "center",
    padding: 20,
    borderBottomWidth: 1,
    borderBottomColor: "#eee",
  },
  avatar: {
    marginBottom: 16,
  },
  name: {
    marginBottom: 8,
  },
  bio: {
    textAlign: "center",
    marginBottom: 16,
    color: "#666",
  },
  editButton: {
    marginTop: 8,
  },
  content: {
    padding: 16,
  },
  sectionTitle: {
    marginBottom: 16,
  },
  articleCard: {
    marginBottom: 16,
  },
  date: {
    color: "#666",
    marginTop: 4,
  },
});

import React from "react";
import { View, ScrollView, StyleSheet } from "react-native";
import { Text, Avatar, Card, Button, Divider } from "react-native-paper";
import { useRouter } from "expo-router";
import { RoutePath } from "../src/types/routes";

export default function ProfileScreen() {
  const router = useRouter();

  // Mock user data
  const user = {
    name: "John Doe",
    email: "john@example.com",
    bio: "Software Engineer | React Native Developer | Open Source Enthusiast",
    avatar: "https://i.pravatar.cc/300",
    stats: {
      followers: 1234,
      following: 567,
      articles: 42,
    },
  };

  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Avatar.Image size={120} source={{ uri: user.avatar }} />
        <Text variant="headlineMedium" style={styles.name}>
          {user.name}
        </Text>
        <Text variant="bodyLarge" style={styles.email}>
          {user.email}
        </Text>
        <Text variant="bodyMedium" style={styles.bio}>
          {user.bio}
        </Text>
      </View>

      <View style={styles.stats}>
        <View style={styles.statItem}>
          <Text variant="headlineSmall">{user.stats.followers}</Text>
          <Text variant="bodyMedium">Followers</Text>
        </View>
        <View style={styles.statItem}>
          <Text variant="headlineSmall">{user.stats.following}</Text>
          <Text variant="bodyMedium">Following</Text>
        </View>
        <View style={styles.statItem}>
          <Text variant="headlineSmall">{user.stats.articles}</Text>
          <Text variant="bodyMedium">Articles</Text>
        </View>
      </View>

      <Divider style={styles.divider} />

      <Card style={styles.card}>
        <Card.Title title="Recent Activity" />
        <Card.Content>
          <Text variant="bodyMedium">No recent activity</Text>
        </Card.Content>
      </Card>

      <Card style={styles.card}>
        <Card.Title title="Drafts" />
        <Card.Content>
          <Text variant="bodyMedium">No drafts</Text>
        </Card.Content>
      </Card>

      <Button
        mode="contained"
        onPress={() => router.navigate("/write")}
        style={styles.writeButton}
      >
        Write a Story
      </Button>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f5f5f5",
  },
  header: {
    alignItems: "center",
    padding: 20,
    backgroundColor: "#fff",
  },
  name: {
    marginTop: 16,
    fontWeight: "bold",
  },
  email: {
    color: "#666",
    marginTop: 4,
  },
  bio: {
    textAlign: "center",
    marginTop: 8,
    color: "#444",
  },
  stats: {
    flexDirection: "row",
    justifyContent: "space-around",
    padding: 20,
    backgroundColor: "#fff",
    marginTop: 1,
  },
  statItem: {
    alignItems: "center",
  },
  divider: {
    marginVertical: 16,
  },
  card: {
    margin: 16,
    marginTop: 0,
  },
  writeButton: {
    margin: 16,
  },
});

import React from "react";
import { View, StyleSheet, Image } from "react-native";
import { Text, Button, Card } from "react-native-paper";
import { MaterialCommunityIcons } from "@expo/vector-icons";

interface TwitterCardProps {
  tweetId: string;
  author: {
    name: string;
    handle: string;
    avatar: string;
  };
  content: string;
  timestamp: string;
  likes?: number;
  retweets?: number;
}

export default function TwitterCard({
  tweetId,
  author,
  content,
  timestamp,
  likes = 0,
  retweets = 0,
}: TwitterCardProps) {
  return (
    <Card style={styles.container}>
      <Card.Content>
        <View style={styles.header}>
          <Image source={{ uri: author.avatar }} style={styles.avatar} />
          <View style={styles.authorInfo}>
            <Text variant="titleMedium">{author.name}</Text>
            <Text variant="bodySmall" style={styles.handle}>
              @{author.handle}
            </Text>
          </View>
        </View>

        <Text style={styles.content}>{content}</Text>

        <View style={styles.footer}>
          <View style={styles.stats}>
            <View style={styles.stat}>
              <MaterialCommunityIcons
                name="heart-outline"
                size={16}
                color="#666"
              />
              <Text variant="bodySmall" style={styles.statText}>
                {likes.toLocaleString()}
              </Text>
            </View>
            <View style={styles.stat}>
              <MaterialCommunityIcons name="repeat" size={16} color="#666" />
              <Text variant="bodySmall" style={styles.statText}>
                {retweets.toLocaleString()}
              </Text>
            </View>
          </View>
          <Text variant="bodySmall" style={styles.timestamp}>
            {timestamp}
          </Text>
        </View>
      </Card.Content>

      <Card.Actions>
        <Button
          mode="text"
          onPress={() =>
            window.open(
              `https://twitter.com/${author.handle}/status/${tweetId}`,
              "_blank"
            )
          }
        >
          View on Twitter
        </Button>
      </Card.Actions>
    </Card>
  );
}

const styles = StyleSheet.create({
  container: {
    marginVertical: 16,
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 12,
  },
  avatar: {
    width: 48,
    height: 48,
    borderRadius: 24,
    marginRight: 12,
  },
  authorInfo: {
    flex: 1,
  },
  handle: {
    color: "#666",
  },
  content: {
    fontSize: 16,
    lineHeight: 24,
    marginBottom: 12,
  },
  footer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  stats: {
    flexDirection: "row",
    gap: 16,
  },
  stat: {
    flexDirection: "row",
    alignItems: "center",
    gap: 4,
  },
  statText: {
    color: "#666",
  },
  timestamp: {
    color: "#666",
  },
});

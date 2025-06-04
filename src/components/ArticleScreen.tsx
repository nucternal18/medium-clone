import React, { useState } from "react";
import {
  View,
  ScrollView,
  StyleSheet,
  KeyboardAvoidingView,
  Platform,
} from "react-native";
import {
  Text,
  TextInput,
  Button,
  IconButton,
  Avatar,
  Divider,
} from "react-native-paper";
import MarkdownPreview from "./MarkdownPreview";
import { Article } from "../types";

interface ArticleScreenProps {
  article: Article;
}

interface Comment {
  id: string;
  content: string;
  author: {
    id: string;
    name: string;
    avatar: string;
  };
  createdAt: Date;
  likes: number;
}

export default function ArticleScreen({ article }: ArticleScreenProps) {
  const [comment, setComment] = useState("");
  const [comments, setComments] = useState<Comment[]>([
    {
      id: "1",
      content: "Great article! Very informative.",
      author: {
        id: "2",
        name: "Jane Smith",
        avatar: "https://i.pravatar.cc/300?img=2",
      },
      createdAt: new Date(),
      likes: 5,
    },
  ]);
  const [reactions, setReactions] = useState({
    claps: 42,
    likes: 15,
    bookmarks: 8,
  });

  const handleAddComment = () => {
    if (!comment.trim()) return;

    const newComment: Comment = {
      id: Date.now().toString(),
      content: comment,
      author: {
        id: "1", // Current user
        name: "John Doe",
        avatar: "https://i.pravatar.cc/300",
      },
      createdAt: new Date(),
      likes: 0,
    };

    setComments([newComment, ...comments]);
    setComment("");
  };

  const handleReaction = (type: "claps" | "likes" | "bookmarks") => {
    setReactions((prev) => ({
      ...prev,
      [type]: prev[type] + 1,
    }));
  };

  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior={Platform.OS === "ios" ? "padding" : undefined}
      keyboardVerticalOffset={Platform.OS === "ios" ? 64 : 0}
    >
      <ScrollView style={styles.scrollView}>
        <View style={styles.header}>
          <Text variant="headlineMedium" style={styles.title}>
            {article.title}
          </Text>
          <View style={styles.author}>
            <Avatar.Image
              size={40}
              source={{
                uri: article.author?.avatar || "https://i.pravatar.cc/300",
              }}
            />
            <View style={styles.authorInfo}>
              <Text variant="titleMedium">{article.author?.name}</Text>
              <Text variant="bodySmall" style={styles.date}>
                {new Date(article.createdAt).toLocaleDateString()}
              </Text>
            </View>
          </View>
        </View>

        <View style={styles.content}>
          <MarkdownPreview content={article.content} />
        </View>

        <View style={styles.reactions}>
          <IconButton
            icon="hand-clap"
            size={24}
            onPress={() => handleReaction("claps")}
          />
          <Text>{reactions.claps}</Text>
          <IconButton
            icon="heart"
            size={24}
            onPress={() => handleReaction("likes")}
          />
          <Text>{reactions.likes}</Text>
          <IconButton
            icon="bookmark"
            size={24}
            onPress={() => handleReaction("bookmarks")}
          />
          <Text>{reactions.bookmarks}</Text>
        </View>

        <Divider style={styles.divider} />

        <View style={styles.comments}>
          <Text variant="titleLarge" style={styles.commentsTitle}>
            Comments
          </Text>
          <View style={styles.commentInput}>
            <TextInput
              mode="outlined"
              placeholder="Write a comment..."
              value={comment}
              onChangeText={setComment}
              multiline
              style={styles.input}
            />
            <Button
              mode="contained"
              onPress={handleAddComment}
              disabled={!comment.trim()}
            >
              Post
            </Button>
          </View>

          {comments.map((comment) => (
            <View key={comment.id} style={styles.comment}>
              <View style={styles.commentHeader}>
                <Avatar.Image
                  size={32}
                  source={{ uri: comment.author.avatar }}
                />
                <View style={styles.commentInfo}>
                  <Text variant="titleSmall">{comment.author.name}</Text>
                  <Text variant="bodySmall" style={styles.date}>
                    {new Date(comment.createdAt).toLocaleDateString()}
                  </Text>
                </View>
              </View>
              <Text style={styles.commentContent}>{comment.content}</Text>
              <View style={styles.commentActions}>
                <IconButton icon="heart-outline" size={20} onPress={() => {}} />
                <Text>{comment.likes}</Text>
                <IconButton icon="reply" size={20} onPress={() => {}} />
              </View>
            </View>
          ))}
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  scrollView: {
    flex: 1,
  },
  header: {
    padding: 16,
  },
  title: {
    marginBottom: 16,
  },
  author: {
    flexDirection: "row",
    alignItems: "center",
  },
  authorInfo: {
    marginLeft: 12,
  },
  date: {
    color: "#666",
  },
  content: {
    padding: 16,
  },
  reactions: {
    flexDirection: "row",
    alignItems: "center",
    padding: 16,
    borderTopWidth: 1,
    borderTopColor: "#eee",
  },
  divider: {
    marginVertical: 16,
  },
  comments: {
    padding: 16,
  },
  commentsTitle: {
    marginBottom: 16,
  },
  commentInput: {
    marginBottom: 16,
  },
  input: {
    marginBottom: 8,
  },
  comment: {
    marginBottom: 16,
    padding: 12,
    backgroundColor: "#f8f8f8",
    borderRadius: 8,
  },
  commentHeader: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 8,
  },
  commentInfo: {
    marginLeft: 12,
  },
  commentContent: {
    marginBottom: 8,
  },
  commentActions: {
    flexDirection: "row",
    alignItems: "center",
  },
});

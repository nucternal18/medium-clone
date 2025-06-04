import React from "react";
import { View, StyleSheet } from "react-native";
import { Text, IconButton } from "react-native-paper";

interface CalloutProps {
  type?: "info" | "warning" | "success" | "error";
  children: React.ReactNode;
}

const icons = {
  info: "information",
  warning: "alert",
  success: "check-circle",
  error: "close-circle",
};

const colors = {
  info: "#2196F3",
  warning: "#FFC107",
  success: "#4CAF50",
  error: "#F44336",
};

export default function Callout({ type = "info", children }: CalloutProps) {
  return (
    <View style={[styles.container, { borderLeftColor: colors[type] }]}>
      <IconButton
        icon={icons[type]}
        size={24}
        iconColor={colors[type]}
        style={styles.icon}
      />
      <View style={styles.content}>{children}</View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    backgroundColor: "#f8f9fa",
    borderLeftWidth: 4,
    borderRadius: 4,
    marginVertical: 16,
    padding: 16,
  },
  icon: {
    margin: 0,
    marginRight: 8,
  },
  content: {
    flex: 1,
  },
});

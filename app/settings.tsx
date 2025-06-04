import React from "react";
import { View, ScrollView, StyleSheet } from "react-native";
import { List, Switch, Divider, Button } from "react-native-paper";
import { useColorScheme } from "react-native";
import { useRouter } from "expo-router";

export default function SettingsScreen() {
  const colorScheme = useColorScheme();
  const router = useRouter();
  const [notifications, setNotifications] = React.useState(true);
  const [darkMode, setDarkMode] = React.useState(colorScheme === "dark");
  const [autoSave, setAutoSave] = React.useState(true);

  return (
    <ScrollView style={styles.container}>
      <List.Section>
        <List.Subheader>Preferences</List.Subheader>
        <List.Item
          title="Dark Mode"
          right={() => <Switch value={darkMode} onValueChange={setDarkMode} />}
        />
        <List.Item
          title="Notifications"
          right={() => (
            <Switch value={notifications} onValueChange={setNotifications} />
          )}
        />
        <List.Item
          title="Auto-save Drafts"
          right={() => <Switch value={autoSave} onValueChange={setAutoSave} />}
        />
      </List.Section>

      <Divider />

      <List.Section>
        <List.Subheader>Account</List.Subheader>
        <List.Item
          title="Edit Profile"
          left={(props) => <List.Icon {...props} icon="account" />}
          onPress={() => router.push("/profile")}
        />
        <List.Item
          title="Change Password"
          left={(props) => <List.Icon {...props} icon="lock" />}
          onPress={() => {}}
        />
        <List.Item
          title="Privacy Settings"
          left={(props) => <List.Icon {...props} icon="shield" />}
          onPress={() => {}}
        />
      </List.Section>

      <Divider />

      <List.Section>
        <List.Subheader>Support</List.Subheader>
        <List.Item
          title="Help Center"
          left={(props) => <List.Icon {...props} icon="help-circle" />}
          onPress={() => {}}
        />
        <List.Item
          title="Report a Problem"
          left={(props) => <List.Icon {...props} icon="alert" />}
          onPress={() => {}}
        />
        <List.Item
          title="Terms of Service"
          left={(props) => <List.Icon {...props} icon="file-document" />}
          onPress={() => {}}
        />
        <List.Item
          title="Privacy Policy"
          left={(props) => <List.Icon {...props} icon="shield-account" />}
          onPress={() => {}}
        />
      </List.Section>

      <Button
        mode="outlined"
        onPress={() => {}}
        style={styles.logoutButton}
        textColor="red"
      >
        Log Out
      </Button>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f5f5f5",
  },
  logoutButton: {
    margin: 16,
    borderColor: "red",
  },
});

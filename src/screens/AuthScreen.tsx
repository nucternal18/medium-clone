import React, { useState } from "react";
import { View, StyleSheet } from "react-native";
import { TextInput, Button, Text } from "react-native-paper";

export default function AuthScreen() {
  const [isLogin, setIsLogin] = useState(true);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");

  const handleSubmit = () => {
    // TODO: Implement authentication
    console.log("Auth attempt:", { email, password, name });
  };

  return (
    <View style={styles.container}>
      <Text variant="headlineMedium" style={styles.title}>
        {isLogin ? "Welcome Back" : "Create Account"}
      </Text>

      {!isLogin && (
        <TextInput
          label="Name"
          value={name}
          onChangeText={setName}
          style={styles.input}
          mode="outlined"
        />
      )}

      <TextInput
        label="Email"
        value={email}
        onChangeText={setEmail}
        style={styles.input}
        mode="outlined"
        keyboardType="email-address"
        autoCapitalize="none"
      />

      <TextInput
        label="Password"
        value={password}
        onChangeText={setPassword}
        style={styles.input}
        mode="outlined"
        secureTextEntry
      />

      <Button mode="contained" onPress={handleSubmit} style={styles.button}>
        {isLogin ? "Login" : "Sign Up"}
      </Button>

      <Button
        mode="text"
        onPress={() => setIsLogin(!isLogin)}
        style={styles.switchButton}
      >
        {isLogin ? "Need an account? Sign Up" : "Have an account? Login"}
      </Button>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    justifyContent: "center",
  },
  title: {
    textAlign: "center",
    marginBottom: 30,
  },
  input: {
    marginBottom: 15,
  },
  button: {
    marginTop: 10,
  },
  switchButton: {
    marginTop: 20,
  },
});

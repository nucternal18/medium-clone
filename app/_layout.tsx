import { Stack } from "expo-router";
import { useColorScheme } from "react-native";
import { PaperProvider, MD3DarkTheme, MD3LightTheme } from "react-native-paper";
import { RootStackParamList } from "../src/types/routes";

export default function RootLayout() {
  const colorScheme = useColorScheme();
  const theme = colorScheme === "dark" ? MD3DarkTheme : MD3LightTheme;

  return (
    <PaperProvider theme={theme}>
      <Stack
        screenOptions={{
          headerShown: true,
          headerStyle: {
            backgroundColor: theme.colors.primary,
          },
          headerTintColor: "#fff",
        }}
        initialRouteName="(tabs)"
      >
        <Stack.Screen
          name="(tabs)"
          options={{
            headerShown: false,
            title: "Home",
          }}
        />
        <Stack.Screen
          name="profile"
          options={{
            headerShown: false,
            title: "Profile",
          }}
        />
        <Stack.Screen
          name="settings"
          options={{
            headerShown: false,
            title: "Settings",
          }}
        />
        <Stack.Screen
          name="article/[id]"
          options={{
            
            title: "Article",
          }}
        />
      </Stack>
    </PaperProvider>
  );
}

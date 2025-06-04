import { LinkingOptions } from "@react-navigation/native";

export const linking: LinkingOptions<any> = {
  prefixes: ["mediumclone://", "https://mediumclone.app"],
  config: {
    screens: {
      index: "home",
      "article/[id]": "article/:id",
      profile: "profile",
      settings: "settings",
      write: "write",
      bookmarks: "bookmarks",
    },
  },
  async getInitialURL() {
    // First, check if app was opened from a deep link
    const url = await Linking.getInitialURL();
    if (url != null) {
      return url;
    }

    // If not opened from deep link, check if there are any pending deep links
    const { url: pendingUrl } = await Linking.getInitialURL();
    return pendingUrl;
  },
  subscribe(listener) {
    const onReceiveURL = ({ url }: { url: string }) => listener(url);

    // Listen to incoming links from deep linking
    const subscription = Linking.addEventListener("url", onReceiveURL);

    return () => {
      subscription.remove();
    };
  },
};

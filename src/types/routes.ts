export type RootStackParamList = {
  index: undefined;
  "article/[id]": { id: string };
  profile: undefined;
  settings: undefined;
  "(tabs)": undefined;
};

export type TabParamList = {
  index: undefined;
  write: undefined;
  bookmarks: undefined;
};

export type AppRoutes = keyof RootStackParamList | keyof TabParamList;

declare global {
  namespace ReactNavigation {
    interface RootParamList extends RootStackParamList {}
  }
}

export type RoutePath = `/${string}`;

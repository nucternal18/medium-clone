export interface User {
  id: string;
  name: string;
  email: string;
  image?: string;
  bio?: string;
  createdAt: Date;
}

export interface Article {
  id: string;
  title: string;
  content: string;
  published: boolean;
  authorId: string;
  author?: User;
  createdAt: Date;
  updatedAt: Date;
}

export type RootStackParamList = {
  Auth: undefined;
  Main: undefined;
};

export type MainTabParamList = {
  Home: undefined;
  Write: undefined;
  Profile: undefined;
};

export type HomeStackParamList = {
  HomeScreen: undefined;
  ArticleScreen: { articleId: string };
};

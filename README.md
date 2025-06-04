# Medium Clone

A modern Medium clone built with Expo, React Native, and TypeScript. This project aims to replicate Medium's core features while providing a native mobile experience.

## Features

- 📱 Native mobile experience with Expo
- ✍️ Rich text editor with Markdown support
- 🎨 Modern UI with React Native Paper
- 🔒 Authentication system
- 📝 Article creation and editing
- 👥 User profiles
- ❤️ Claps and reactions
- 🔖 Bookmarks
- 💬 Comments
- 🔍 Search functionality

## Tech Stack

- [Expo](https://expo.dev/) - React Native framework
- [TypeScript](https://www.typescriptlang.org/) - Type safety
- [React Native Paper](https://callstack.github.io/react-native-paper/) - Material Design components
- [Expo Router](https://docs.expo.dev/router/introduction/) - File-based routing
- [React Native Markdown Display](https://github.com/iamacup/react-native-markdown-display) - Markdown rendering
- [React Native WebView](https://github.com/react-native-webview/react-native-webview) - Web content embedding

## Getting Started

### Prerequisites

- Node.js (v18 or later)
- npm or yarn
- Expo CLI
- iOS Simulator (for Mac) or Android Emulator

### Installation

1. Clone the repository:

```bash
git clone https://github.com/yourusername/medium-clone.git
cd medium-clone
```

2. Install dependencies:

```bash
npm install
# or
yarn install
```

3. Start the development server:

```bash
npx expo start
```

4. Run on your preferred platform:

- Press `i` for iOS simulator
- Press `a` for Android emulator
- Scan QR code with Expo Go app for physical device

## Project Structure

```
medium-clone/
├── app/                    # Expo Router app directory
│   ├── (tabs)/            # Tab-based navigation
│   ├── article/           # Article routes
│   ├── profile/           # Profile routes
│   └── _layout.tsx        # Root layout
├── src/
│   ├── components/        # Reusable components
│   │   ├── mdx/          # MDX components
│   │   └── ui/           # UI components
│   ├── hooks/            # Custom hooks
│   ├── lib/              # Utility functions
│   ├── types/            # TypeScript types
│   └── constants/        # Constants and config
├── assets/               # Static assets
└── package.json         # Dependencies and scripts
```

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Acknowledgments

- [Medium](https://medium.com/) for inspiration
- [Expo](https://expo.dev/) for the amazing framework
- [React Native Paper](https://callstack.github.io/react-native-paper/) for the UI components

# TasksApp

A React Native app for managing tasks, where users can mark tasks as completed by swiping left, and manage other actions like editing or deleting tasks.

## Features
 - **Task Management:** Create, edit, and delete tasks.
 - **Swipe Actions:** Swipe left to mark a task as completed.
 - **Persistent Data:** Task data persists locally, even after the app is closed.
 - **Responsive UI:** Optimized for both Android and iOS platforms.
 - **Real-Time Feedback:** Immediate visual feedback on task actions.
 - **Unit Testing with Jest:** Unit tests for critical components and logic using Jest.

## Requirements
- Node.js (v18 or higher recommended)
- React Native CLI
- Android Studio or Xcode for native development (depending on your platform)
- Git (optional for version control)

## Instalation

1. Clone the repository:

   ```bash
   git clone https://github.com/kevinguzman0/tasks-app.git
   cd TasksApp

2. Install the dependencies:

   ```bash
   npm install

3. Install the necessary iOS dependencies (Mac only, for iOS builds):

   ```bash
   cd ios
   pod install
   cd ..

4. Start the Metro Server

   ```bash
   npm start
   
5. Start the app:

   For iOS:

   ```bash
   npm run ios
   ```

   For Android:

   ```bash
   npm run android

If everything is set up _correctly_, you should see your new app running in your _Android Emulator_ or _iOS Simulator_ shortly provided you have set up your emulator/simulator correctly.

This is one way to run your app — you can also run it directly from within Android Studio and Xcode respectively.

## Testing with Jest   
This project uses Jest for unit testing. Jest is a JavaScript testing framework that works well with React Native and allows you to write tests for components and functions.
- @testing-library/react-native: A popular testing library for React Native that simplifies writing unit tests for components.
- @testing-library/jest-native: Provides custom Jest matchers for testing React Native components, making the tests more readable and expressive.


1. Run tests

  ```bash
   npm test
   ```

## Folder Structure

```bash
TasksApp/
│
├── android/        # Android-specific files
├── ios/            # iOS-specific files
├── src/            # App source files
│   ├── components/ # Reusable components
│   ├── hooks/      # Custom hooks
│   ├── navigation/ # Navigation configuration
│   ├── screens/    # App screens
│   ├── store/      # Global state management
│   ├── theme/      # Theme-related files (colors, fonts, etc.)
│   ├── types/      # Type definitions (for TypeScript, if applicable)
│   ├── utilities/  # Helper functions and utilities
│   └── __tests__/  # Test files for the app
├── App.tsx          # Main entry point for the app
├── README.md       # This README file
├── package.json    # Project dependencies and scripts
└── .gitignore      # Files to ignore in version control

```

## Available Scripts

   - npm start: Starts the development server.
   - npm run android: Builds and runs the app on an Android device/emulator.
   - npm run ios: Builds and runs the app on an iOS simulator (Mac only).
   - npm test: Runs the unit tests using Jest.

## Contributing

1. Fork the repository.
2. Create a new branch (git checkout -b feature-branch).
3. Make your changes.
4. Commit your changes (git commit -m 'Add some feature').
5. Push to the branch (git push origin feature-branch).
6. Open a pull request.

## Troubleshooting

**Common Issues**
1. Android build fails with SDK errors: Ensure that the correct SDK path is set in your local.properties file:

   ```bash
   sdk.dir = /path/to/android/sdk

2. Error: Command pod install failed (iOS):

   - Ensure that CocoaPods is installed (sudo gem install cocoapods).
   - Run pod install inside the ios directory.

3. Metro bundler not starting:

   - Clear the cache by running npm start -- --reset-cache.

4. App stuck on white screen:

   - Ensure that all dependencies are installed correctly.
   - Run npm run android or npm run ios again after clearing the cache.


## Congratulations! :tada:

You've successfully run your React Native App. :partying_face:


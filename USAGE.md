# Usage Guide for Sheno CLI

The **Sheno CLI Tool** provides several commands to help streamline your development workflow. This guide explains how to use the tool, including all available commands and their respective options.

Each command is designed to simplify tasks like building Flutter projects, generating modules, and managing other aspects of your workflow. Below, you'll find detailed explanations and examples for each command supported by **Sheno CLI**.

Follow the instructions to execute commands and leverage the full power of the **Sheno CLI Tool**.

After installing Sheno, you can use it directly from the command line.

1. **To generate a new module, run**:
   
   ```bash
   sheno generate module <module_name>
   ```

Replace <module_name> with the desired name for your module.

2. **To clean Flutter project, run**:

- By default, the clean command will use FVM for Flutter commands:

   ```bash
   sheno clean-flutter
   ```

- If you want to run the clean command without FVM, use the --no-fvm flag:

   ```bash
   sheno clean-flutter --disable-fvm
   ```

3. **To clean the iOS project, run**:
   
- By default, the clean command will not clean CocoaPods cache:

   ```bash
   sheno clean-ios
   ```

- You can also use the --clean-cache flag to run with CocoaPods cache cleaning:
   ```bash
   sheno clean-ios --clean-cache
   ```

- You can also use the --repo-update flag to run with update:
   ```bash
   sheno clean-ios --repo-update
   ```

4. **To build the Flutter APK for release, run**:
   
- By default, the build command will use FVM for Flutter commands:

   ```bash
   sheno flutter-build-apk
   ```

- If you want to run the build command without FVM, use the --no-fvm flag:

   ```bash
   sheno flutter-build-apk --disable-fvm
   ```

5. **To build the Flutter Bundle for release, run**:
   
- By default, the build command will use FVM for Flutter commands:

   ```bash
   sheno flutter-build-bundle
   ```

- If you want to run the build command without FVM, use the --no-fvm flag:

   ```bash
   sheno flutter-build-bundle --disable-fvm
   ```

6. **To build the Flutter iOS app for release, run**:
   
- By default, the build command will use FVM for Flutter commands:

   ```bash
   sheno flutter-build-ios
   ```

- If you want to run the build command without FVM, use the --no-fvm flag:

   ```bash
   sheno flutter-build-ios --disable-fvm
   ```

7. **To create a release IPA for the Flutter app, run**:
   
- By default, the build command will use FVM for Flutter commands:

   ```bash
   sheno flutter-build-ipa
   ```

- If you want to run the build command without FVM, use the --no-fvm flag:

   ```bash
   sheno flutter-build-ipa --disable-fvm
   ```


8. **To open the Android project in Android Studio, run:**:

   ```bash
   sheno open-android
   ```

9. **To open the iOS project in Xcode, run:**:

   ```bash
   sheno open-ios
   ```
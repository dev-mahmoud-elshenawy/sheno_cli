# Usage Guide for Sheno CLI

The **Sheno CLI Tool** provides several commands to help streamline your development workflow. This guide explains how to use the tool, including all available commands and their respective options.

Each command is designed to simplify tasks like building Flutter projects, generating modules, and managing other aspects of your workflow. Below, you'll find detailed explanations and examples for each command supported by **Sheno CLI**.

After installing Sheno, you can use it directly from the command line.

---

## Command Usage

### 1. Generate a New Module
To generate a new module, run:

```bash
sheno generate module <module_name>
```

Replace `<module_name>` with the desired name for your module.

---

### 2. Clean Flutter Project
- By default, the clean command will use FVM for Flutter commands:

```bash
sheno clean-flutter
```

- To run the clean command without FVM, use the `--disable-fvm` flag:

```bash
sheno clean-flutter --disable-fvm
```

---

### 3. Clean the iOS Project
- By default, the clean command will not clean CocoaPods cache:

```bash
sheno clean-ios
```

- To clean with CocoaPods cache, use the `--clean-cache` flag:

```bash
sheno clean-ios --clean-cache
```

- To update repositories during cleaning, use the `--repo-update` flag:

```bash
sheno clean-ios --repo-update
```

---

### 4. Build Flutter APK for Release
- By default, the build command will use FVM for Flutter commands:

```bash
sheno flutter-build-apk
```

- To run the build command without FVM, use the `--disable-fvm` flag:

```bash
sheno flutter-build-apk --disable-fvm
```

---

### 5. Build Flutter Bundle for Release
- By default, the build command will use FVM for Flutter commands:

```bash
sheno flutter-build-bundle
```

- To run the build command without FVM, use the `--disable-fvm` flag:

```bash
sheno flutter-build-bundle --disable-fvm
```

---

### 6. Build Flutter iOS App for Release
- By default, the build command will use FVM for Flutter commands:

```bash
sheno flutter-build-ios
```

- To run the build command without FVM, use the `--disable-fvm` flag:

```bash
sheno flutter-build-ios --disable-fvm
```

---

### 7. Create a Release IPA for Flutter App
- By default, the build command will use FVM for Flutter commands:

```bash
sheno flutter-build-ipa
```

- To run the build command without FVM, use the `--disable-fvm` flag:

```bash
sheno flutter-build-ipa --disable-fvm
```

---

### 8. Update App Version and Build Numbers
- To set version and build numbers for Android and iOS:

```bash
sheno flutter-update-version --app-version <version> --android-build <android-build-number> --ios-build <ios-build-number>
```

Replace `<version>`, `<android-build-number>`, and `<ios-build-number>` with your desired values.

---

### 9. Open Android Project in Android Studio
- Open the Android module of your Flutter project in Android Studio:

```bash
sheno open-android
```

---

### 10. Open iOS Project in Xcode
- Open the iOS module of your Flutter project in Xcode:

```bash
sheno open-ios
```

---

## Verification

After running any command, you can verify its success by observing the output or using the `sheno --version` command to confirm the CLI's version.

---

Enjoy using **Sheno CLI** to enhance your development workflow!

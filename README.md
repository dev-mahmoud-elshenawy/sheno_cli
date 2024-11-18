# Sheno CLI

<div style="text-align: center;">
    <img src="./assets/logo.png" alt="Sheno CLI" width="360" style="margin-bottom: 10px;"/> 
    <div style="display: inline-block; vertical-align: middle;">
        <a href="https://www.linkedin.com/in/dev-mahmoud-elshenawy/">
            <img src="https://img.shields.io/badge/Creator-Mahmoud%20El%20Shenawy-blue" alt="Creator" style="margin: 5px;">
        </a>
        <a href="https://www.buymeacoffee.com/m.elshenawy" target="_blank">
            <img src="https://cdn.buymeacoffee.com/buttons/default-orange.png" alt="Buy Me A Coffee" width="174" style="margin: 5px;">
        </a>
    </div>
</div>

**Sheno** is a powerful command-line interface (CLI) tool designed to streamline your workflows and automate repetitive tasks. With its user-friendly commands and robust functionality, Sheno helps you manage your projects efficiently and effectively.

## Features

- **Customizable**: Sheno the CLI commands and options to fit your specific needs.
- **User-Friendly**: Intuitive command-line experience with helpful output.
- **Built-In Error Handling**: Informative error messages for easy troubleshooting.
- **Cross-Platform Compatibility**: Consistent performance across macOS, Windows, and Linux.
- **Flexible Configuration**: Customize options for different environments and setups.
- **Detailed Command Documentation** Built-in help for all commands to guide usage.

## Installation

To install Sheno globally on your system, follow these steps:

1. **Clone the repository**:
   ```bash
   git clone https://github.com/dev-mahmoud-elshenawy/sheno_cli.git
   cd sheno_cli
   ```

To clone the repository at a specific version tag:

   ```bash
   git clone --branch v1.0.0 https://github.com/dev-mahmoud-elshenawy/sheno_cli.git
   cd sheno_cli
   ```
1. **Install the dependencies && run**:
   ```bash
   npm install && npm run build
   ```   
***

### macOS

3. **Add Sheno to your PATH**:
   
   ```bash
   echo 'export PATH="$PATH:/your_path/your_path/sheno_cli"' >> ~/.zshrc
   source ~/.zshrc
   ```

### Linux

3. **Add Sheno to your PATH**:
   
   ```bash
   echo 'export PATH="$PATH:/your_path/your_path/sheno_cli"' >> ~/.bashrc
   source ~/.bashrc
   ```
   
### Windows

3. **Add Sheno to your PATH**:
	- Search for “Environment Variables” in the Start menu.
	- Click on “Environment Variables”.
	- Under “System variables”, find the Path variable and click “Edit”.
	- Add the path to your npm global binaries (you can find this by running npm bin -g in your command prompt).
	- Click OK to save your changes.

***

1. **Verify the installation**:
   
   ```bash
   sheno --version
   ```

## Troubleshooting

If you encounter issues with the installation or running Sheno, follow these steps:

1. **Build the project**:
   ```bash
   npm run build
   ```

2. **Install Sheno globally**:
   ```bash
   npm install -g .
   ```

Run the following command to retrieve the location of the global npm binaries:

3. **Get the Global Binary Path**:
   ```bash
   npm bin -g
   ```

The output will be a directory path, such as:

   ```bash
   /your_path/your_path/.npm/bin
   ```

4. **Manually Add the Path to Your Shell Configuration**:
   
Copy the path from the npm bin -g command output and add it to your shell configuration:

5. **Add Sheno to your PATH**:

### macOS/Linux (zsh)

   ```bash
   echo 'export PATH="$PATH:/your_path/your_path/.npm/bin"' >> ~/.zshrc
   source ~/.zshrc
   ```

### Linux (bash)
   ```bash
   echo 'export PATH="$PATH:/your_path/your_path/.npm/bin"' >> ~/.bashrc
   source ~/.bashrc
   ```

6. **If you receive a permission error**:
   ```bash
   sheno --version
   zsh: permission denied: sheno
   ```

7. **Change the permission of the Sheno binary**:
   ```bash
   chmod +x /your_path/your_path/sheno_cli
   ```


## Usage

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

6. **To open the Android project in Android Studio, run:**:

   ```bash
   sheno open-android
   ```

7. **To open the iOS project in Xcode, run:**:

   ```bash
   sheno open-ios
   ```

## Contact

For inquiries or feedback, feel free to reach out to me:

- **GitHub**: [dev-mahmoud-elshenawy](https://github.com/dev-mahmoud-elshenawy)
- **Email**: [dev.m.elshenawy@icloud.com](mailto:dev.m.elshenawy@icloud.com)
- **LinkedIn**: [dev-mahmoud-elshenawy](https://www.linkedin.com/in/dev-mahmoud-elshenawy)
- **Medium**: [dev-mahmoud-elshenawy](https://medium.com/@dev-mahmoud-elshenawy)
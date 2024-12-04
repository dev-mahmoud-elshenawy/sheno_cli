# Troubleshooting Guide for Sheno CLI

This troubleshooting guide is designed to help you diagnose and resolve common issues you may encounter while using the **Sheno CLI tool**. Whether you're facing installation problems, command execution errors, or unexpected behavior, this document provides helpful steps and tips to resolve them.

If you encounter issues with the installation or running **Sheno**, follow these steps:

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

- The output will be a directory path, such as:

   ```bash
   /your_path/your_path/.npm/bin
   ```

4. **Manually Add the Path to Your Shell Configuration**:
   
- Copy the path from the npm bin -g command output and add it to your shell configuration:

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

If you encounter a problem that isn't listed here, please consider reporting it so we can assist you in resolving it.
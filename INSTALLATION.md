# Installation Guide for Sheno CLI

This guide provides various methods to install the **Sheno CLI Tool**. Whether you prefer installing via NPM, cloning the repository, or using Homebrew, choose the method that best suits your setup.

---

## Install via NPM

The easiest and most straightforward way to install the **Sheno CLI** is by using NPM. This method works on all platforms (macOS, Linux, and Windows).

### Steps:
1. Run the following command to install the CLI globally:
   ```bash
   npm install -g sheno_cli
   ```

2. Verify the installation:
   ```bash
   sheno --version
   ```

---

## Install via Repository Clone

For users who want to work with the source code directly, you can clone the repository and build it locally.

### Steps:
1. Clone the repository:
   ```bash
   git clone https://github.com/dev-mahmoud-elshenawy/sheno_cli.git
   cd sheno_cli
   ```

2. Install dependencies and build the project:
   ```bash
   npm install && npm run build
   ```

3. Add the CLI to your PATH (based on your operating system):
   - **macOS**:
     ```bash
     echo 'export PATH="$PATH:/your_path/sheno_cli"' >> ~/.zshrc
     source ~/.zshrc
     ```
   - **Linux**:
     ```bash
     echo 'export PATH="$PATH:/your_path/sheno_cli"' >> ~/.bashrc
     source ~/.bashrc
     ```
   - **Windows**:
     - Search for "Environment Variables" in the Start menu.
     - Click on "Environment Variables".
     - Under "System variables", find the `Path` variable and click "Edit".
     - Add the path to your npm global binaries (you can find this by running `npm bin -g` in your command prompt).
     - Click OK to save your changes.

4. Verify the installation:
   ```bash
   sheno --version
   ```

---

## Install via Homebrew

If you prefer using Homebrew to manage installations, follow these steps:

### HTTPS (Default)

If you don’t mind entering your GitHub credentials when prompted, you can tap the formula using HTTPS.

1. Tap the formula:
   ```bash
   brew tap dev-mahmoud-elshenawy/sheno_cli
   ```

2. Install the CLI:
   ```bash
   brew install sheno_cli
   ```

3. Use a Personal Access Token (PAT) for authentication if 2FA is enabled on your GitHub account:
   - Generate a PAT from your GitHub account under **Settings > Developer settings > Personal access tokens**.
   - Use your GitHub username and PAT as the password when prompted.

### SSH (Recommended)

SSH authentication is recommended as it eliminates the need to enter your username and password each time.

1. Tap the formula using SSH:
   ```bash
   brew tap dev-mahmoud-elshenawy/sheno_cli git@github.com:dev-mahmoud-elshenawy/sheno_cli.git
   ```

2. Install the CLI:
   ```bash
   brew install sheno_cli
   ```

3. Install dependencies and build the project:
   ```bash
   npm install && npm run build
   ```

---

### Verifying Installation

For all installation methods, verify that the CLI is installed correctly by running:

```bash
sheno --version
```

---

Enjoy using the **Sheno CLI Tool** to simplify your workflows!

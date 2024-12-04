# Installation Guide for Sheno CLI

This guide provides various methods to install the **Sheno CLI Tool**. Whether you prefer installing via NPM, cloning the repository, or using Homebrew, choose the method that best suits your setup.

## Install via NPM:

- The easiest and most straightforward way to install the **Sheno CLI** is by using NPM. This method works on all platforms (macOS, Linux, and Windows).

# Run the following command to install the CLI globally:

   ```bash
   npm install -g sheno_cli
   ```

## Install via Repository Clone:

- For users who want to work with the source code directly, you can clone the repository and build it locally.

# Clone the repository:
  
```bash
git clone https://github.com/dev-mahmoud-elshenawy/sheno_cli.git
cd sheno_cli
```

# Install dependencies and build the project:
  
```bash
npm install && npm run build
```
   
## Install via Homebrew:

- If you prefer using Homebrew to manage installations, follow these steps:

  
# HTTPS (Default)

If you don’t mind entering your GitHub credentials when prompted, you can tap the formula using HTTPS.

   ```bash
   brew tap dev-mahmoud-elshenawy/sheno_cli 
   ```

This method will prompt you for your GitHub username and password if authentication is required (for private repositories). If you are using two-factor authentication (2FA) on GitHub, you’ll need to use a Personal Access Token (PAT) instead of your password.

- How to use a PAT for authentication:
  1. Generate a Personal Access Token (PAT) from your GitHub account under Settings > Developer settings > Personal access tokens.
  2. Use your GitHub username and PAT as the password when prompted.

# SSH (Recommended)

SSH authentication is recommended. This eliminates the need to enter your username and password each time.

 ```bash
   brew tap dev-mahmoud-elshenawy/sheno_cli git@github.com:dev-mahmoud-elshenawy/sheno_cli.git
   ```

# Install the dependencies && run:

   ```bash
   npm install && npm run build
   ```   

# macOS

# Add Sheno to your PATH:
   
   ```bash
   echo 'export PATH="$PATH:/your_path/your_path/sheno_cli"' >> ~/.zshrc
   source ~/.zshrc
   ```

## Linux

# Add Sheno to your PATH:
   
   ```bash
   echo 'export PATH="$PATH:/your_path/your_path/sheno_cli"' >> ~/.bashrc
   source ~/.bashrc
   ```
   
## Windows

- Add Sheno to your PATH:
	- Search for “Environment Variables” in the Start menu.
	- Click on “Environment Variables”.
	- Under “System variables”, find the Path variable and click “Edit”.
	- Add the path to your npm global binaries (you can find this by running npm bin -g in your command prompt).
	- Click OK to save your changes.

## Verify the installation:
   
   ```bash
   sheno --version
   ```
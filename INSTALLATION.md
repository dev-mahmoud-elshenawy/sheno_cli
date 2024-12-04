# Installation Guide for Sheno CLI

This guide provides step-by-step instructions on how to install the **Sheno CLI Tool** on your system. Whether you're using macOS, Linux, or Windows, you'll find the appropriate method for your environment below.

Before starting the installation, ensure that you have the required dependencies such as Node.js installed on your machine. If you're unsure, check the system requirements section to confirm your setup.

Choose one of the installation methods listed below, and follow the instructions to get **Sheno CLI Tool** up and running on your system.

To install **Sheno** globally on your system, follow these steps:

1. **Clone the repository**:
   ```bash
   git clone https://github.com/dev-mahmoud-elshenawy/sheno_cli.git
   cd sheno_cli
   ```

- To clone the repository at a specific version tag:

   ```bash
   git clone --branch v1.0.0 https://github.com/dev-mahmoud-elshenawy/sheno_cli.git
   cd sheno_cli
   ```

To install `sheno-cli` using Homebrew, follow the steps below:-
  
## HTTPS (Default)

If you don’t mind entering your GitHub credentials when prompted, you can tap the formula using HTTPS.

   ```bash
   brew tap dev-mahmoud-elshenawy/sheno_cli 
   ```

This method will prompt you for your GitHub username and password if authentication is required (for private repositories). If you are using two-factor authentication (2FA) on GitHub, you’ll need to use a Personal Access Token (PAT) instead of your password.

- How to use a PAT for authentication:
  1. Generate a Personal Access Token (PAT) from your GitHub account under Settings > Developer settings > Personal access tokens.
  2. Use your GitHub username and PAT as the password when prompted.

## SSH (Recommended)

SSH authentication is recommended. This eliminates the need to enter your username and password each time.

 ```bash
   brew tap dev-mahmoud-elshenawy/sheno_cli git@github.com:dev-mahmoud-elshenawy/sheno_cli.git
   ```

2. **Install the dependencies && run**:

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

4. **Verify the installation**:
   
   ```bash
   sheno --version
   ```
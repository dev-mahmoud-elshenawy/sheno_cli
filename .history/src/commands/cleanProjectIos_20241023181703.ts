import * as fs from "fs";
import * as path from "path";
import chalk from "chalk";
import { execInIos, iosDirectory } from "../utils/execHelpers.js";


export async function cleanIosProject() {
    try {
      const xcodeProjPath = path.join(iosDirectory, "Runner.xcodeproj");
  
      if (!fs.existsSync(xcodeProjPath)) {
        throw new Error("No Xcode project found in the ios directory.");
      }
  
      console.log(chalk.green("Running clean for iOS project..."));
  
      // Remove Podfile.lock
      await execInIos("rm -rf Podfile.lock");
      console.log(chalk.yellow("Removed Podfile.lock."));
  
      // Clean up CocoaPods
      await execInIos("pod deintegrate");
      console.log(chalk.yellow("Deintegrated pods."));
  
      // Clean CocoaPods cache
      await execInIos("pod cache clean --all");
      console.log(chalk.yellow("Cleaned CocoaPods cache."));
  
      // Run pod repo update separately for clearer output
      console.log(chalk.green("Updating CocoaPods repositories..."));
      await execInIos("pod repo update");
      console.log(chalk.yellow("Updated CocoaPods repositories."));
  
      // Install pods with repo update
      console.log(chalk.green("Installing pods with repo update..."));
      await execInIos("pod install --repo-update --verbose");
      console.log(chalk.yellow("Installed pods with repo update."));
    } catch (error) {
      // Improved error handling and logging
      if (error instanceof Error) {
        console.error(chalk.red(`Error: ${error.message}`));
      } else if (typeof error === "string") {
        console.error(chalk.red(`Error: ${error}`));
      } else {
        console.error(chalk.red(`Unknown error: ${JSON.stringify(error)}`));
      }
    }
  }

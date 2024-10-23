import * as fs from "fs";
import * as path from "path";
import chalk from "chalk";
import { execInIos, iosDirectory } from "../utils/execHelpers.js";


// 
const COMMAND_TIMEOUT_MS = 300000; 

function execWithTimeout(command: string, timeout: number): Promise<void> {
  return new Promise((resolve, reject) => {
    const timeoutId = setTimeout(() => {
      reject(new Error(`Command timed out after ${timeout / 1000} seconds: ${command}`));
    }, timeout);

    execInIos(command)
      .then(() => {
        clearTimeout(timeoutId);
        resolve();
      })
      .catch((error) => {
        clearTimeout(timeoutId);
        reject(error);
      });
  });
}

export async function cleanIosProject() {
    try {
      const xcodeProjPath = path.join(iosDirectory, "Runner.xcodeproj");
  
      if (!fs.existsSync(xcodeProjPath)) {
        throw new Error("No Xcode project found in the ios directory.");
      }
  
      console.log(chalk.green("Running clean for iOS project..."));
  
      await execWithTimeout("rm -rf Podfile.lock", COMMAND_TIMEOUT_MS);
      console.log(chalk.yellow("Removed Podfile.lock."));
  
      await execWithTimeout("pod deintegrate", COMMAND_TIMEOUT_MS);
      console.log(chalk.yellow("Deintegrated pods."));
  
      // Clean CocoaPods cache
      await execWithTimeout("pod cache clean --all", COMMAND_TIMEOUT_MS);
      console.log(chalk.yellow("Cleaned CocoaPods cache."));
  
      // Update CocoaPods repositories
      console.log(chalk.green("Updating CocoaPods repositories..."));
      await execWithTimeout("pod repo update", COMMAND_TIMEOUT_MS);
      console.log(chalk.yellow("Updated CocoaPods repositories."));
  
      console.log(chalk.green("Installing pods with repo update..."));
      await execWithTimeout("pod install --repo-update", COMMAND_TIMEOUT_MS);
      console.log(chalk.yellow("Installed pods with repo update."));
    } catch (error) {
      if (error instanceof Error) {
        console.error(chalk.red(`Error: ${error.message}`));
      } else if (typeof error === "string") {
        console.error(chalk.red(`Error: ${error}`));
      } else {
        console.error(chalk.red(`Unknown error: ${JSON.stringify(error)}`));
      }
    }
  }

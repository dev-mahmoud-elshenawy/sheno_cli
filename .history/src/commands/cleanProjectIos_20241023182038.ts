import * as fs from "fs";
import * as path from "path";
import chalk from "chalk";
import { execInIos, iosDirectory } from "../utils/execHelpers.js";


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
  
      await execInIos("rm -rf Podfile.lock");
      console.log(chalk.yellow("Removed Podfile.lock."));
  
      await execInIos("pod deintegrate");
      console.log(chalk.yellow("Deintegrated pods."));
  
      await execInIos("pod cache clean --all");
      console.log(chalk.yellow("Cleaned CocoaPods cache."));
  
      console.log(chalk.green("Updating CocoaPods repositories..."));
      await execInIos("pod repo update --verbose");
      console.log(chalk.yellow("Updated CocoaPods repositories."));
  
      // Install pods with repo update
      console.log(chalk.green("Installing pods with repo update..."));
      await execInIos("pod install --verbose");
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

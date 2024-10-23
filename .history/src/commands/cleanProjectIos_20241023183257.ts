import * as fs from "fs";
import * as path from "path";
import chalk from "chalk";
import { execInIos, iosDirectory } from "../utils/execHelpers.js";


const COMMAND_TIMEOUT_MS = 600000; // Set timeout duration to 10 minutes (10 * 60 * 1000 ms)

function execWithTimeout(command: string): Promise<void> {
  return new Promise((resolve, reject) => {
    const timeoutId = setTimeout(() => {
      reject(new Error(`Command timed out after ${COMMAND_TIMEOUT_MS / 1000} seconds: ${command}`));
    }, COMMAND_TIMEOUT_MS);

    execInIos(command)
      .then(() => {
        clearTimeout(COMMAND_TIMEOUT_MS);
        resolve();
      })
      .catch((error) => {
        clearTimeout(COMMAND_TIMEOUT_MS);
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
  
      await execWithTimeout("rm -rf Podfile.lock");
      console.log(chalk.yellow("Removed Podfile.lock."));
  
      await execWithTimeout("pod deintegrate");
      console.log(chalk.yellow("Deintegrated pods."));
  
      // Clean CocoaPods cache
      await execWithTimeout("pod cache clean --all");
      console.log(chalk.yellow("Cleaned CocoaPods cache."));
  
      // Update CocoaPods repositories
      console.log(chalk.green("Updating CocoaPods repositories..."));
      await execWithTimeout("pod repo update");
      console.log(chalk.yellow("Updated CocoaPods repositories."));
  
      console.log(chalk.green("Installing pods with repo update..."));
      const installOutput = await execWithTimeout("pod install --repo-update --verbose");
      console.log(chalk.yellow("Installed pods with repo update."));
      console.log(chalk.blue(`Pod install output: ${installOutput}`)); 
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

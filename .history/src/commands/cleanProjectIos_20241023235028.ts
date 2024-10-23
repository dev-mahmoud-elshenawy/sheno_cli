import * as fs from "fs";
import * as path from "path";
import chalk from "chalk";
import { execInIos, iosDirectory } from "../utils/execHelpers.js";

const FLUTTER_XCFRAMEWORK_PATH = path.join(
  process.cwd(),
  "flutter",
  "bin",
  "cache",
  "artifacts",
  "engine",
  "ios",
  "Flutter.xcframework"
);

async function checkFlutterArtifacts() {
  if (!fs.existsSync(FLUTTER_XCFRAMEWORK_PATH)) {
    console.log(chalk.yellow("Flutter.xcframework not found. Running 'flutter precache --ios'..."));
    await execInIos("flutter precache --ios");
    console.log(chalk.green("Flutter.xcframework has been downloaded."));
  } else {
    console.log(chalk.green("Flutter.xcframework exists."));
  }
}

export async function cleanIosProject(cleanCache: boolean) {
  try {
    const xcodeProjPath = path.join(iosDirectory, "Runner.xcodeproj");

    if (!fs.existsSync(xcodeProjPath)) {
      throw new Error("No Xcode project found in the ios directory.");
    }

    console.log(chalk.green("Running clean for iOS project..."));

    await checkFlutterArtifacts();

    await execInIos("rm -rf Podfile.lock");
    console.log(chalk.yellow("Removed Podfile.lock."));

    await execInIos("pod deintegrate");
    console.log(chalk.yellow("Deintegrated pods."));

    await execInIos("pod cache clean --all");
    console.log(chalk.yellow("Cleaned CocoaPods cache."));

    console.log(chalk.green("Updating CocoaPods repositories..."));
    await execInIos("pod repo update");
    console.log(chalk.yellow("Updated CocoaPods repositories."));

    console.log(chalk.green("Installing pods with repo update..."));
    await execInIos("pod install --repo-update");
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
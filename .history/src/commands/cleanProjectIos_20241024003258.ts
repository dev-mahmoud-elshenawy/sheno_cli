import * as fs from "fs";
import * as path from "path";
import chalk from "chalk";
import { execInIos, execCommand, iosDirectory } from "../utils/execHelpers.js";

async function getFlutterSdkPath(): Promise<string> {
  const fvmDir = path.join(process.cwd(), ".fvm", "flutter_sdk");

  if (fs.existsSync(fvmDir)) {
    console.log(chalk.green("Using FVM Flutter SDK..."));
    return fvmDir;
  }

  const command = "which flutter";
  try {
    const globalFlutterPath = await execCommand(command);
    return path.dirname(globalFlutterPath.trim());
  } catch (error) {
    throw new Error(
      "Flutter SDK not found. Please ensure Flutter is installed."
    );
  }
}

async function getFlutterXcframeworkPath(): Promise<string> {
  const flutterSdkPath = await getFlutterSdkPath();
  return path.join(
    flutterSdkPath,
    "bin/cache/artifacts/engine/ios/Flutter.xcframework"
  );
}

async function ensureFlutterArtifactsExist() {
  const flutterXcframeworkPath = await getFlutterXcframeworkPath(); // Use await here

  if (!fs.existsSync(flutterXcframeworkPath)) {
    console.log(
      chalk.red(
        "Flutter.xcframework not found. Running 'flutter precache --ios'..."
      )
    );

    try {
      await execCommand("fvm flutter precache --ios");
      console.log(
        chalk.green("Flutter.xcframework has been downloaded successfully.")
      );
    } catch (error) {
      console.error(
        chalk.red(
          `Failed to run precache: ${
            error instanceof Error ? error.message : error
          }`
        )
      );
    }
  } else {
    console.log(
      chalk.green(
        "Flutter.xcframework exists. No need to run 'flutter precache --ios'."
      )
    );
  }
}

export async function cleanIosProject(cleanCache: boolean) {
  try {
    const xcodeProjPath = path.join(iosDirectory, "Runner.xcodeproj");

    if (!fs.existsSync(xcodeProjPath)) {
      throw new Error("No Xcode project found in the ios directory.");
    }

    console.log(chalk.green("Running clean for iOS project..."));

    // Use ensureFlutterArtifactsExist() instead of checkFlutterArtifacts()
    await ensureFlutterArtifactsExist();

    await execInIos("rm -rf Podfile.lock");
    console.log(chalk.yellow("Removed Podfile.lock."));

    await execInIos("pod deintegrate");
    console.log(chalk.yellow("Deintegrated pods."));

    if (cleanCache) {
      console.log(chalk.green("Cleaning CocoaPods cache..."));
      await execInIos("pod cache clean --all");
      console.log(chalk.yellow("Cleaned CocoaPods cache."));
    }
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

import chalk from "chalk";
import { execCommand } from "../utils/execHelpers.js";

export async function buildFlutterApk(noFvm: boolean) {
  console.log(
    chalk.yellow(
      noFvm
        ? "Building Flutter APK without FVM..."
        : "Building Flutter APK with FVM..."
    )
  );
  const command = noFvm
    ? "flutter build apk --release --obfuscate --split-debug-info=build/app/outputs/symbols"
    : "fvm flutter build apk --release --obfuscate --split-debug-info=build/app/outputs/symbols";

  try {
    const result = await execCommand(command);
    console.log(chalk.green("Flutter APK build successful."));
  } catch (error) {
    if (error instanceof Error) {
      console.error(chalk.red(`Error during APK build: ${error.message}`));
    } else {
      console.error(chalk.red(`Error during APK build: ${error}`));
    }
  }
}

export async function buildFlutterBundle(noFvm: boolean) {
    console.log(
      chalk.yellow(
        noFvm
          ? "Building Flutter Bundle without FVM..."
          : "Building Flutter Bundle with FVM..."
      )
    );
    const command = noFvm
      ? "flutter build appbundle --release --obfuscate --split-debug-info=build/app/outputs/symbols"
      : "fvm flutter build appbundle --release --obfuscate --split-debug-info=build/app/outputs/symbols";
  
    try {
      const result = await execCommand(command);
      console.log(chalk.green("Flutter Bundle build successful."));
    } catch (error) {
      if (error instanceof Error) {
        console.error(chalk.red(`Error during Bundle build: ${error.message}`));
      } else {
        console.error(chalk.red(`Error during Bundle build: ${error}`));
      }
    }
  }
  

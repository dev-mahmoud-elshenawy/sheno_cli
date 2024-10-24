import chalk from "chalk";
import { execCommand } from "../utils/execHelpers.js";
import { LoggerHelpers } from "../utils/loggerHelpers.js";

export { buildFlutterApk, buildFlutterBundle };

async function buildFlutterApk(noFvm: boolean) {
  LoggerHelpers.info(
    noFvm
      ? "Building Flutter APK without FVM..."
      : "Building Flutter APK with FVM..."
  );

  const command = noFvm
    ? "flutter build apk --release --obfuscate --split-debug-info=build/app/outputs/symbols"
    : "fvm flutter build apk --release --obfuscate --split-debug-info=build/app/outputs/symbols";

  try {
    const result = await execCommand(command);
    LoggerHelpers.success("Flutter APK build successful.");
  } catch (error) {
    if (error instanceof Error) {
      LoggerHelpers.error(`Error during APK build: ${error.message}`);
    } else {
      LoggerHelpers.error(`Error during APK build: ${error}`);
    }
  }
}

async function buildFlutterBundle(noFvm: boolean) {
  LoggerHelpers.info(
    noFvm
      ? "Building Flutter Bundle without FVM..."
      : "Building Flutter Bundle with FVM..."
  );

  const command = noFvm
    ? "flutter build appbundle --release --obfuscate --split-debug-info=build/app/outputs/symbols"
    : "fvm flutter build appbundle --release --obfuscate --split-debug-info=build/app/outputs/symbols";

  try {
    const result = await execCommand(command);
    LoggerHelpers.success("Flutter Bundle build successful.");
  } catch (error) {
    if (error instanceof Error) {
      LoggerHelpers.error(`Error during Bundle build: ${error.message}`);
    } else {
      LoggerHelpers.error(`Error during Bundle build: ${error}`);
    }
  }
}

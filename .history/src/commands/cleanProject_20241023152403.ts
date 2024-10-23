import { exec } from "child_process";
import chalk from "chalk";
import { handleExecResult } from "../utils/execUtils.js"; // Adjust the path as necessary

/**
 * Cleans the Flutter project based on the specified option.
 * 
 * @param {boolean} noFvm - Whether to run the clean command without FVM.
 */
export function cleanProject(noFvm: boolean) {
  if (noFvm) {
    cleanWithoutFvm();
  } else {
    cleanWithFvm();
  }
}

/**
 * Cleans the project using FVM.
 */
function cleanWithFvm() {
  const command = "fvm flutter clean && rm -rf pubspec.lock && fvm flutter pub get";
  exec(command, handleExecResult);
  console.log(chalk.green("Running clean with FVM..."));
}

/**
 * Cleans the project without using FVM.
 */
function cleanWithoutFvm() {
  const command = "flutter clean && rm -rf pubspec.lock && flutter pub get";
  exec(command, handleExecResult);
  console.log(chalk.green("Running clean without FVM..."));
}
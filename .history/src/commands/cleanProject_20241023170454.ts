import { exec } from "child_process";
import chalk from "chalk";
import { handleExecResult } from "../utils/execHelpers.js"; // Adjust the path as necessary

export function cleanProject(noFvm: boolean) {
  if (noFvm) {
    cleanWithoutFvm();
  } else {
    cleanWithFvm();
  }
}

function cleanWithFvm() {
  const command = "fvm flutter clean && rm -rf pubspec.lock && fvm flutter pub get";
  console.log(chalk.green("Running clean with FVM...")); 
  exec(command, handleExecResult);
}

function cleanWithoutFvm() {
  const command = "flutter clean && rm -rf pubspec.lock && flutter pub get";
  console.log(chalk.green("Running clean without FVM...")); // Moved logging before execution
  exec(command, handleExecResult);
}
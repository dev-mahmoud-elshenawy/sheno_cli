import { exec } from "child_process";
import chalk from "chalk";
import { handleExecResult } from "../utils/execHelpers.js";

export function cleanProject(noFvm: boolean) {
  if (noFvm) {
    cleanWithoutFvm();
  } else {
    cleanWithFvm();
  }
}

function cleanWithFvm() {
  const command =
    "fvm flutter clean && rm -rf pubspec.lock && fvm flutter pub get";
  console.log(chalk.green("Running clean with FVM..."));
  console.log(chalk.yellow(`Executing command: ${command}`));
  exec(command, handleExecResult);
}

function cleanWithoutFvm() {
  const command = "flutter clean && rm -rf pubspec.lock && flutter pub get";
  console.log(chalk.green("Running clean without FVM..."));
  exec(command, handleExecResult);
}

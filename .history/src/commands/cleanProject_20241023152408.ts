import { exec } from "child_process";
import chalk from "chalk";
import { handleExecResult } from "../utils/execUtils.js"; // Adjust the path as necessary


export function cleanProject(noFvm: boolean) {
  if (noFvm) {
    cleanWithoutFvm();
  } else {
    cleanWithFvm();
  }
}


function cleanWithFvm() {
  const command = "fvm flutter clean && rm -rf pubspec.lock && fvm flutter pub get";
  exec(command, handleExecResult);
  console.log(chalk.green("Running clean with FVM..."));
}

function cleanWithoutFvm() {
  const command = "flutter clean && rm -rf pubspec.lock && flutter pub get";
  exec(command, handleExecResult);
  console.log(chalk.green("Running clean without FVM..."));
}
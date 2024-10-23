import { exec } from "child_process";
import chalk from "chalk";
import { handleExecResult } from "../utils/execHelpers.js";

export function cleanProject(noFvm: boolean, cleanIos: boolean) {
    if (cleanIos) {
      cleanIosProject();
    } else if (noFvm) {
      cleanWithoutFvm();
    } else {
      cleanWithFvm();
    }
  }

function cleanWithFvm() {
  const command =
    "fvm flutter clean && rm -rf pubspec.lock && fvm flutter pub get";
  console.log(chalk.green("Running clean with FVM..."));
  exec(command, handleExecResult);
}

function cleanWithoutFvm() {
  const command = "flutter clean && rm -rf pubspec.lock && flutter pub get";
  console.log(chalk.green("Running clean without FVM..."));
  exec(command, handleExecResult);
}

function cleanIosProject() {
    const command = "cd ios && rm -rf Podfile.lock && pod deintegrate && pod install --repo-update";
    console.log(chalk.green("Running clean for iOS project..."));
    exec(command, handleExecResult);
  }

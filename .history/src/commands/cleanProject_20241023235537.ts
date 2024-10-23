import chalk from "chalk";
import { exec } from "../utils/execHelpers.js";

export function cleanProject(noFvm: boolean) {
  if (noFvm) {
    cleanWithoutFvm();
  } else {
    cleanWithFvm();
  }
}


async function cleanWithFvm() {
    const command = "fvm flutter clean && rm -rf pubspec.lock && fvm flutter pub get";
    console.log(chalk.green("Running clean with FVM..."));
    try {
      const result = await exec(command); 
      console.log(chalk.green("Clean with FVM successful"));
    } catch (error) {
      if (error instanceof Error) {
        console.error(chalk.red(`Error during FVM clean: ${error.message}`));
      } else {
        console.error(chalk.red(`Error during FVM clean: ${error}`)); 
      }
    }
  }
  
  async function cleanWithoutFvm() {
    const command = "flutter clean && rm -rf pubspec.lock && flutter pub get";
    console.log(chalk.green("Running clean without FVM..."));
    try {
      const result = await exec(command); // Using the renamed exec
      console.log(chalk.green("Clean without FVM successful"));
    } catch (error) {
      if (error instanceof Error) {
        console.error(chalk.red(`Error during non-FVM clean: ${error.message}`));
      } else {
        console.error(chalk.red(`Error during non-FVM clean: ${error}`));
      }
    }
}
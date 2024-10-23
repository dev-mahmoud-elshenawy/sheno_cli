import chalk from "chalk";
import { exec } from "../utils/execHelpers.js"; // Assuming your new exec function is in execHelpers.js

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
    console.error(chalk.red(`Error during FVM clean: ${error.message}`));
  }
}

async function cleanWithoutFvm() {
  const command = "flutter clean && rm -rf pubspec.lock && flutter pub get";
  console.log(chalk.green("Running clean without FVM..."));
  console.log(chalk.yellow(`Executing command: ${command}`));
  try {
    const result = await exec(command); // Use the new exec function
    console.log(chalk.green("Clean without FVM successful"));
    console.log(result); // Log the output if necessary
  } catch (error) {
    console.error(chalk.red(`Error during non-FVM clean: ${error.message}`));
  }
}
import { exec } from "child_process";
import chalk from "chalk";
import { execPromise } from "../utils/execHelpers.js"; 

export async function cleanIosProject() {
    try {
        console.log(chalk.green("Running clean for iOS project..."));
        
        await execPromise("cd ios");
        console.log(chalk.yellow("Changed directory to ios."));
        
        await execPromise("rm -rf Podfile.lock");
        console.log(chalk.yellow("Removed Podfile.lock."));
        
        await execPromise("pod deintegrate");
        console.log(chalk.yellow("Deintegrated pods."));
        
        await execPromise("pod install --repo-update");
        console.log(chalk.yellow("Installed pods with repo update."));

        await execPromise("cd ..");
        console.log(chalk.yellow("Changed back to previous directory."));
    } catch (error: unknown) {
        // Type assertion to ensure error has a message property
        if (error instanceof Error) {
            console.error(chalk.red(`Error: ${error.message}`));
        } else {
            console.error(chalk.red(`Unexpected error: ${String(error)}`));
        }
    }
}
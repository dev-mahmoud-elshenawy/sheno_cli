import { exec } from "child_process";
import chalk from "chalk";
import { handleExecResult } from "../utils/execHelpers.js"; 

export function cleanIosProject() {
    console.log(chalk.green("Running clean for iOS project..."));

    // Step 1: Change directory to ios
    exec("cd ios", (err) => {
        if (err) {
            console.error(chalk.red(`Error changing directory to ios: ${err.message}`));
            return;
        }

        console.log(chalk.yellow("Changed directory to ios."));

        // Step 2: Remove Podfile.lock
        exec("rm -rf Podfile.lock", (err) => {
            if (err) {
                console.error(chalk.red(`Error removing Podfile.lock: ${err.message}`));
                return;
            }
            console.log(chalk.yellow("Removed Podfile.lock."));

            // Step 3: Deintegrate pods
            exec("pod deintegrate", (err) => {
                if (err) {
                    console.error(chalk.red(`Error deintegrating pods: ${err.message}`));
                    return;
                }
                console.log(chalk.yellow("Deintegrated pods."));

                // Step 4: Install pods
                exec("pod install --repo-update", (err) => {
                    if (err) {
                        console.error(chalk.red(`Error installing pods: ${err.message}`));
                        return;
                    }
                    console.log(chalk.yellow("Installed pods with repo update."));
                    
                    // Optional: Change back to the previous directory if needed
                    exec("cd ..", (err) => {
                        if (err) {
                            console.error(chalk.red(`Error changing back to previous directory: ${err.message}`));
                        } else {
                            console.log(chalk.yellow("Changed back to previous directory."));
                        }
                    });
                });
            });
        });
    });
}
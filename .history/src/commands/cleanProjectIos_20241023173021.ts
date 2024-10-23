import { exec } from "child_process";
import chalk from "chalk";
import { handleExecResult } from "../utils/execHelpers.js"; 

export function cleanIosProject() {
    const command = "cd ios && rm -rf Podfile.lock && pod deintegrate && pod install --repo-update";
    console.log(chalk.green("Running clean for iOS project..."));
    exec(command, handleExecResult);
}
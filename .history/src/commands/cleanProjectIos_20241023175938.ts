import * as fs from 'fs';
import * as path from 'path';
import chalk from 'chalk';
import { ex } from "../utils/execHelpers.js";


export async function cleanIosProject() {
    try {
        const xcodeProjPath = path.join(iosDirectory, 'Runner.xcodeproj');
        
        if (!fs.existsSync(xcodeProjPath)) {
            throw new Error('No Xcode project found in ios directory.');
        }

        console.log(chalk.green("Running clean for iOS project..."));

        // Execute commands directly in the ios directory
        await execInIos("rm -rf Podfile.lock");
        console.log(chalk.yellow("Removed Podfile.lock."));
        
        await execInIos("pod deintegrate");
        console.log(chalk.yellow("Deintegrated pods."));
        
        await execInIos("pod install --repo-update");
        console.log(chalk.yellow("Installed pods with repo update."));
    } catch (error) {
        if (error instanceof Error) {
            console.error(chalk.red(`Error: ${error.message}`));
        } else {
            console.error(chalk.red(`Unknown error: ${error}`));
        }
    }
}
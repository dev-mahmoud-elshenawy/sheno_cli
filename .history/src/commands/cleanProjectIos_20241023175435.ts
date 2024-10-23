import * as fs from 'fs';
import * as path from 'path';
import chalk from 'chalk';
import { execPromise } from "../utils/execHelpers.js";

export async function cleanIosProject() {
    try {
        const iosDirectory = path.join(process.cwd(), 'ios');
        const xcodeProjPath = path.join(iosDirectory, 'Runner.xcodeproj');
        
        // Check for the existence of the Xcode project
        if (!fs.existsSync(xcodeProjPath)) {
            throw new Error('No Xcode project found in ios directory.');
        }

        console.log(chalk.green("Running clean for iOS project..."));

        // Execute commands directly in the ios directory
        await execPromise("rm -rf Podfile.lock", { cwd: iosDirectory });
        console.log(chalk.yellow("Removed Podfile.lock."));
        
        await execPromise("pod deintegrate", { cwd: iosDirectory });
        console.log(chalk.yellow("Deintegrated pods."));
        
        await execPromise("pod install --repo-update", { cwd: iosDirectory });
        console.log(chalk.yellow("Installed pods with repo update."));
    } catch (error) {
        if (error instanceof Error) {
            console.error(chalk.red(`Error: ${error.message}`));
        } else {
            console.error(chalk.red(`Unknown error: ${error}`));
        }
    }
}
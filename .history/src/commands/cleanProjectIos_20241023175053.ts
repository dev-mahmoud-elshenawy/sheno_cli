import * as fs from 'fs';
import * as path from 'path';
import chalk from 'chalk';
import { execPromise } from './execHelpers'; // Adjust import based on your structure

export async function cleanIosProject() {
    try {
        const iosDirectory = path.join(process.cwd(), 'ios');
        const xcodeProjPath = path.join(iosDirectory, 'Runner.xcodeproj');
        
        // Check if the Xcode project file exists
        if (!fs.existsSync(xcodeProjPath)) {
            throw new Error('No Xcode project found in ios directory.');
        }

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
    } catch (error) {
        if (error instanceof Error) {
            console.error(chalk.red(`Error: ${error.message}`));
        } else {
            console.error(chalk.red(`Unknown error: ${error}`));
        }
    }
}
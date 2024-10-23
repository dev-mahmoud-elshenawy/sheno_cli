import { exec } from "child_process";
import { promisify } from "util";
import path from "path";
import chalk from "chalk";

export function handleExecResult(
  err: Error | null,
  stdout: string,
  stderr: string
) {
  if (err) {
    console.error(chalk.red(`Error: ${err.message}`));
    return;
  }
  if (stderr) {
    console.error(chalk.red(`stderr: ${stderr}`));
  }
  if (stdout) {
    console.log(chalk.green(`stdout: ${stdout}`));
  }
}

export function execPromise(command: string): Promise<void> {
  return new Promise((resolve, reject) => {
    exec(command, (err: Error | null, stdout: string, stderr: string) => {
      handleExecResult(err, stdout, stderr);

      if (err) {
        reject(new Error(stderr || stdout || err.message));
      } else {
        resolve();
      }
    });
  });
}

export const iosDirectory = path.join(process.cwd(), "ios"); // Export it

const execAsync = promisify(exec);

export async function execInIos(command: string): Promise<void> {
  try {
    const fullCommand = `cd ${iosDirectory} && ${command}`;
    console.log(chalk.blue(`Executing command: ${fullCommand}`));

    const { stdout, stderr } = await execAsync(`sh -c "${fullCommand}"`);

    handleExecResult(null, stdout, stderr);
  } catch (error) {
    const err = error as { message?: string };
    console.error(chalk.red(`Failed to execute: ${command}`));
    throw new Error(
      `Command failed: ${command}\n${err.message || "Unknown error"}`
    );
  }
}


const COMMAND_TIMEOUT_MS = 300000; // Set timeout duration in milliseconds (e.g., 5 minutes)

function execWithTimeout(command: string, timeout: number): Promise<void> {
  return new Promise((resolve, reject) => {
    const timeoutId = setTimeout(() => {
      reject(new Error(`Command timed out after ${timeout / 1000} seconds: ${command}`));
    }, timeout);

    execInIos(command)
      .then(() => {
        clearTimeout(timeoutId);
        resolve();
      })
      .catch((error) => {
        clearTimeout(timeoutId);
        reject(error);
      });
  });
}

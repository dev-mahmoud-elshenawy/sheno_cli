import { exec, spawn } from "child_process";
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

export async function execCommand(command: string): Promise<string> {
  return new Promise((resolve, reject) => {
    const fullCommand = `${command}`;
    const process = spawn(fullCommand, { shell: true });

    let output = "";

    process.stdout.on("data", (data) => {
      const dataString = data.toString().trim();
      output += dataString;
      if (dataString.trim()) {
        console.log(chalk.green(dataString));
      }
    });

    process.stderr.on("data", (data) => {
      console.error(chalk.red(data.toString()));
    });

    process.on("close", (code) => {
      if (code !== 0) {
        reject(new Error(`Command failed with exit code ${code}`));
      } else {
        resolve(output);
      }
    });

    process.on("error", (err) => {
      reject(new Error(`Failed to start subprocess: ${err.message}`));
    });
  });
}

export async function execInIos(command: string): Promise<string> {
  return new Promise((resolve, reject) => {
    const fullCommand = `cd ${iosDirectory} && ${command}`;
    const process = spawn(fullCommand, { shell: true });

    let output = "";

    process.stdout.on("data", (data) => {
      const dataString = data.toString().trim();
      output += dataString;
      if (dataString.trim()) {
        console.log(chalk.green(dataString));
      }
    });

    process.stderr.on("data", (data) => {
      console.error(chalk.red(data.toString()));
    });

    process.on("close", (code) => {
      if (code !== 0) {
        reject(new Error(`Command failed with exit code ${code}`));
      } else {
        resolve(output);
      }
    });

    process.on("error", (err) => {
      reject(new Error(`Failed to start subprocess: ${err.message}`));
    });
  });
}

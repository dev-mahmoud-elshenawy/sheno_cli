import { exec } from "child_process";
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
  if (stderr !== "") {
    console.error(chalk.red(`stderr: ${stderr}`));
  }
  if()
  console.log(chalk.green(`stdout: ${stdout}`));
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
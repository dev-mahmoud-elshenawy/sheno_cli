aimport chalk from "chalk";

/**
 * Handles the execution result of a command.
 * 
 * @param {Error} err - The error object if an error occurred.
 * @param {string} stdout - The standard output from the command.
 * @param {string} stderr - The standard error output from the command.
 */
export function handleExecResult(err: Error, stdout: string, stderr: string) {
  if (err) {
    console.error(chalk.red(`Error: ${stderr}`));
  } else {
    console.log(chalk.green(stdout));
  }
}
aimport chalk from "chalk";

export function handleExecResult(err: Error, stdout: string, stderr: string) {
  if (err) {
    console.error(chalk.red(`Error: ${stderr}`));
  } else {
    console.log(chalk.green(stdout));
  }
}
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
  console.log(chalk.green(`stdout: ${stdout}`));
}

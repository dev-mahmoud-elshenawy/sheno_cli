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
  if(stdout !== ""){
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

const execAsync = promisify(exec);

const iosDirectory = path.join(process.cwd(), 'ios');

export async function execInIos(command: string): Promise<void> {
    try {
        const { stdout, stderr } = await execAsync(command, { cwd: iosDirectory });
        console.log(chalk.green(`stdout: ${stdout}`));
        if (stderr) {
            console.error(chalk.red(`stderr: ${stderr}`));
        }
    } catch (error) {
        throw new Error(`Command failed: ${command}\n${error.message}`);
    }
}
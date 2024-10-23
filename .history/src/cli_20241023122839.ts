#!/usr/bin/env node

import chalk from "chalk";
import boxen from "boxen";
import yargs from "yargs";
import { hideBin } from "yargs/helpers";  // Import hideBin to handle arguments
import { generateModule } from "./commands/generateModule.js"; // Ensure correct file extension
import { boxenOptions } from "./styles.js"; // Ensure correct file extension

const greeting = chalk.white.bold("A7la Msa Yastaaaaaa ^_^");
console.log(boxen(greeting, boxenOptions));

const options = yargs(hideBin(process.argv))
  .command(
    "generate module <moduleName>",
    "Generate a module with structure",
    {},
    (argv: { moduleName: string }) => {  // Explicitly typing argv
      generateModule(argv.moduleName);
    }
  )
  .help(true)
  .version("1.0.0")
  .argv;
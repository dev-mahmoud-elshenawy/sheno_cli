#!/usr/bin/env node

import chalk from "chalk";
import boxen from "boxen";
import yargs from "yargs";
import { hideBin } from "yargs/helpers";  
import { generateModule } from "./commands/generateModule.js"; 
import { boxenOptions } from "./styles.js"; 

const greeting = chalk.white.bold("A7la Msa Yastaaaaaa ^_^");
console.log(boxen(greeting, boxenOptions));

const options = yargs(hideBin(process.argv))
  .command(
    "generate module <moduleName>",
    "Generate a module with structure",
    {},
    (argv: ArgumentsCamelCase) => {  // Use ArgumentsCamelCase type from Yargs
      generateModule(argv.moduleName as string); // Use type assertion
    }
  )
  .help(true)
  .version("1.0.0")
  .argv;
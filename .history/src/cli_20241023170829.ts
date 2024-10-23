#!/usr/bin/env node

import chalk from "chalk";
import boxen from "boxen";
import yargs from "yargs/yargs";
import { hideBin } from "yargs/helpers";
import { generateModule } from "./commands/generateModule.js";
import { cleanProject } from "./commands/cleanProject.js";
import { boxenOptions } from "./styles.js";

const greeting = chalk.white.bold("A7la Msa ^_^");
console.log(boxen(greeting, boxenOptions));

const options = yargs(hideBin(process.argv))
  .command(
    "generate module <moduleName>",
    "Generate a module with structure",
    {},
    (argv) => {
      const moduleName = argv.moduleName as string;
      generateModule(moduleName);
    }
  )
  .command(
    "clean",
    "Clean the Flutter project",
    (yargs) => {
      return yargs.option("no-fvm", {
        type: "boolean",
        default: false,
        description: "Run without FVM",
      });
    },
    (argv) => {
      const noFvm = argv['no-fvm'] as boolean;
      cleanProject(noFvm);
    }
  )
  .help(true)
  .version("1.0.0").argv;

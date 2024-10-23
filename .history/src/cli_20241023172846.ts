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
      return yargs.option("fvm", {
        type: "boolean",
        default: true,
        description: "Run with FVM (use --no-fvm to disable)",
      });
    },
    (argv) => {
      const useFvm = argv.fvm as boolean;
      cleanProject(!useFvm);
    }
  ).command(
    "clean",
    "Clean the Flutter project",
    (yargs) => {
      return yargs
        .option("no-fvm", {
          type: "boolean",
          description: "Run without FVM",
        })
        .option("clean-ios", {
          type: "boolean",
          description: "Clean the iOS project",
        });
    },
    (argv) => {
      const noFvm = argv.noFvm as boolean;
      const cleanIos = argv.cleanIos as boolean;
      cleanProject(noFvm, cleanIos);
    }
  )
  .help(true)
  .version("1.0.0").argv;

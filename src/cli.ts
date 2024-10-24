#!/usr/bin/env node

import chalk from "chalk";
import boxen from "boxen";
import yargs from "yargs/yargs";
import { hideBin } from "yargs/helpers";
import { generateModule } from "./commands/generateModule.js";
import { cleanProject } from "./commands/cleanProject.js";
import { cleanIosProject } from "./commands/cleanProjectIos.js";
import {
  buildFlutterApk,
  buildFlutterBundle,
} from "./commands/buildReleases.js";
import { boxenOptions } from "./styles.js";
import { openIos, openAndroid } from "./commands/openProject.js";

const greeting = chalk.white.bold("A7la Msa ^_^");
console.log(boxen(greeting, boxenOptions));

const options = yargs(hideBin(process.argv))
  .command(
    "generate module <moduleName>",
    "Generate a module with structure",
    (yargs) => {
      return yargs.positional("moduleName", {
        describe: "The name of the module to generate",
        type: "string",
      });
    },
    (argv) => {
      const moduleName = argv.moduleName as string;
      generateModule(moduleName);
    }
  )
  .command(
    "clean-flutter",
    "Clean the Flutter project",
    (yargs) => {
      return yargs.option("disable-fvm", {
        type: "boolean",
        default: false,
        description: "Run without FVM (use --disable-fvm to enable)",
      });
    },
    (argv) => {
      const noFvm = argv.disableFvm as boolean;
      cleanProject(noFvm);
    }
  )
  .command(
    "clean-ios",
    "Clean the iOS project",
    (yargs) => {
      return yargs.option("clean-cache", {
        type: "boolean",
        default: false,
        description:
          "Run with CocoaPods cache cleaning (use --clean-cache to enable)",
      });
    },
    (argv) => {
      const cleanCache = argv.cleanCache as boolean;
      cleanIosProject(cleanCache);
    }
  )
  .command(
    "flutter-build-apk",
    "Build the Flutter APK with release configuration, obfuscation, and split debug info",
    (yargs) => {
      return yargs.option("disable-fvm", {
        type: "boolean",
        default: false,
        description: "Run without FVM (use --disable-fvm to enable)",
      });
    },
    async (argv) => {
      const noFvm = argv.disableFvm as boolean;
      await buildFlutterApk(noFvm);
    }
  )
  .command(
    "flutter-build-bundle",
    "Build the Flutter Bundle with release configuration, obfuscation, and split debug info",
    (yargs) => {
      return yargs.option("disable-fvm", {
        type: "boolean",
        default: false,
        description: "Run without FVM (use --disable-fvm to enable)",
      });
    },
    async (argv) => {
      const noFvm = argv.disableFvm as boolean;
      await buildFlutterBundle(noFvm);
    }
  )
  .command("open-ios", "Open the iOS project in Xcode", {}, async () => {
    await openIos();
  },)
  .command(
    "open-android",
    "Open the Android project in Android Studio",
    {},
    async () => {
      await openAndroid();
    }
  )
  .help(true)
  .version("1.0.0").argv;

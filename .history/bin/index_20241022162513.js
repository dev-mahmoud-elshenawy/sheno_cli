#!/usr/bin/env node

import chalk from "chalk";
import boxen from "boxen";
import yargs from "yargs";
import fs from 'fs';
import path from 'path';
import * as utils from "./utils.js";

const boxenOptions = {
  padding: 1,
  margin: 1,
  borderStyle: "round",
  borderColor: "blue",
  backgroundColor: "#555555",
};

// Greeting message
const greeting = chalk.white.bold("A7la Msa Yastaaaaaa ^_^");

// Display greeting message with boxen styling
console.log(boxen(greeting, boxenOptions));

// Setup yargs options
const options = yargs
  .usage(utils.usage)
  .command(
    "generate bloc <blocName>",
    "Generate a BaseBloc file",
    {},
    (argv) => {
      generateBloc(argv.blocName);
    }
  )
  .help(true)
  .version("1.0.0").argv;

if (!yargs.argv._.length) {
  utils.showHelp();
  process.exit(1);
}

function generateBloc(blocName) {
    const blocPath = path.join('lib', 'bloc', `${blocName}_bloc.dart`);
    const directoryExists = fs.existsSync('lib/bloc');
    if (!directoryExists) {
        fs.mkdirSync('bloc', { recursive: true });
    }

    const className = getClassName(blocName);
    const template = `
part of '../import/${blocName}_import.dart';

class ${className}Bloc extends BaseBloc {
    ${className}Bloc() : super(
    ${className}StateFactory(), 
    initialState: ${className}InitialState(),
    ) {}

    @override
    void onDispose() {}
}
    `;

    fs.writeFileSync(blocPath, template);
    console.log(chalk.green(`Bloc file ${blocName}_bloc.dart created at lib/bloc/`));
}


// Function to process blocName into the required class name
function getClassName(blocName) {
    // Remove "bloc" if present, split by underscore, and capitalize each part
    const defineItems = blocName.replace('bloc', '').split('_');
    let className = '';
    defineItems.forEach(item => {
        className += capitalize(item);
    });
    return className;
}

// Utility function to capitalize a string
function capitalize(string) {
  return string.charAt(0).toUpperCase() + string.slice(1).toLowerCase();
}

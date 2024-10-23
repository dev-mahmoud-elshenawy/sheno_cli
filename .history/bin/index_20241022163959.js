#!/usr/bin/env node

import chalk from "chalk";
import boxen from "boxen";
import yargs from "yargs";
import fs from "fs";
import path from "path";
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
    "generate module <moduleName>",
    "Generate a module with bloc structure",
    {},
    (argv) => {
      generateModule(argv.moduleName);
    }
  )
  .help(true)
  .version("1.0.0").argv;

if (!yargs.argv._.length) {
  utils.showHelp();
  process.exit(1);
}

// Function to generate the module directory structure
function generateModule(moduleName) {
    const modulePath = path.join('lib', 'module', moduleName);
  
    // Directories to create within the module
    const directories = ['bloc', 'event', 'state', 'screen', 'import', 'factory'];
  
    // Create directories if they don't exist
    directories.forEach((dir) => {
      const dirPath = path.join(modulePath, dir);
      if (!fs.existsSync(dirPath)) {
        fs.mkdirSync(dirPath, { recursive: true });
      }
    });
  
    // Generate the bloc file
    generateBloc(moduleName, path.join(modulePath, 'bloc'));
  
    console.log(chalk.green(`Module ${moduleName} created with basic structure.`));
  }
  
// Function to generate the BaseBloc class inside the bloc directory
function generateBloc(moduleName, blocPath) {
    const blocFilePath = path.join(blocPath, `${moduleName}_bloc.dart`);
  
    // Generate the class name from the module name
    const className = getClassName(moduleName);
  
    // Template for the bloc file
    const template = `
  part of '../import/${moduleName}_import.dart';
  
  class ${className}Bloc extends BaseBloc {
      ${className}Bloc() : super(
      ${className}StateFactory(), 
      initialState: ${className}InitialState(),
      ) {}
  
      @override
      void onDispose() {}
  }
    `;
  
    // Write the template to the file
    fs.writeFileSync(blocFilePath, template);
    console.log(chalk.green(`Bloc file ${moduleName}_bloc.dart created in ${blocPath}`));
  }

// Function to process blocName into the required class name
function getClassName(blocName) {
  // Remove "bloc" if present, split by underscore, and capitalize each part
  const defineItems = blocName.replace("bloc", "").split("_");
  let className = "";
  defineItems.forEach((item) => {
    className += capitalize(item);
  });
  return className;
}

// Utility function to capitalize a string
function capitalize(string) {
  return string.charAt(0).toUpperCase() + string.slice(1).toLowerCase();
}

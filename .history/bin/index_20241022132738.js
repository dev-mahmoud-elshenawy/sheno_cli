#!/usr/bin/env node

import chalk from 'chalk';
import boxen from 'boxen';
import yargs from 'yargs';
import * as utils from './utils.js';

const boxenOptions = {
    padding: 1,
    margin: 1,
    borderStyle: 'round',
    borderColor: 'blue',
    backgroundColor: '#555555'
  };

// Greeting message
const greeting = chalk.white.bold("A7la Msa Yastaaaaaa ^_^");

// Display greeting message with boxen styling
console.log(boxen(greeting, boxenOptions));  


// Setup yargs options
const options = yargs
  .usage(utils.usage)
  .command('generate module <moduleName>', 'Generate a new Flutter module', {}, (argv) => {
    generateModule(argv.moduleName);
  })
  .command('generate class <moduleName> <className>', 'Generate a new class in the specified module', {}, (argv) => {
    generateClass(argv.moduleName, argv.className);
  })
  .help(true)
  .version('1.0.0')
  .argv;

if (!yargs.argv._.length) {
  utils.showHelp();
  process.exit(1);
}

// Function to generate a new Flutter module
function generateModule(moduleName) {
    const modulePath = path.join('lib', 'modules', moduleName);
    const directoryExists = fs.existsSync(modulePath);
  
    if (!directoryExists) {
      fs.mkdirSync(modulePath, { recursive: true });
      const moduleFile = path.join(modulePath, `${moduleName}.dart`);
      fs.writeFileSync(moduleFile, `class ${capitalize(moduleName)} {\n  // TODO: Implement ${moduleName} module\n}\n`);
      console.log(chalk.green(`Module ${moduleName} created at ${modulePath}`));
    } else {
      console.log(chalk.red(`Module ${moduleName} already exists!`));
    }
  }
  
  // Function to generate a new class inside a specified module
  function generateClass(moduleName, className) {
    const modulePath = path.join('lib', 'modules', moduleName);
    const classPath = path.join(modulePath, `${className}.dart`);
    const directoryExists = fs.existsSync(modulePath);
  
    if (directoryExists) {
      fs.writeFileSync(classPath, `class ${capitalize(className)} {\n  // TODO: Implement ${className} class\n}\n`);
      console.log(chalk.green(`Class ${className} created in ${modulePath}`));
    } else {
      console.log(chalk.red(`Module ${moduleName} does not exist! Please create the module first.`));
    }
  }
  
  // Utility function to capitalize a string
  function capitalize(string) {
    

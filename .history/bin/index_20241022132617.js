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


if (!yargs.argv._.length) {
  utils.showHelp();
  process.exit(1);
}

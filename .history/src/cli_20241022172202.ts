#!/usr/bin/env node

import chalk from 'chalk';
import boxen from 'boxen';
import yargs from 'yargs';
import { generateModule } from './commands/generateModule';

// Greeting message
const boxenOptions = {
  padding: 1,
  margin: 1,
  borderStyle: 'round',
  borderColor: 'blue',
  backgroundColor: '#555555',
};

const greeting = chalk.white.bold("A7la Msa Yastaaaaaa ^_^");
console.log(boxen(greeting, boxenOptions));

const options = yargs
  .command('generate module <moduleName>', 'Generate a module with structure', {}, (argv) => {
    generateModule(argv.moduleName);
  })
  .help(true)
  .version('1.0.0')
  .argv;
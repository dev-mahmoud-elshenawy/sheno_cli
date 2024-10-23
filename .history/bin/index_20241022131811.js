#!/usr/bin/env node

import chalk from 'chalk';
import boxen from 'boxen';
import yargs from 'yargs';
import * as utils from './utils.js';
import { boxenOptions } from './styles.js'; // Importing specific export

// Greeting message
const greeting = chalk.white.bold("A7la Msa Yastaaaaaa ^_^");

// Display greeting message with boxen styling
console.log(boxen(greeting, boxenOptions));  // Using boxenOptions from styles.js

// Setup yargs options
const options = yargs
  .usage(utils.usage)
  .help(true)
  .version('1.0.0')
  .argv;

if (!yargs.argv._.length) {
  utils.showHelp();
  process.exit(1);
}

const sentence = utils.parseSentence(yargs.argv._);
if (!sentence) {
  console.error(chalk.red("\nNo sentence provided!\n"));
  process.exit(1);
}

// Display the parsed sentence in a green-styled box
console.log(boxen(chalk.green(`\nParsed Sentence: ${sentence}\n`), {
  padding: 1,
  borderColor: 'green',
  dimBorder: true
}));
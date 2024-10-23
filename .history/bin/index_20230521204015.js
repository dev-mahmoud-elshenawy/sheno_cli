#!/usr/bin/env node

import chalk from 'chalk';
import boxen from 'boxen';
import yargs from "yargs";
import * as utils from "./utils.js"
import translate from '@vitalets/google-translate-api';

const greeting = chalk.white.bold("A7la Msa Yastaaaaaa ^_^");

const boxenOptions = {
    padding: 1,
    margin: 1,
    borderStyle: "round",
    borderColor: "red",
    backgroundColor: "#555555"
};

const msgBox = boxen(greeting, boxenOptions);

const usage = chalk.hex('#83aaff')("\\nUsage: tran <lang\_name> sentence to be translated");

const options = yargs
    .usage(usage)
    .option("l", {alias: "languages", describe: "List all supported languages.", type: "boolean", demandOption: false})
    .help(true)
    .version('1.0.0')
    .argv;

console.log(msgBox);


if (yargs.argv.l == true || yargs.argv.languages == true) {
    utils.showAll();
    // return '';
}

if (yargs.argv._[0] == null) {
    utils.showHelp();
    // return '';
}

if (yargs.argv._[0])
    var language = yargs.argv._[0].toLowerCase();


var sentence = "";

sentence = utils.parseSentence(yargs.argv._);

// const translate = require('[@vitalets/google-translate-api](http://twitter.com/vitalets/google-translate-api)')


if (sentence == "") {
    console.error(chalk.red.bold("\nThe entered sentence is like John Cena, I can't see it!\n"))
    console.log(chalk.green("Enter tran --help to get started.\n"))
    // return;
}

language = utils.parseLanguage(language);

if (language == null) {
    // return;
} else {
    translate(sentence, {to: language}).then(res => {

        console.log("\n" + boxen(chalk.green("\n" + res.text + "\n"), {
            padding: 1,
            borderColor: 'green',
            dimBorder: true
        }) + "\n");

    }).catch(err => {
        console.error(err);
    });
}


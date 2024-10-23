import chalk from 'chalk';

export const usage = "\nUsage: sheno <sentence>";

export function parseSentence(words) {
  return words.join(' ');
}

export function showHelp() {
  console.log(usage);
  console.log('\nOptions:');
  console.log('--version    Show version number');
  console.log('--help       Show help');
}
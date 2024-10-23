// src/styles.ts

import boxen, { Options } from 'boxen';

// Use the Boxen border style enum
export const boxenOptions: Options = {
  padding: 1,
  margin: 1,
  borderStyle: boxen.BorderStyle.Round, 
  borderColor: 'blue',
  backgroundColor: '#555555',
};
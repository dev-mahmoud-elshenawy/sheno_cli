// src/styles.ts

import { Options } from 'boxen';

// Define boxenOptions with the correct types
export const boxenOptions: Options = {
  padding: 1,
  margin: 1,
  borderStyle: 'round' as Options['borderStyle'], // Cast to the proper type
  borderColor: 'blue',
  backgroundColor: '#555555',
};
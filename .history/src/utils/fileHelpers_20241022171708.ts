// src/utils/fileHelpers.ts
import fs from 'fs';
import path from 'path';
import { capitalize } from './stringHelpers';

export function createDirectories(modulePath: string, directories: string[]) {
  directories.forEach((dir) => {
    const dirPath = path.join(modulePath, dir);
    if (!fs.existsSync(dirPath)) {
      fs.mkdirSync(dirPath, { recursive: true });
    }
  });
}

export function writeFile(filePath: string, content: string) {
  fs.writeFileSync(filePath, content);
}

export function getClassName(moduleName: string, type: string): string {
  const defineItems = moduleName.replace(type, '').split('_');
  let className = '';
  defineItems.forEach((item) => {
    className += capitalize(item);
  });
  return className;
}
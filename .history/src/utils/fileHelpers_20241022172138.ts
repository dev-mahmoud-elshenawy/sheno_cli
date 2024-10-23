import fs from "fs";
import path from "path";

export function createDirectories(modulePath: string, directories: string[]) {
  directories.forEach((dir) => {
    const dirPath = path.join(modulePath, dir);
    if (!fs.existsSync(dirPath)) {
      fs.mkdirSync(dirPath, { recursive: true });
    }
  });
}

export function writeFile(filePath: string, content: string) {
  fs.writeFileSync(filePath, content.trim());
}

export function getClassName(moduleName: string, type: string): string {
  const defineItems = moduleName.replace(type, "").split("_");
  let className = "";
  defineItems.forEach((item) => {
    className += capitalize(item);
  });
  return className;
}

function capitalize(string: string): string {
  return string.charAt(0).toUpperCase() + string.slice(1).toLowerCase();
}
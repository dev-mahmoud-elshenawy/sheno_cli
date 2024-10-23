import fs from "fs";
import path from "path";
import { capitalize } from "./stringHelpers.js";
export function createDirectories(modulePath, directories) {
    directories.forEach((dir) => {
        const dirPath = path.join(modulePath, dir);
        if (!fs.existsSync(dirPath)) {
            fs.mkdirSync(dirPath, { recursive: true });
        }
    });
}
export function writeFile(filePath, content) {
    fs.writeFileSync(filePath, content);
}
export function getClassName(moduleName, type) {
    const defineItems = moduleName.replace(type, "").split("_");
    let className = "";
    defineItems.forEach((item) => {
        className += capitalize(item);
    });
    return className;
}

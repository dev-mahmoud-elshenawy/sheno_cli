import fs from "fs";
import path from "path";
import chalk from "chalk";
import {
  createDirectories,
  writeFile,
  getClassName,
} from "../utils/fileHelpers";

export function generateModule(moduleName: string) {
  const modulePath = path.join("lib", "module", moduleName);
  const directories = ["bloc", "event", "state", "screen", "import", "factory"];

  createDirectories(modulePath, directories);

  generateBloc(moduleName, path.join(modulePath, "bloc"));
  generateEvent(moduleName, path.join(modulePath, "event"));
  generateState(moduleName, path.join(modulePath, "state"));
  generateScreen(moduleName, path.join(modulePath, "screen"));
  generateImport(moduleName, path.join(modulePath, "import"));
  generateStateFactory(moduleName, path.join(modulePath, "factory"));

  console.log(chalk.green(`Module ${moduleName} created with full structure.`));
}

function generateBloc(moduleName: string, blocPath: string) {
  const blocFilePath = path.join(blocPath, `${moduleName}_bloc.dart`);
  const className = getClassName(moduleName, "bloc");

  const template = `
part of '../import/${moduleName}_import.dart';

class ${className}Bloc extends BaseBloc {
    ${className}Bloc() : super(
    ${className}StateFactory(), 
    initialState: ${className}InitialState(),
    ) {}

    @override
    void onDispose() {}
}
  `;

  writeFile(blocFilePath, template);
  console.log(
    chalk.green(`Bloc file ${moduleName}_bloc.dart created in ${blocPath}`)
  );
}

// Repeat for other generation functions (generateEvent, generateState, etc.)

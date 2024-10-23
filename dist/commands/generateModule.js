import path from "path";
import chalk from "chalk";
import { createDirectories, writeFile, getClassName, } from "../utils/fileHelpers.js";
export function generateModule(moduleName) {
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
function generateBloc(moduleName, blocPath) {
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
    console.log(chalk.green(`Bloc file ${moduleName}_bloc.dart created in ${blocPath}`));
}
function generateEvent(moduleName, eventPath) {
    const eventFilePath = path.join(eventPath, `${moduleName}_event.dart`);
    const className = getClassName(moduleName, "event");
    const template = `
part of '../import/${moduleName}_import.dart';

class ${className}InitialEvent extends BaseEvent {}
  `;
    writeFile(eventFilePath, template);
    console.log(chalk.green(`Event file ${moduleName}_event.dart created in ${eventPath}`));
}
function generateState(moduleName, statePath) {
    const stateFilePath = path.join(statePath, `${moduleName}_state.dart`);
    const className = getClassName(moduleName, "state");
    const template = `
part of '../import/${moduleName}_import.dart';

class ${className}InitialState extends RenderDataState {
  ${className}InitialState() : super(null);
}
  `;
    writeFile(stateFilePath, template);
    console.log(chalk.green(`State file ${moduleName}_state.dart created in ${statePath}`));
}
function generateScreen(moduleName, screenPath) {
    const screenFilePath = path.join(screenPath, `${moduleName}_screen.dart`);
    const className = getClassName(moduleName, "screen");
    const template = `
part of '../import/${moduleName}_import.dart';

class ${className}Screen extends StatefulWidget {
  final ${className}Bloc bloc;
  const ${className}Screen({super.key, required this.bloc});

  @override
  _${className}ScreenState createState() => _${className}ScreenState(bloc);
}

class _${className}ScreenState extends BaseScene<${className}Bloc, ${className}Screen, dynamic> {
  _${className}ScreenState(super.bloc);

  @override
  Widget buildWidget(BuildContext context, RenderDataState state) {
    return Container();
  }
  
  @override
  void listenToState(BuildContext context, BaseState state) {}
}
  `;
    writeFile(screenFilePath, template);
    console.log(chalk.green(`Screen file ${moduleName}_screen.dart created in ${screenPath}`));
}
function generateImport(moduleName, importPath) {
    const importFilePath = path.join(importPath, `${moduleName}_import.dart`);
    const className = getClassName(moduleName, "import");
    const template = `
import 'package:flutter/material.dart';
import 'package:flutter_bloc/flutter_bloc.dart';
import '../../bloc_core/base/base_import.dart';

part '../bloc/${moduleName}_bloc.dart';
part '../event/${moduleName}_event.dart';
part '../screen/${moduleName}_screen.dart';
part '../state/${moduleName}_state.dart';
part '../factory/${moduleName}_state_factory.dart';
  `;
    writeFile(importFilePath, template);
    console.log(chalk.green(`Import file ${moduleName}_import.dart created in ${importPath}`));
}
function generateStateFactory(moduleName, factoryPath) {
    const factoryFilePath = path.join(factoryPath, `${moduleName}_state_factory.dart`);
    const className = getClassName(moduleName, "state_factory");
    const template = `
part of '../import/${moduleName}_import.dart';

class ${className}StateFactory extends BaseStateFactory {
  @override
  BaseState getState<M>(M data) {
    return throw Exception('No Data in ${className}StateFactory');
  }
}
  `;
    writeFile(factoryFilePath, template);
    console.log(chalk.green(`State Factory file ${moduleName}_state_factory.dart created in ${factoryPath}`));
}

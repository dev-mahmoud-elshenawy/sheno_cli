import fs from "fs";
import path from "path";
import { execInIos } from "../utils/execHelpers.js";
import { LoggerHelpers } from "../utils/loggerHelpers.js";

const currentDir = process.cwd();

export { updateFlutterVersion };

async function updateFlutterVersion(
  version: string,
  build: string,
  iosBuild: string
) {
  try {
    LoggerHelpers.info("Updating version and build number in pubspec.yaml...");
    await updatePubspecVersionAndBuild(version, build);

    LoggerHelpers.info("Updating iOS version and build number...");
    await updateIosVersionAndBuild(version, iosBuild);

    LoggerHelpers.success(
      `Version updated to ${version}, build updated to ${build}, and iOS build updated to ${iosBuild}`
    );
  } catch (error) {
    LoggerHelpers.error(
      `Error while updating Flutter version and build: ${
        error instanceof Error ? error.message : String(error)
      }`
    );
    throw error;
  }
}

async function updatePubspecVersionAndBuild(version: string, build: string) {
  try {
    const pubspecPath = path.join(currentDir, "pubspec.yaml");

    if (!fs.existsSync(pubspecPath)) {
      throw new Error(`pubspec.yaml not found at ${pubspecPath}`);
    }

    const pubspecContent = fs.readFileSync(pubspecPath, "utf8");

    const updatedPubspec = pubspecContent.replace(
      /version: \d+\.\d+\.\d+\+\d+/g,
      `version: ${version}+${build}`
    );

    fs.writeFileSync(pubspecPath, updatedPubspec);
    LoggerHelpers.success(
      `Updated pubspec.yaml with version ${version} and build ${build}`
    );
  } catch (error) {
    LoggerHelpers.error(
      `Error while updating pubspec.yaml version and build: ${
        error instanceof Error ? error.message : String(error)
      }`
    );

    throw error;
  }
}

async function updateIosVersionAndBuild(version: string, iosBuild: string) {
    try {
      const currentDir = process.cwd();
  
      const projectPbxProjPath = path.join(currentDir, "ios/Runner.xcodeproj/project.pbxproj");
  
      if (!fs.existsSync(projectPbxProjPath)) {
        throw new Error(`project.pbxproj not found at ${projectPbxProjPath}`);
      }
  
      let projectContent = fs.readFileSync(projectPbxProjPath, 'utf8');
  
      projectContent = projectContent
        .replace(
          /MARKETING_VERSION\s*=\s*[^;]+;/g,
          `MARKETING_VERSION = ${version};`
        )
        .replace(
          /CURRENT_PROJECT_VERSION\s*=\s*[^;]+;/g,
          `CURRENT_PROJECT_VERSION = ${iosBuild};`
        );
  
      fs.writeFileSync(projectPbxProjPath, projectContent);
  
      LoggerHelpers.success(`Updated MARKETING_VERSION to ${version} and CURRENT_PROJECT_VERSION to ${iosBuild}`);
  
      const infoPlistPath = path.join(currentDir, "ios/Runner/Info.plist");
  
      if (!fs.existsSync(infoPlistPath)) {
        throw new Error(`Info.plist not found at ${infoPlistPath}`);
      }
  
      const infoPlistContent = fs.readFileSync(infoPlistPath, "utf8");
  
      const updatedPlist = infoPlistContent
        .replace(
          /<key>CFBundleShortVersionString<\/key>\s*<string>\$\{MARKETING_VERSION\}<\/string>/,
          `<key>CFBundleShortVersionString</key><string>${version}</string>`
        )
        .replace(
          /<key>CFBundleVersion<\/key>\s*<string>\$\{CURRENT_PROJECT_VERSION\}<\/string>/,
          `<key>CFBundleVersion</key><string>${iosBuild}</string>`
        );
  
      fs.writeFileSync(infoPlistPath, updatedPlist);
      LoggerHelpers.success("Updated Info.plist with the new version and iOS build.");
  
    } catch (error) {
      LoggerHelpers.error(
        `Error while updating iOS version and build: ${
          error instanceof Error ? error.message : String(error)
        }`
      );
      throw error;
    }
  }

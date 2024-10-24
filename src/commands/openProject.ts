import { LoggerHelpers } from "../utils/loggerHelpers.js"; 
import { execCommand } from "../utils/execHelpers.js"; 

export { openIos, openAndroid };

async function openIos() {
  LoggerHelpers.info("Opening the iOS project in Xcode...");

  const command = "open ios/Runner.xcworkspace";

  try {
    await execCommand(command);
    LoggerHelpers.success("Xcode opened successfully.");
  } catch (error) {
    if (error instanceof Error) {
      LoggerHelpers.error(`Error while opening Xcode: ${error.message}`);
    } else {
      LoggerHelpers.error(`Error while opening Xcode: ${error}`);
    }
  }
}

async function openAndroid() {
  LoggerHelpers.info("Opening the Android project in Android Studio...");

  const command = "open android"; 

  try {
    await execCommand(command);
    LoggerHelpers.success("Android Studio opened successfully.");
  } catch (error) {
    if (error instanceof Error) {
      LoggerHelpers.error(
        `Error while opening Android Studio: ${error.message}`
      );
    } else {
      LoggerHelpers.error(`Error while opening Android Studio: ${error}`);
    }
  }
}

import { execCommand } from "../utils/execHelpers.js";
import { LoggerHelpers } from "../utils/loggerHelpers.js";

export { incrementIosBuildVersion };

async function incrementIosBuildVersion() {
  LoggerHelpers.info("Incrementing iOS build version...");

  try {
    await execCommand("xcrun agvtool next-version -all");
    LoggerHelpers.success("iOS build version incremented successfully.");
  } catch (error) {
    if (error instanceof Error) {
      LoggerHelpers.error(`Error incrementing iOS build version: ${error.message}`);
    } else {
      LoggerHelpers.error(`Error incrementing iOS build version: ${error}`);
    }
  }
}
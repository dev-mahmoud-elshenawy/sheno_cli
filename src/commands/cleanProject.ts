import { execCommand } from "../utils/execHelpers.js";
import { LoggerHelpers } from "../utils/loggerHelpers.js";

export async function cleanProject(noFvm: boolean) {
  LoggerHelpers.info(
    noFvm ? "Running clean without FVM..." : "Running clean with FVM..."
  );

  const command = noFvm
    ? "flutter clean && rm -rf pubspec.lock && flutter pub get"
    : "fvm flutter clean && rm -rf pubspec.lock && fvm flutter pub get";

  try {
    const result = await execCommand(command);
    LoggerHelpers.success("Clean successful.");
  } catch (error) {
    if (error instanceof Error) {
      LoggerHelpers.error(`Error during clean: ${error.message}`);
    } else {
      LoggerHelpers.error(`Error during clean: ${error}`);
    }
  }
}

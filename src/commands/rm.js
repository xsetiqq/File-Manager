import path from "path";
import fs from "fs/promises";

export async function rm(args, currentDir) {
  try {
    const filename = args[0];

    if (!filename) {
      console.log("Invalid input");
      return;
    }

    const filePath = path.resolve(currentDir, filename);
    await fs.unlink(filePath);
    console.log(`File ${filename} deleted successfully`);
  } catch (err) {
    console.log("Operation failed");
  }
}

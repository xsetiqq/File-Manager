import path from "path";
import fs from "fs/promises";

export async function mkdir(args, currentDir) {
  const filename = args[0];
  if (!filename) {
    console.log("Invalid input");
    return;
  }

  const filePath = path.resolve(currentDir, filename);

  try {
    await fs.mkdir(filePath);
    console.log(`Folder ${filename} created successfully`);
  } catch {
    console.log("Operation failed");
  }
}

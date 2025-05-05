import path from "path";
import fs from "fs/promises";

export async function cd(args, currentDir) {
  if (!args[0]) {
    console.log("Invalid input");
    return currentDir;
  }
  const nextDir = path.resolve(currentDir, args[0]);

  try {
    const stat = await fs.stat(nextDir);
    if (stat.isDirectory()) {
      return nextDir;
    } else {
      console.log("Invalid directory");
      return currentDir;
    }
  } catch {
    console.log("Invalid directory");
    return currentDir;
  }
}

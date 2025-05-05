import path from "path";
import fs from "fs/promises";

export async function cat(args, currentDir) {
  const filename = args[0];
  if (!filename) {
    console.log("Invalid input");
    return;
  }

  const filePath = path.join(currentDir, filename);

  try {
    await fs.access(filePath, constants.F_OK);
    throw new Error("FS operation failed");
  } catch (err) {
    if (err.code !== "ENOENT") {
      const a = await fs.readFile(filePath, "utf-8");
      console.log(a);
    } else {
      throw new Error("FS operation failed");
    }
  }
}

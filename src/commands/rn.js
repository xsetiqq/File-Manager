import path from "path";
import fs from "fs/promises";

export async function rn(args, currentDir) {
  const filename = args[0];
  const newFilename = args[1];
  if (!filename || !newFilename) {
    console.log("Invalid input");
    return;
  }
  const filePath = path.join(currentDir, filename);
  const filePathMd = path.join(currentDir, newFilename);

  try {
    await fs.rename(filePath, filePathMd);
    console.log(
      "Operation completed successfully!",
      `\nnow ${filename} is ${newFilename}`
    );
  } catch (err) {
    console.log("Operation failed");
  }
}

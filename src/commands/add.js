import path from "path";
import fs from "fs/promises";

export async function add(args, currentDir) {
  const filename = args[0];
  if (!filename) {
    console.log("Invalid input");
    return;
  }

  const filePath = path.join(currentDir, filename);

  try {
    await fs.writeFile(filePath, "", { flag: "wx" });
    console.log(`File ${filename} created successfully`);
  } catch {
    console.log("Operation failed");
  }
}

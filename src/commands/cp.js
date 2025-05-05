import path from "path";
import fs from "fs/promises";

import { createReadStream, createWriteStream } from "fs";

export async function cp(args, currentDir) {
  try {
    const fileToCopy = path.resolve(currentDir, args[0]);
    const destinationDir = path.resolve(currentDir, args[1]);
    const destStat = await fs.stat(destinationDir);
    if (!destStat.isDirectory()) {
      console.log("Operation failed");
      return;
    }

    const stat = await fs.stat(fileToCopy);
    if (!stat.isFile()) {
      console.log("Operation failed");
      return;
    }

    const fileName = path.basename(fileToCopy);
    const fileAfterCopy = path.join(destinationDir, fileName);

    const readStream = createReadStream(fileToCopy);
    const writeStream = createWriteStream(fileAfterCopy);
    readStream.on("error", () => console.log("Operation failed"));
    writeStream.on("error", () => console.log("Operation failed"));

    readStream.pipe(writeStream);
    writeStream.on("finish", () => {
      console.log(`File ${fileName} copied successfully`);
    });
  } catch {
    console.log("Operation failed");
  }
}

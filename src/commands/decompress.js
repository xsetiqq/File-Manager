import fs from "fs";
import path from "path";
import { createBrotliDecompress } from "zlib";

export const decompress = async (args, currentDir) => {
  if (!args[0] || !args[1]) {
    console.log("Invalid input");
    return;
  }

  const pathToFile = path.resolve(currentDir, args[0]);
  const pathDestinationFile = path.resolve(currentDir, args[1]);

  try {
    const readStream = fs.createReadStream(pathToFile);
    const writeStream = fs.createWriteStream(pathDestinationFile);
    const brotli = createBrotliDecompress();

    readStream
      .on("error", () => console.log("Operation failed"))
      .pipe(brotli)
      .pipe(writeStream)
      .on("error", () => console.log("Operation failed"))
      .on("finish", () => {
        console.log(`File ${args[0]} has been decompressed to ${args[1]}`);
      });
  } catch {
    console.log("Operation failed");
  }
};

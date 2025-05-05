import fs from "fs";
import path from "path";
import { createBrotliCompress, createBrotliDecompress } from "zlib";

export const compress = async (args, currentDir) => {
  if (!args[0] || !args[1]) {
    console.log("Invalid input");
    return;
  }

  const pathToFile = path.resolve(currentDir, args[0]);
  const pathDestinationFile = path.resolve(currentDir, args[1]);

  try {
    const readStream = fs.createReadStream(pathToFile);
    const writeStream = fs.createWriteStream(pathDestinationFile);
    const brotli = createBrotliCompress();

    readStream
      .on("error", () => console.log("Operation failed"))
      .pipe(brotli)
      .pipe(writeStream)
      .on("error", () => console.log("Operation failed"))
      .on("finish", () => {
        console.log(`File ${args[0]} has been compressed to ${args[1]}`);
      });
  } catch {
    console.log("Operation failed");
  }
};

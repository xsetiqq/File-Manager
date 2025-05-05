import fs from "fs";
import path from "path";
import crypto from "crypto";

export async function hash(args, currentDir) {
  try {
    const filename = args[0];
    if (!filename) {
      console.log("Invalid input");
      return;
    }

    const filePath = path.resolve(currentDir, filename);
    const hash = crypto.createHash("sha256");
    const readStream = fs.createReadStream(filePath);
    readStream
      .on("error", () => {
        console.log("Operation failed");
      })
      .pipe(hash)
      .setEncoding("hex")
      .on("data", (data) => {
        console.log(data);
      });
  } catch {
    console.log("Operation failed");
  }
}

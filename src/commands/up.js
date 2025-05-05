import path from "path";
import fs from "fs/promises";

export async function up(currentDir) {
  const parentDir = path.dirname(currentDir);
  if (parentDir !== currentDir) {
    return parentDir;
  } else {
    return currentDir;
  }
}

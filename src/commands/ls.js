import fs from "fs/promises";

export async function ls(currentDir) {
  try {
    const dirents = await fs.readdir(currentDir, { withFileTypes: true });

    const folders = [];
    const files = [];

    for (const dirent of dirents) {
      if (dirent.isDirectory()) {
        folders.push({ Name: dirent.name, Type: "directory" });
      } else {
        files.push({ Name: dirent.name, Type: "file" });
      }
    }

    folders.sort((a, b) => a.Name.localeCompare(b.Name));
    files.sort((a, b) => a.Name.localeCompare(b.Name));

    const result = [...folders, ...files];
    console.table(result);
  } catch {
    console.log("Operation failed");
  }
}

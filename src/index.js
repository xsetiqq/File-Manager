import path from "path";
import readline from "readline";

import { printCurrentDir } from "./utils/printCurrentDir.js";
import { handleExit } from "./utils/handleExit.js";
import { cd } from "./commands/cd.js";
import { up } from "./commands/up.js";
import { ls } from "./commands/ls.js";
import { add } from "./commands/add.js";
import { cat } from "./commands/cat.js";
import { rn } from "./commands/rn.js";
import { cp } from "./commands/cp.js";
import { mv } from "./commands/mv.js";
import { rm } from "./commands/rm.js";
import { help } from "./commands/help.js";
import { mkdir } from "./commands/mkdir.js";
import { handleOS } from "./commands/handleOS.js";
import { hash } from "./commands/hash.js";
import { compress } from "./commands/compress.js";
import { decompress } from "./commands/decompress.js";

const args = process.argv.slice(2);

const usernameArg = args.find((arg) => arg.startsWith("--username="));
const username = usernameArg ? usernameArg.split("=")[1] : "User";

let currentDir = path.parse(process.cwd()).root;

console.log(`Welcome to the File Manager, ${username}!`);
console.log(`You can use help command to see all available commands`);
printCurrentDir(currentDir);

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
  prompt: "Write here => ",
});
rl.prompt();
rl.on("line", async (input) => {
  const [command, ...args] = input.trim().split(" ");
  switch (command) {
    case "up":
      currentDir = await up(currentDir);
      printCurrentDir(currentDir);
      rl.prompt();
      break;

    case "cd":
      currentDir = await cd(args, currentDir);
      printCurrentDir(currentDir);
      rl.prompt();
      break;

    case "ls":
      await ls(currentDir);
      printCurrentDir(currentDir);
      rl.prompt();
      break;

    case "add":
      await add(args, currentDir);
      printCurrentDir(currentDir);
      rl.prompt();
      break;

    case "cat":
      await cat(args, currentDir);
      printCurrentDir(currentDir);
      rl.prompt();
      break;

    case "rn":
      await rn(args, currentDir);
      printCurrentDir(currentDir);
      rl.prompt();
      break;

    case "cp":
      await cp((args, currentDir));
      printCurrentDir(currentDir);
      rl.prompt();
      break;

    case "mv":
      await mv(args, currentDir);
      printCurrentDir(currentDir);
      rl.prompt();
      break;

    case "rm":
      await rm(args, currentDir);
      printCurrentDir(currentDir);
      rl.prompt();
      break;

    case "hash":
      await hash(args, currentDir);
      printCurrentDir(currentDir);
      rl.prompt();
      break;

    case "mkdir":
      await mkdir(args, currentDir);
      printCurrentDir(currentDir);
      rl.prompt();
      break;

    case "os":
      await handleOS(args);
      printCurrentDir(currentDir);
      rl.prompt();
      break;
    case "compress":
      await compress(args, currentDir);
      printCurrentDir(currentDir);
      rl.prompt();
      break;

    case "decompress":
      await decompress(args, currentDir);
      printCurrentDir(currentDir);
      rl.prompt();
      break;

    case ".exit":
      handleExit(username, rl);
      rl.prompt();
      return;

    case "help":
      help();
      printCurrentDir(currentDir);
      rl.prompt();
      break;

    default:
      console.log("Invalid input");
      printCurrentDir(currentDir);
      rl.prompt();
      break;
  }
});

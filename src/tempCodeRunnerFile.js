import os from "os";
import path from "path";
import readline from "readline";
import { homedir } from "os";
import { printCurrentDir } from "./utils/printCurrentDir.js";
import { handleExit } from "./utils/handleExit.js";

const args = process.argv.slice(2);

const usernameArg = args.find((arg) => arg.startsWith("--username="));
const username = usernameArg ? usernameArg.split("=")[1] : "User";

let currentDir = homedir();

console.log(`Welcome to the File Manager, ${username}!`);
printCurrentDir(currentDir);

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
  prompt: "Сюда пиши => ",
});

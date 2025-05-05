export const handleExit = (username, rl) => {
  console.log(`\nThank you for using File Manager, ${username}, goodbye!`);
  rl.close();
  process.exit(0);
};

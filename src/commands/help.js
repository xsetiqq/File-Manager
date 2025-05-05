export const help = () => {
  console.log(`
Available commands:
  up                         - Go up one directory
  cd <path>                  - Change directory
  ls                         - List contents of current directory
  cat <file>                 - Read file content
  add <file>                 - Create empty file
  mkdir <new_directory_name> - Create new directory 
  rn <path_to_file> <new_filename>             - Rename file
  cp <path_to_file> <path_to_new_directory>    - Copy file
  mv <path_to_file> <path_to_new_directory>    - Move file
  rm <path_to_file>        - Remove file
  os --<option>            - Get OS information
  hash <file>              - Get file hash
  compress <src> <dest>    - Compress file
  decompress <src> <dest>  - Decompress file
  .exit                    - Exit the file manager
  help                     - Show this help message
  `);
};

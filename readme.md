# File Manager (CLI App)

A command-line file manager built using Node.js 22+, featuring file system navigation, manipulation, OS info, hashing, and compression — all without external dependencies.

## Features

- Navigation (`cd`, `up`, `ls`)
- File operations (`cat`, `add`, `rn`, `cp`, `mv`, `rm`)
- Directory creation (`mkdir`)
- System info (`os --EOL`, `--cpus`, `--username`, etc.)
- Hash calculation (`hash <path>`)
- File compression & decompression using Brotli (`compress`, `decompress`)
- Help command
- Fully interactive with current working directory shown after each operation
- Exits on `.exit` or Ctrl+C, with a goodbye message

---

## 🚀 Getting Started

### Requirements

- **Node.js v22.14.0** or higher
- No external packages required

### Installation

1. Clone the repo or download source code
2. Run:

```bash
git clone https://github.com/xsetiqq/File-Manager.git
cd file-manager
npm run start
```

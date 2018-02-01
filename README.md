## Problem Statement
See details in this issue https://github.com/GoogleChrome/workbox/issues/1267

## Reproducing Instruction

- Clone the git repo
- `npm install`
- `npm run watch`, this launches the Webapck watch mode, where it re-compiles whenever source is changed
- Try modifying the code in `index.js` and save
- The watch script will recompile.
- Do above multiple times.
- Take a look at `dist/sw.js`, it will have multiple precache-manifest entries



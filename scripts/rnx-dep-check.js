#!/usr/bin/env node

"use strict";

module.exports = {
  "@types/jest": {
    name: "@types/jest",
    version: "^27.0.0",
    devOnly: true,
  },
  "@types/node": {
    name: "@types/node",
    version: "^16.0.0",
    devOnly: true,
  },
  "@types/react-native": {
    name: "@types/react-native",
    version: "^0.68.0",
    devOnly: true,
  },
  "@types/yargs": {
    name: "@types/yargs",
    version: "^16.0.0",
    devOnly: true,
  },
  chalk: {
    name: "chalk",
    version: "^4.1.0",
  },
  esbuild: {
    name: "esbuild",
    version: "^0.15.0",
  },
  "find-up": {
    name: "find-up",
    version: "^5.0.0",
  },
  jest: {
    name: "jest",
    version: "^27.0.0",
  },
  "jest-diff": {
    name: "jest-diff",
    version: "^26.0.0",
  },
  "jest-extended": {
    name: "jest-extended",
    version: "^2.0.0",
    devOnly: true,
  },
  "pkg-dir": {
    name: "pkg-dir",
    version: "^5.0.0",
  },
  semver: {
    name: "semver",
    version: "^7.0.0",
  },
  typescript: {
    name: "typescript",
    version: "^4.0.0",
  },
  yargs: {
    name: "yargs",
    version: "^16.0.0",
  },
};

if (require.main === module) {
  require("@rnx-kit/dep-check").cli({
    "custom-profiles": __filename,
    "exclude-packages": "@rnx-kit/expo-app",
    vigilant: "0.68",
    write: process.argv.includes("--write"),
  });
}

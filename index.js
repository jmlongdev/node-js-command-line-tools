#!/usr/bin/env node

const fs = require("fs");

fs.readdir(process.cwd(), (err, filenames) => {
  if (err) {
    // throw new Error(err);
    console.log(err);
  }

  // BAD CODE EXAMPLE
  for (let filename of filenames) {
    const allStats = [];
    fs.lstat(filename, (err, stats) => {
      if (err) {
        console.log(err);
      }
      console.log(filename, stats.isFile());
    });
  }
});

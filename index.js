const fs = require("fs");

fs.readdir(".", (err, filenames) => {
  // EITHER
  // err === an error object, which means something went wrong
  // OR
  // err === null, which means everything is ok

  if (err) {
    // error handling code here
    // throw new Error(err);
    console.log(err);
  }

  console.log(filenames);
});

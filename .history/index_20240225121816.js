/* 
1. Use the inquirer npm package to get user input.
2. Use the qr-image npm package to turn the user entered URL into a QR code image.
3. Create a txt file to save the user input using the native fs node module.

import qr from "qr-image";
import fs from "fs";
*/
import inquirer from "inquirer";

inquirer
  .prompt([
    {
      message: "Enter your website url:",
      name: " URL",
    },
  ])
  .then((answers) => {
    console.log(message);
  })
  .catch((error) => {
    if (error.isTtyError) {
      // Prompt couldn't be rendered in the current environment
    } else {
      // Something else went wrong
    }
  });

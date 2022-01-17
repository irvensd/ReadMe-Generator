// // TODO: Include packages needed for this application

// // TODO: Create an array of questions for user input
// const questions = [];

// // TODO: Create a function to write README file
// function writeToFile(fileName, data) {}

// // TODO: Create a function to initialize app
// function init() {}

// // Function call to initialize app
// init();

const inquirer = require("inquirer");
const fs = require("fs");

const questionInput = () => {
  return inquirer.prompt([
    {
      type: "input",
      name: "name",
      message: "What is your project title? (Required)",
      validate: (titleInput) => {
        if (titleInput) {
          return true;
        } else {
          console.log("Please enter project name");
          return false;
        }
      },
    },
    {
      type: "input",
      name: "description",
      message: "Desxcription of your project:",
    },
  ]);
};

questionInput().then((answers) => console.log(answers));

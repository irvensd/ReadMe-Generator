// TODO: Include packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');
const path = require('path');
const generatePage = require('./utils/generateMarkdown');


// TODO: Create an array of questions for user input
const questions = [
  {
    type: 'input',
    name: 'github',
    message: 'Enter your GitHub Username (Required)',
    validate: githubInput => {
      if (githubInput) {
        return true;
      } else {
        console.log('Please enter your GitHub username!');
        return false;
      }
    }
  },
  {
    type: "input",
    name: "email",
    message: "What is your email address?",
  },
  {
    type: 'input',
    name: 'title',
    message: 'What is your project title? (Required)',
    validate: projectInput => {
      if (projectInput) {
        return true;
      } else {
        console.log('You need to enter a project name!');
        return false;
      }
    }
  },
  {
    type: 'input',
    name: 'description',
    message: 'Provide a description of your project (Required)',
    validate: descriptionInput => {
      if (descriptionInput) {
        return true;
      } else {
        console.log('You need to enter a project description!');
        return false;
      }
    }
  },
  {
    type: "input",
    name: "installation",
    message: "Installation instructions for your project: ",
  },
  {
    type: "input",
    name: "usage",
    message: "What is the usage of this repo? ",
  },
  {
    type: "input",
    name: "contributors",
    message: "Contribution Who are the contributors for this project: ",
  },
  {
    type: "input",
    name: "test",
    message: "Test instructions for your project: ",
    default: "npm test"
  },
  {
    type: "list",
    name: "license",
    message: "What license does your project have?",
    choices: ["MIT", "APACHE2.0", "Boost1.0", "GPL3.0", "BSD2" ,"BSD3", "None"]
},
{
  type: "input",
  name: "dependencies",
  message: "Any dependencies to install?",
  default: "npm i"
}
];

// TODO: Create a function to write README file
function writeReadMe(fileName, data) {
  return fs.writeFileSync(fileName, data)
}

// TODO: Create a function to initialize app
function userInput() {
  inquirer.prompt(questions)
    .then((answers) => {
      console.log("Page updating");
      writeReadMe("./dist/README.md", generatePage())
    })
}

// TODO: Function call to initialize app
userInput();




   



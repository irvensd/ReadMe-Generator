// // TODO: Include packages needed for this application

// // TODO: Create an array of questions for user input
// const questions = [];

// // TODO: Create a function to write README file
// function writeToFile(fileName, data) {}

// // TODO: Create a function to initialize app
// function init() {}

// // Function call to initialize app
// init();

// const fs = require('fs');
// const generateOutput = require('./src/page-template.js')

// const pageHTML = generateOutput(name, github)

// fs.writeFile('index.html', generateOutput(name, github), err => {
//   if (err) throw err;

//   console.log('Portfolio complete! Check out index.html to see the output!');
// });

const fs = require('fs');
const inquirer = require('inquirer');
const generatePage = require('./src/page-template');

const promptUser = () => {

    if (!portfolioData.projects) {
    portfolioData.projects = [];
  }
  return inquirer.prompt([
    {
      type: 'input',
      name: 'name',
      message: 'What is your name? (Required)',
      validate: nameInput => {
        if (nameInput) {
          return true;
        } else {
          console.log('Please enter your name!');
          return false;
        }
      }
    },
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
      name: 'project',
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
      message: 'Provide a description of the project (Required)',
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
      message: "Usage information your project: ",
    },
    {
      type: "input",
      name: "guidelines",
      message: "Contribution Guidelines for your project: ",
    },
    {
      type: "input",
      name: "test",
      message: "Test instructions for your project: ",
    },
   
  ]);
};

promptUser()
  .then(results => {
    console.log(results);
    // will be uncommented in lesson 4
    const pageHTML = generatePage();
    fs.writeFile('./index.html', pageHTML, err => {
      if (err) throw new Error(err);
      console.log('Page created! Check out index.html in this directory to see it!');
    });
  });


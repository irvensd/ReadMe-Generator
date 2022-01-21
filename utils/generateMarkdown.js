// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `

  ## Project Title
  ${data.title}
  ${renderLicenseBadge(data.license)}

  ## Github URL 
  https://github.com/${data.github}
  
  ## Description 
  ${data.description}

  ## Table of Content 
  * [Installation](#installation)
  * [Usage](#usage)
  * [License](#license)
  * [Questions](#questions)

  ## Installation
  ${data.installation}

  # Usage
  ${data.usage}

  ## License
  ${data.license}

  ## Contributing 
  ${data.contributing}

  ## Tests
  ${data.test}

  ## Questions
  Email: ${data.questions}\n
  Github: https://github.com/${data.github}

`;
}

// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string

function renderLicenseBadge(license) {
  if (license !== "None") {
    return `![GitHub license](https://img.shields.io/badge/license-${license}-brightgreen)`;
  }
  return "";
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license !== "None") {
    return `\n* [License](#license)\n`;
  }
  return "";
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license !== "None") {
    return `## License 📛
      Copyright © ${license}. All rights reserved. 
      
      Licensed under the ${license} license.`;
  }
  return "";
}

module.exports = generateMarkdown;

// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {

}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {

}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {

}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `
# ${data.projectName}

## Description

${data.description}

## License badge

## Table of Contents 

- [License](#license)
- [Installation](#Installation)
- [License](#license)
- [Usage](#Usage)

## License 
${data.license}

## Installation

${data.installCommand}

## Usage

${data.usage}

Provide instructions and examples for use. Include screenshots as needed.

## Credits

This project was developed by ${data.username} for challenge #9. 
---

## Badges

![badmath](https://img.shields.io/github/languages/top/lernantino/badmath)

Badges aren't necessary, per se, but they demonstrate street cred. Badges let other developers know that you know what you're doing. Check out the badges hosted by [shields.io](https://shields.io/). You may not understand what they all represent now, but you will in time.

## How to Contribute

If you would like to contribute, you can include submit your request directly to the created. Please contact ${data.username} via email here: ${data.email}.

## Tests

To test the application, simply enter the command ${data.testCommand} in the terminal.

`;
}

module.exports = generateMarkdown;

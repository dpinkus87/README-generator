// TODO: 
function renderLicenseBadge(selectedLicense) {
  if(selectedLicense === 'MIT') {
    return `![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)`;
    } else if (selectedLicense === 'Apache License 2.0') {
    return `![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)`;
    } else if (selectedLicense === 'GNU GPLv3') { 
    return `![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)`;
    } else if (selectedLicense === 'ISC License') {
    return `![License: ISC](https://img.shields.io/badge/License-ISC-blue.svg)`;
    } else if (selectedLicense === 'Mozilla Public License 2.0') {
    return `![License: MPL 2.0](https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg)`
      } else {
        return ""
      }
          }

function renderLicenseLink(license) {
  if(license !== 'No license') {
    return '- [license](#license)'
  } else  return''
}


function renderLicenseSection(license) {
  if(license !== 'No license') {
    return `## License`
  } else {
    return ''
  }
}


// TODO: Create a function to generate markdown for README
          function generateMarkdown(data) {
            console.log(data);
            return `
# ${data.projectName}

## Description

${data.description}

${renderLicenseBadge(data.license)}

## Table of Contents 

${renderLicenseLink(data.license)}
- [Installation](#installation)
- [Usage](#usage)
- [Credits](#credits)
- [How to contribute](#how to contribute)
- [Tests](#tests)

${renderLicenseSection(data.license)}

## Installation

${data.installCommand}

## Usage

${data.usingRepo}

Provide instructions and examples for use. Include screenshots as needed.

## Credits

This project was developed by ${data.username} for challenge #9. 

---


## How to Contribute

If you would like to contribute, you can include submit your request directly to the created. Please contact ${data.username} via email here: ${data.email}.

## Tests

To test the application, simply enter the command ${data.testCommand} in the terminal.

`;
 }

module.exports = generateMarkdown;



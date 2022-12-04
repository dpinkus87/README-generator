// COMPLETED: Include packages needed for this application
const inquirer = require("inquirer")
const fs = require("fs")
const generateMarkdown = require("./utils/generateMarkdown");
const { default: Choices } = require("inquirer/lib/objects/choices");

// COMPLETED: Create an array of questions for user input
const questions = [{
    type: "input",
    message: "What is your GitHub username?",
    name: "username",
},{
    type: "input",
    message: "What is your email address?",
    name: "email",
},{
    type: "input",
    message: "What is your project's name?",
    name: "projectName",
}, {
    type: "input",
    message: "Please write a short description of your project",
    name: "description",
},{
    type: "list",
    message: "What kind of license should your project have?",
    name: "license",
    choices: ["Apache License 2.0", "GNU GPLv3", "ISC License", "MIT", "Mozilla Public License 2.0",]
},{
    type: "input",
    message: "What command should be run to install dependencies?",
    name: "installCommand",
},{
    type: "input",
    message: "What command should be run to run tests?",
    name: "testCommand",
},{
    type: "input",
    message: "What does the user need to know about using the repo?",
    name: "usingRepo"
},{
    type: "input",
    message: "What does the user need to know about contributing to the repo??",
    name: "contributeRepo",
}
];

// COMPLETED: Create a function to write README file
function writeToFile(fileName, data) {
    console.log(data);
    fs.writeFile("./dist/README.md", generateMarkdown(data),err => console.log(err))
}

// COMPLETED: Create a function to initialize app
function init() {
    inquirer.prompt(questions).then(answers => {
        console.log(answers);
 writeToFile("README.md", answers)
    })
}


// Function call to initialize app
init();

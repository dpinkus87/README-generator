// TODO: Include packages needed for this application
const inquirer = require("inquirer")
const fs = require("fs")
const generateMarkdown = require("./utils/generateMarkdown")

// TODO: Create an array of questions for user input
const questions = [{
    type: "input",
    message: "Enter your name",
    name: "name"
},{
    type: "input",
    message: "Enter your age",
    name: "age"
},{
    type: "list",
    message: "Choose your favorite food",
    name: "food",
    choices: ["pizza", "ice cream", "cheesy bread"] 
}];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    console.log(data);
    fs.writeFile("./dist/README.md", generateMarkdown(data),err => console.log(err))
}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions).then(answers => {
        console.log(answers);
 writeToFile("Dylan.md", answers)
    })
}


// Function call to initialize app
init();

const inquirer = require("inquirer");
const fs = require("fs");


const questions = [
    {
        type: "input",
        name: "title",
        message: "What is the name of your project?",
    },
    {
        type: "input",
        name: "description",
        message: "Please describe your project."
    },
    {
        type: "input",
        name: "installation",
        message: "How is your application installed?",
    },
    {
        type: "input",
        name: "usage",
        message: "What is usage for this project?",
    },
    {
        type: "input",
        name: "usage",
        message: "How to use the app.",
    },
    {
        type: "input",
        name: "license",
        message: "What type of license are you using?",
    },
    {
        type: "input",
        name: "contribute",
        message: "Contribution guidelines.",
    },
    {
        type: "input",
        name: "tests",
        message: "Enter test information.",
    },
    {
        type: "input",
        name: "github",
        message: "What is your github?",
    },
    {
        type: "input",
        name: "email",
        message: "Please enter your email.",

    }
];

function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) =>
    err ? console.error(err) : console.log('success!'))
};

function init() {
    inquirer.prompt(questions)
    .then((response) => writeToFile("README.md", generateMarkdown(response)));
}

init();


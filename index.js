// TODO: Include packages needed for this application
const inquirer = require('inquirer');
// TODO: Create an array of questions for user input
const questions = [
    inquirer
    .prompt([
        // Title
        {
            type: 'input',
            name: 'title',
            message: 'Please enter in the project title.',
        },
        // Project Description
        {
            type: 'input',
            name: 'description',
            message: 'Please provide a general description of your project.',
        },
        // Project Installation
        {
            type: 'input',
            name: 'installation',
            message: 'Please provide the steps required to install your project?',
        },
        
    ]).catch((error) => {
        if (error.isTtyError) {
          // Prompt couldn't be rendered in the current environment
        } else {
          // Something else went wrong
        }
      })
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();



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
            // Project Usage
            {
                type: 'input',
                name: 'usage',
                message: 'Please provide instructions and examples of use.',
            },
            // Project Licenses
            {
                type: 'list',
                name: 'licenses',
                message: 'Please select the licenses for your project',
                choices: [
                    'GNU',
                    'Mozilla',
                    'Apache',
                    'MIT',
                ],
            },
            // Project Contributors
            {
                type: 'input',
                name: 'contributors',
                message: 'Please provide the contribtors or how to contribute to your project.',
            },
            // Project Tests
            {
                type: 'input',
                name: 'tests',
                message: 'Please provide for tests for your application and example on how to run them.',
            },
            // Questions section
            // Github Username
            {
                type: 'input',
                name: 'username',
                message: 'Please provide your GitHub username.',
            },
            // Email
            {
                type: 'input',
                name: 'email',
                message: 'Please provide your email address.',
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
function writeToFile(fileName, data) { }

// TODO: Create a function to initialize app
function init() { }

// Function call to initialize app
init();



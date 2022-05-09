const inquirer = require('inquirer');
const fs = require('fs')
const generateMarkdown = require('./utils/generateMarkdown.js')

// TODO: Create an array of questions for user input
const questions = [
    "What is your project's name? (Required)",
    "Describe your project (Required)",
    "What are the steps to install your project? (Leave blank if there are none)",
    "Provide instructions for using your project",
    "Provide your contribution guidelines",
    "Provide instructions to test your project"

];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fileContent = generateMarkdown(data)
    fs.writeFile(`./dist/${fileName}.md`, fileContent, err => {
        if (err) throw err;

        console.log("README complete!")
    })
}

const promptUser = () => {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'title',
            message: questions[0],
            validate: nameInput => {
                if (nameInput) {
                    return true;
                } else {
                    console.log("Please enter your name!")
                    return false;
                }
            }
        },
        {
            type: 'input', 
            name: 'description',
            message: questions[1],
            validate: descInput => {
                if (descInput) {
                    return true;
                } else {
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'installation',
            message: questions[2],
            default: 'No Installation Required'
        },
        {
            type: 'input',
            name: 'usage',
            message: questions[3]
        },
        {
            type: 'list',
            name: 'license',
            message: 'Select which license you would like to use on your project',
            choices: ['GNU AGPLv3', 'GNU GPLv3', 'GNU LGPLv3', 'Mozilla Public License 2.0', 'Apache License 2.0', 'MIT License', 'Boost Software License 1.0', 'The Unlicense']
        },
        {
            type: 'input',
            name: 'credits',
            message: questions[4]
        },
        {
            type: 'input',
            name: 'tests',
            message: questions[5]   
        },
        {
            type: 'input',
            name: 'github',
            message: 'What is your GitHub username?'
        },
        {
            type: 'input',
            name: 'email',
            message: 'Enter your email address'
        },
        {
            type: 'input',
            name: 'contact',
            message: 'Enter any extra information on how to contact you for any questions about your project (Optional)',
            default: ''
        }

    ])
}

// TODO: Create a function to initialize app
function init() {
    promptUser()
        .then(userResponse => writeToFile('README', userResponse))
}

// Function call to initialize app
init();

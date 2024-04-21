// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const generateMD = require('./utils/generateMarkdown');
const fs = require('fs');
// TODO: Create an array of questions for user input
const questions = [
    {   
        type: 'input',
        name: 'motivation',
        message: 'What was your motivation?'
    },

    {
        type: 'input',
        name: 'reason',
        message: 'Why did you build this project?'
    },

    {
        type: 'input',
        name: 'email',
        message: 'My Email address is:'
    },

    {
        type: 'input',
        name: 'github',
        message: 'My GitHub is https://'
    }
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {

        fs.writeFile(fileName, data, (err) =>
            err ? console.error(err) : console.log('Successful README file created!')
        )
}

// TODO: Create a function to initialize app
function init() { 
    inquirer.prompt([
        {
            type: 'input',
            name: 'title',
            message: 'Give your project a title:'
        },

        {   
            type: 'input',
            name: 'description',
            message: 'Provide a short description of your project:'
        },

        {
            type: 'input',
            name: 'install',
            message: 'Provide detailed installation instructions describing how to run the application:'
        },
        
        {
            type: 'input',
            name: 'usage',
            message: 'Provide instructions and example images for use:'
        },

        {
            type: 'input',
            name: 'credits',
            message: 'List any collaborators or resources used and their links:'
        },
        // license and badges go between here
        {
            type: 'input',
            name: 'tests',
            message: 'Test examples for this application are:'
        },
        // spread contents of array out into individual objects
        ...questions

    ])
    // takes data from prompt and writes a readme with the template and data from user input
    .then((data) => {
        writeToFile('README.md', generateMD(data));
    })
}

// Function call to initialize app
init();

// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const generateMD = require('generateMarkdown');
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
        message: 'What is your email address?'
    },

    {
        type: 'input',
        name: 'github',
        message: 'What is your GitHub link?'
    }
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    // const fileName = 'README.md';
    // const data = generateMD;
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
            message: 'Title:'
        },

        {   
            type: 'input',
            name: 'description',
            message: 'Description:'
        },

        {   
            type: 'input',
            name: 'questions',
            message: questions
        },

        {
            type: 'input',
            name: 'install',
            message: 'Installation details:'
        },
        
        {
            type: 'input',
            name: 'credits',
            message: ''
        },
        
        {
            type: 'input',
            name: 'tests',
            message: 'Test examples for this application are:'
        },

    ])
    .then((data) => {
        writeToFile('README.md', generateMD(data));
    })
}

// Function call to initialize app
init();

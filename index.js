const inquirer = require('inquirer')
const fs = require('fs')
const generatemarkdown = require('./utils/markdownTemplate.js')


inquirer.prompt([
    {
        type: 'input',
        message: 'Project Title: ',
        name: 'projectTitle',
    },
    {
        type: 'input',
        message: 'Brief description of the project: ',
        name: 'briefDescription',
    },
    {
        type: 'list',
        message: 'License:',
        name: 'license',
        choices: ['MIT', 'CCO 1.0', 'n/a']
    },
    {
        type: 'input',
        message: 'Installation Instruction 1 of 3:',
        name: 'installationInstruction1',
    },
    {
        type: 'input',
        message: 'Installation Instruction 2 of 3:',
        name: 'installationInstruction2',
    },
    {
        type: 'input',
        message: 'Installation Instruction 3 of 3:',
        name: 'installationInstruction3',
    },
    {
        type: 'input',
        message: 'User Instruction 1 of 3:',
        name: 'userInstruction1',
    },
    {
        type: 'input',
        message: 'User Instruction 2 of 3:',
        name: 'userInstruction2',
    },
    {
        type: 'input',
        message: 'User Instruction 3 of 3:',
        name: 'userInstruction3',
    },
    {
        type: 'input',
        message: 'How to Contribute:',
        name: 'contributionGuidelines',
    },
    {
        type: 'input',
        message: 'Testing Instructions:',
        name: 'testInstructions',
    },
    {
        type: 'input',
        message: 'Deployed URL:',
        name: 'deployedURL',
    },
    {
        type: 'input',
        message: 'Your name: ',
        name: 'userName',
    },
    {
        type: 'input',
        message: 'Your email: ',
        name: 'userEmail',
    },
    {
        type: 'input',
        message: 'GitHub username: ',
        name: 'gitHubUsername',
    },
    {
        type: 'input',
        message: 'Linkedin username: ',
        name: 'linkedinUsername',
    }
])
    .then(function (response) {
                
        const markdownTemplate = generatemarkdown(response)

        fs.writeFile('README.md', markdownTemplate, function (error) {
            if (error) {
                console.log(error)
            } else {
                console.log('Success!')
            }
        })
    }).catch(function (error) {
        console.log(error)
});
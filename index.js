const inquirer = require('inquirer')
const fs = require('fs')
const markdownTemplate = require('./utils/markdownTemplate.js')


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
        message: 'Your  full legal name: ',
        name: 'legalName',
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
    },
    {
        type: 'list',
        message: 'License:',
        name: 'license',
        choices: ['MIT', 'CCO_1.0', 'n/a']
    },
    {
        type: 'input',
        message: 'Year Created: ',
        name: 'year'
    },
])
    .then(function (response) {
        var licenseData = ''
        if (response.license !== 'n/a'){
            let licenseName = response.license
            response.license = `![license](https://img.shields.io/badge/License-${licenseName}-blue)`
            const licensePage = require(`./utils/licenses/${licenseName}License.js`) 
            licenseData = licensePage(response)
        }else{
            response.license = ''
        }

        const userData = markdownTemplate(response, licenseData)

        fs.writeFile('Test.md', userData, function (error) {
            if (error) {
                console.log(error)
            } else {
                console.log('Success!')
            }
        })

    }).catch(function (error) {
        console.log(error)
});
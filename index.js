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
    },
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
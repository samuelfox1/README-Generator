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
    {
        type: 'input',
        message: 'Describe feature 1 of 5.',
        name: 'feature1',
    },
    {
        type: 'input',
        message: 'Describe feature 2 of 5.',
        name: 'feature2',
    },
    {
        type: 'input',
        message: 'Describe feature 3 of 5.',
        name: 'feature3',
    },
    {
        type: 'input',
        message: 'Describe feature 4 of 5.',
        name: 'feature4',
    },
    {
        type: 'input',
        message: 'Describe feature 5 of 5.',
        name: 'feature5',
    },
    {
        type: 'input',
        message: 'User Story - AS A(N):',
        name: 'declareWho',
    },
    {
        type: 'input',
        message: 'I WANT:',
        name: 'declareWant',
    },
    {
        type: 'input',
        message: 'SO THAT:',
        name: 'declareWhy',
    },
    {
        type: 'input',
        message: 'Deployed URL:',
        name: 'deployedURL',
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
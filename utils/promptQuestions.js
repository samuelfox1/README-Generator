const {
    languages,
    clientSideTech,
    serverSideTech,
    otherTech
} = require('./promptChoices/index')

const enterToContinue = [`ok`]
const licenses = ['MIT', 'none']

module.exports = questions = [
    {
        type: 'checkbox',
        message: 'Welcome to README-Generator!',
        name: 'alertUser0',
        choices: enterToContinue
    },
    {
        type: 'checkbox',
        message: 'Lets collect some information about your project',
        name: 'alertUser1',
        choices: enterToContinue
    },
    {
        type: 'input',
        message: 'Name of GitHub Repository :',
        name: 'repoName',
    },
    {
        type: 'input',
        message: 'Brief description of the project: ',
        name: 'description',
    },
    {
        type: 'input',
        message: 'Year Created: ',
        name: 'year'
    },
    {
        type: 'checkbox',
        message: 'Select languages used:',
        name: 'languages',
        choices: languages
    },
    {
        type: 'checkbox',
        message: 'Select client technologies used:',
        name: 'clientSideTech',
        choices: clientSideTech
    },
    {
        type: 'checkbox',
        message: 'Select server technologies used:',
        name: 'serverSideTech',
        choices: serverSideTech
    },
    {
        type: 'checkbox',
        message: 'Select other technologies used:',
        name: 'otherTech',
        choices: otherTech
    },
    {
        type: 'input',
        message: 'User Story: "AS A:"',
        name: 'userStoryAsA',
    },
    {
        type: 'input',
        message: 'User Story: "I WANT:"',
        name: 'userStoryIWant',
    },
    {
        type: 'input',
        message: 'User Story: "SO THAT:"',
        name: 'userStorySoThat',
    },
    {
        type: 'input',
        message: 'Deployed URL:',
        name: 'deployedUrl',
    },
    {
        type: 'list',
        message: 'License:',
        name: 'license',
        choices: licenses
    }
]
const enterToContinue = [`Press Enter to continue`]
const licenses = ['MIT', 'CCO_1.0', 'n/a']
const technologyChoices = ['HTML5', 'CSS', 'JavaScript', 'Node.js', 'ExpressJS', 'MySQL', 'MongoDB', 'handlebars.js', 'Bootstrap', 'MaterializeCSS', 'ReactJS', 'npm', 'jest']

module.exports = questions = [{
    type: 'list',
    message: 'DO NOT USE BACK-TICKS IN ANY ENTRIES',
    name: 'alertUser1',
    choices: enterToContinue
},
{
    type: 'list',
    message: 'GITHUB REPO NAME AND USER NAME ARE CASE SENSITIVE, INCORRECT ENTRIES WILL BREAK LINKS',
    name: 'alertUser2',
    choices: enterToContinue
},
{
    type: 'list',
    message: 'SCREENSHOT should be titled "screenshot.png" and stored in ./assets/images/ ',
    name: 'alertUser3',
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
    name: 'briefDescription',
},
{
    type: 'input',
    message: 'Year Created: ',
    name: 'year'
},
{
    type: 'checkbox',
    message: 'Select technologies used:',
    name: 'technologiesSelected',
    choices: technologyChoices
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
    message: '"How to contribute" Section - links to Repo "Pull requests" and "issues" are added by default. Add any other information here:',
    name: 'contributionInfo',
},
{
    type: 'confirm',
    message: 'Include Contributor Covenant Code of Conduct to "How to Contribute" Section?',
    name: 'confirmConCov',
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
    type: 'list',
    message: 'License:',
    name: 'license',
    choices: licenses
}]
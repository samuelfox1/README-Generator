const inquirer = require('inquirer')
const fs = require('fs')
const markdownTemplate = require('./assets/utils/markdownTemplate.js');
const techSheet = require('./assets/utils/technologies.js')

inquirer.prompt([
    {
        type: 'list',
        message: 'DO NOT USE BACK-TICKS IN ANY ENTRIES',
        name: 'alertUser1',
        choices: ['Press Enter to continue']
    },
    {
        type: 'list',
        message: 'GITHUB REPO NAME AND USER NAME ARE CASE SENSITIVE, INCORRECT ENTRIES WILL BREAK LINKS',
        name: 'alertUser2',
        choices: ['Press Enter to continue']
    },
    {
        type: 'list',
        message: 'SCREENSHOT should be titled "screenshot.png" and stored in ./assets/images/ ',
        name: 'alertUser3',
        choices: ['Press Enter to continue']
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
        name: 'technologies',
        choices: ['HTML', 'CSS', 'JavaScript', 'Node.js', 'ExpressJS', 'MySQL', 'MongoDB', 'handlebars.js', 'Bootstrap', 'MaterializeCSS', 'ReactJS', 'npm']
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
        message: 'Installation Instruction 1 of 5:',
        name: 'installationInstruction1',
    },
    {
        type: 'input',
        message: 'Installation Instruction 2 of 5:',
        name: 'installationInstruction2',
    },
    {
        type: 'input',
        message: 'Installation Instruction 3 of 5:',
        name: 'installationInstruction3',
    },
    {
        type: 'input',
        message: 'Installation Instruction 4 of 5:',
        name: 'installationInstruction4',
    },
    {
        type: 'input',
        message: 'Installation Instruction 5 of 5:',
        name: 'installationInstruction5',
    },
    {
        type: 'input',
        message: 'User Instruction 1 of 5:',
        name: 'userInstruction1',
    },
    {
        type: 'input',
        message: 'User Instruction 2 of 5:',
        name: 'userInstruction2',
    },
    {
        type: 'input',
        message: 'User Instruction 3 of 5:',
        name: 'userInstruction3',
    },
    {
        type: 'input',
        message: 'User Instruction 4 of 5:',
        name: 'userInstruction4',
    },
    {
        type: 'input',
        message: 'User Instruction 5 of 5:',
        name: 'userInstruction5',
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
        name: 'gitHubUserName',
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
])
    .then(function (data) {

        //for technologies selected, replace the names with the markdown text for the badges
        const badgeTypes = techSheet(data.technologies)
        data.technologies = []
        data.technologies = badgeTypes

        // if a user selects a license type from the list, include a Badge in the discription and add the License text to the License section in the markdown file
        var licenseData = ''
        if (data.license !== 'n/a') {
            let licenseName = data.license
            data.license = `[![license](https://img.shields.io/badge/License-MIT-blue)](#License)`
            const licensePage = require(`./assets/licenses/${licenseName}License.js`)
            licenseData = licensePage(data)
        } else {
            data.license = ''
            licenseData = `n/a`
        }

        // include contributor covenant if user selects yes
        var conCov = ''
        if (data.confirmConCov) {
            data.confirmConCov = '[![Contributor Covenant](https://img.shields.io/badge/Contributor%20Covenant-v2.0%20adopted-ff69b4.svg)](https://www.contributor-covenant.org/)'
            conCov = '* [Contributor Covenant Code of Conduct](https://www.contributor-covenant.org/)'
        } else {
            data.confirmConCov = ''
        }

        const userData = markdownTemplate(data, licenseData, conCov)

        fs.writeFile('./output/README.md', userData, function (error) {
            if (error) {
                console.log(error)
            } else {
                console.log('Success!')
            }
        })

    }).catch(function (error) {
        console.log(error)
    });

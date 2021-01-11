const inquirer = require('inquirer')
const fs = require('fs')
const markdownTemplate = require('./assets/utils/markdownTemplate.js');

inquirer.prompt([
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
        type:'input',
        message:'User Story: "AS A:"',
        name:'userStoryAsA',
    },
    {
        type:'input',
        message:'User Story: "I WANT:"',
        name:'userStoryIWant',
    },
    {
        type:'input',
        message:'User Story: "SO THAT:"',
        name:'userStorySoThat',
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
        type: 'confirm',
        message: 'Include Contributor Covenant Code of Conduct to "How to Contribute"?',
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

        //if a user selects a license type from the list, include a Badge in the discription and add the License text to the License section in the markdown file
        var licenseData = ''
        if (data.license !== 'n/a'){
            let licenseName = data.license
            data.license = `[![license](https://img.shields.io/badge/License-MIT-blue)](#License)`
            const licensePage = require(`./assets/licenses/${licenseName}License.js`) 
            licenseData = licensePage(data)
        }else{
            data.license = ''
            licenseData = `n/a`
        }

        // include contributor covenant if user selects yes

        var conCov = ''
            if (data.confirmConCov){
                data.confirmConCov = '[![Contributor Covenant](https://img.shields.io/badge/Contributor%20Covenant-v2.0%20adopted-ff69b4.svg)](./assets/utils/CodeOfConduct.md)'
                conCov = '* [Contributor Covenant Code of Conduct](./assets/utils/CodeOfConduct.md)'
            }else{
                data.confirmConCov = ''
            }

        const userData = markdownTemplate(data, licenseData, conCov)

        fs.writeFile('README.md', userData, function (error) {
            if (error) {
                console.log(error)
            } else {
                console.log('Success!')
            }
        })

    }).catch(function (error) {
        console.log(error)
});

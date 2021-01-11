function generateMarkdown(data,licenseData, conCov) {

const markdownTemplate = `
# ${data.repoName}

>## Description 

* ${data.briefDescription}
* created ${data.year}

<br>

${data.license}
<br>
${data.confirmConCov}

<br>

>## Story

* AS A: ${data.userStoryAsA}
* I WANT: ${data.userStoryIWant}
* SO THAT: ${data.userStorySoThat}

<br>

>## Table of Contents

* [Contributing](#Contributing)
* [Description](#Description)
* [Installation](#Installation)
* [License](#License)
* [Questions](#Questions)
* [Story](#Story)
* [Testing](#Testing)
* [Usage](#Usage)

<br>

>## Installation

1. ${data.installationInstruction1}
2. ${data.installationInstruction2}
3. ${data.installationInstruction3}
4. ${data.installationInstruction4}
5. ${data.installationInstruction5}

<br>

>## Usage

1. ${data.userInstruction1}
2. ${data.userInstruction2}
3. ${data.userInstruction3}
4. ${data.userInstruction4}
5. ${data.userInstruction5}

<br>

>## Contributing

* [Submit bugs and feature requests](https://github.com/${data.gitHubUserName}/${data.repoName}/issues)
* [Review changes](https://github.com/${data.gitHubUserName}/${data.repoName}/pulls)
${conCov}

<br>

>## Testing

* ${data.testInstructions}

<br>

>## Product

* [Check it out!](${data.deployedURL}) 

![Screenshot](Assets/images/screenshot.png)

<br>

>## Questions

| Name | Email  | Github  | LinkedIn |
| :--: | :----: | :-----: | :------: |
| ${data.legalName} | ${data.userEmail} | [![Github](./assets/images/logo/github.png)](https://github.com/${data.gitHubUserName}) | [![LinkedIn](./assets/images/logo/linkedin.png)](https://www.linkedin.com/in/${data.linkedinUsername}) |

<br>

>## License

${licenseData}

<br>

The 'assets/images/logo/' are trademarks of their respective companies and are under their terms and license.

<br>
<br>

>## [Top of page](#${data.repoName})
`

return markdownTemplate;
}

module.exports = generateMarkdown;
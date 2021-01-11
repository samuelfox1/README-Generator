function generateMarkdown(data,licenseData, conCov) {

const markdownTemplate = `
# ${data.repoName}

## Description 

* ${data.briefDescription}
* created ${data.year}

<br>

${data.license}
<br>
${data.confirmConCov}

<br>

## Story

* AS A ${data.userStoryAsA}
* I WANT ${data.userStoryIWant}
* SO THAT ${data.userStorySoThat}

<br>

## Table of Contents

* [Contributing](#Contributing)
* [Description](#Description)
* [Installation](#Installation)
* [License](#License)
* [Testing](#Testing)
* [Usage](#Usage)
* [Questions](#Questions)
* [Story](#Story)

<br>

## Installation

* ${data.installationInstruction1}
* ${data.installationInstruction2}
* ${data.installationInstruction3}

<br>

## Usage

* ${data.userInstruction1}
* ${data.userInstruction2}
* ${data.userInstruction3}

<br>

## Contributing

* [Submit bugs and feature requests](https://github.com/${data.gitHubUserName}/${data.repoName}/issues)
* [Review changes](https://github.com/${data.gitHubUserName}/${data.repoName}/pulls)
${conCov}

<br>

## Testing

* ${data.testInstructions}

<br>

## Product

[Check it out!](${data.deployedURL}) 

![Screenshot](Assets/images/screenshot.png)

<br>

## Questions

| Name | Email  | Github  | LinkedIn |
| :--: | :----: | :-----: | :------: |
| ${data.legalName} | ${data.userEmail} | [![Github](./assets/images/github.png)](https://github.com/${data.gitHubUserName}) | [![LinkedIn](./assets/images/linkedin.png)](https://www.linkedin.com/in/${data.linkedinUsername}) |

<br>

## License

${licenseData}

## [Top of page](#${data.repoName})
`

return markdownTemplate;
}

module.exports = generateMarkdown;
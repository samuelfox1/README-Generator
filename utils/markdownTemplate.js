function generateMarkdown(response, licenseData) {

const markdownTemplate = `
# ${projectTitle}

## Description 

* ${response.briefDescription}
* _created ${response.year}_

<br>

${response.license}

<br>

## Story

* AS A ${response.userStoryAsA}
* I WANT ${response.userStoryIWant}
* SO THAT ${response.userStorySoThat}

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

* ${response.installationInstruction1}
* ${response.installationInstruction2}
* ${response.installationInstruction3}

<br>

## Usage

* ${response.userInstruction1}
* ${response.userInstruction2}
* ${response.userInstruction3}

<br>

## Contributing

* [Submit bugs and feature requests](https://github.com/${response.gitHubUserName}/${response.repoName}/issues)
* [Review changes](https://github.com/${response.gitHubUserName}/${response.repoName}/pulls)

<br>

## Testing

* ${response.testInstructions}

<br>

## Product

[Check it out!](${response.deployedURL}) 

![Screenshot](Assets/images/screenshot.png)

<br>

## Questions

| Name | Email  | Github  | LinkedIn |
| :--: | :----: | :-----: | :------: |
| ${response.legalName} | ${response.userEmail} | [![Github](./Assets/images/github.png)](https://github.com/${response.gitHubUserName}) | [![LinkedIn](./Assets/images/linkedin.png)](https://www.linkedin.com/in/${response.linkedinUsername}) |

<br>

## License

${licenseData}
`

return markdownTemplate;
}

module.exports = generateMarkdown;
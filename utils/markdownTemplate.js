function generateMarkdown(response, licenseData) {

const markdownTemplate = `
## Description 

- ${response.briefDescription}

<br>

${response.license}

## Table of Contents

- [Contributions](#Contributions)
- [Description](#Description)
- [Installation](#Installation)
- [License](#License)
- [Testing](#Testing)
- [Usage](#Usage)
- [Questions](#Questions)

<br>

## Installation

- ${response.installationInstruction1}
- ${response.installationInstruction2}
- ${response.installationInstruction3}


<br>

## Usage

- ${response.userInstruction1}
- ${response.userInstruction2}
- ${response.userInstruction3}


<br>

## Contributions

- ${response.contributionGuidelines}

<br>

## Testing

- ${response.testInstructions}

<br>

## Product

[Live Site](${response.deployedURL}) 

![Screenshot](Assets/images/screenshot.png)

<br>

## Questions

| Name | Email  | Github  | LinkedIn |
| :--: | :----: | :-----: | :------: |
| ${response.legalName} | ${response.userEmail} | [![Github](./Assets/images/github.png)](https://github.com/${response.gitHubUsername}) | [![LinkedIn](./Assets/images/linkedin.png)](https://www.linkedin.com/in/${response.linkedinUsername}) |

${licenseData}
`

return markdownTemplate;
}

module.exports = generateMarkdown;
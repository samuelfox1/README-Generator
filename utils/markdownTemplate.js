function generateMarkdown(response) {

const markdownTemplate = `# ${response.projectTitle}

## Description 

- ${response.briefDescription}

<br>

${licenseType}

## Table of Contents

- [Description](#Description)
- [Installation](#Installation)
- [Usage](#Usage)
- [License](#License)
- [Contributions](#Contributions)
- [Testing](#Testing)
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
| ${response.userName} | ${response.userEmail} | [![Github](./Assets/images/github.png)](https://github.com/${response.gitHubUsername}) | [![LinkedIn](./Assets/images/linkedin.png)](https://www.linkedin.com/in/${response.linkedinUsername}) |`

    return markdownTemplate;
}

module.exports = generateMarkdown;
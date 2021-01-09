function generateMarkdown(response) {

const markdownTemplate = `# ${response.projectTitle}
${response.briefDescription}
<br>
<br>

## About the author(s)

| Name | Email  | Github  | LinkedIn |
| :--: | :----: | :-----: | :------: |
| ${response.userName} | ${response.userEmail} | [![Github](./Assets/images/github.png)](https://github.com/${response.gitHubUsername}) | [![LinkedIn](./Assets/images/linkedin.png)](https://www.linkedin.com/in/${response.linkedinUsername}/) |
`
// <br>
// <br>
// ## Features

// * ${feature1}
// * ${feature2}
// * ${feature3}
// * ${feature4}
// * ${feature5}

// <br>
// <br>
// ## User Story

// AS AN ${declareWho}
// I WANT ${declareWant}
// SO THAT ${declareWhy}


// ## Product

// [Live Site URL](${deployedURL})

// ![Screenshot](./images/screenshot.png)
// <br>
// <br>
// ## Technologies

// ${techBadges}

// <br>
// <br>
// ## License

// [CC0 1.0 Universal](https://creativecommons.org/publicdomain/zero/1.0/)

    return markdownTemplate;
}

module.exports = generateMarkdown;
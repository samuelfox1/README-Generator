function generateMarkdown(response) {

const markdownTemplate = `# ${response.projectTitle}
${response.briefDescription}

<br>
<br>

## About the author(s)

| Name | Email  | Github  | LinkedIn |
| :--: | :----: | :-----: | :------: |
| ${response.userName} | ${response.userEmail} | [![Github](./Assets/images/github.png)](https://github.com/${response.gitHubUsername}) | [![LinkedIn](./Assets/images/linkedin.png)](https://www.linkedin.com/in/${response.linkedinUsername}/) |

<br>
<br>

## Features

* ${response.feature1}
* ${response.feature2}
* ${response.feature3}
* ${response.feature4}
* ${response.feature5}

<br>
<br>

## User Story

* AS AN ${response.declareWho}
* I WANT ${response.declareWant}
* SO THAT ${response.declareWhy}

<br>
<br>

## Product

[Live Site](${response.deployedURL}) 

![Screenshot](Assets/images/screenshot.png)

<br>
<br>

## Technologies

![html](https://img.shields.io/badge/-HTML5-blue?logo=html5)
![css](https://img.shields.io/badge/-CSS-red?logo=css3)
![javascript](https://img.shields.io/badge/-javascript-yellow?logo=javascript)

<br>
<br>

## License

[CC0 1.0 Universal](https://creativecommons.org/publicdomain/zero/1.0/)`

    return markdownTemplate;
}

module.exports = generateMarkdown;
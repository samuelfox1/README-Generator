function generateMarkdown(data, licenseData, conCov) {

    const { repoName, briefDescription, userStoryAsA,
        userStoryIWant, userStorySoThat, license,
        confirmConCov, technologies, deployedURL,
        gitHubUserName, testInstructions, legalName,
        userEmail, linkedinUsername, year
    } = data

    return `# ${repoName}

>## Description 

* ${briefDescription}
* #### Story
    * AS A: ${userStoryAsA}
    * I WANT: ${userStoryIWant}
    * SO THAT: ${userStorySoThat}

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

${license}
<br>

${confirmConCov}
<br>

${technologies}



>## Product

* [Check it out!](${deployedURL}) 

![Screenshot](./assets/images/screenshot.png)

<br>

>## Installation

1.
2.
3.
4.
5.

<br>

>## Usage

1.
2.
3.
4.
5.

<br>

>## Contributing

* [Submit bugs and feature requests](https://github.com/${gitHubUserName}/${repoName}/issues)
* [Review changes](https://github.com/${gitHubUserName}/${repoName}/pulls)
${conCov}

<br>

>## Testing

* ${testInstructions}

<br>

>## Questions

| Name | Email  | Github  | LinkedIn |
| :--: | :----: | :-----: | :------: |
| ${legalName} | ${userEmail} | [![Github](./assets/images/logo/github.png)](https://github.com/${gitHubUserName}) | [![LinkedIn](./assets/images/logo/linkedin.png)](https://www.linkedin.com/in/${linkedinUsername}) |

<br>

>## License
${licenseData}
<br>

The images found in 'assets/images/logo/' are trademarks of their respective companies and are under their terms and license.
<br>

${year}
<br>

>## [Top of page](#${repoName})`
}

module.exports = generateMarkdown;
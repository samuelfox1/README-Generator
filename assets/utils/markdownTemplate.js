require('dotenv').config()
const { NAME, EMAIL, GITHUB_USERNAME, LINKEDIN_USERNAME } = process.env

const getNAME = () => NAME
const getEMAIL = () => EMAIL
const getGITHUB_USERNAME = () => GITHUB_USERNAME
const getLINKEDIN_USERNAME = () => LINKEDIN_USERNAME

function generateMarkdown(data, licenseData, ContCovLink) {

    const { repoName, briefDescription, userStoryAsA,
        userStoryIWant, userStorySoThat, license,
        confirmConCov, technologies, deployedURL,
        testInstructions, year
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

* [Submit bugs and feature requests](https://github.com/${getGITHUB_USERNAME()}/${repoName}/issues)
* [Review changes](https://github.com/${getGITHUB_USERNAME()}/${repoName}/pulls)
${ContCovLink}

<br>

>## Testing

* ${testInstructions}

<br>

>## Questions

| Name | Email  | Github  | LinkedIn |
| :--: | :----: | :-----: | :------: |
| ${getNAME()} | ${getEMAIL()} | [![Github](./assets/images/logo/github.png)](https://github.com/${getGITHUB_USERNAME()}) | [![LinkedIn](./assets/images/logo/linkedin.png)](https://www.linkedin.com/in/${getLINKEDIN_USERNAME()}) |

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
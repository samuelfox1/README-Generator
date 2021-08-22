const { name, email, gitHubId, linkedInId } = require('./config/config')

const getRepoUrl = (repoName) => `https://github.com/${gitHubId}/${repoName}`

const mdTemplate = ({
    repoName,
    description,
    userStoryAsA,
    userStoryIWant,
    userStorySoThat,
    license,
    formattedShields,
    deployedUrl,
    licenseData,
    year

}) => (`# ${repoName}

## Description 

* ${description}

<br>

* AS A: ${userStoryAsA}
* I WANT: ${userStoryIWant}
* SO THAT: ${userStorySoThat}

<br>

## Table of Contents

* [Installation](#installation)
* [How to Use](#how-to-use)
* [Contributing](#contributing)
* [Questions](#questions)
* [Testing](#testing)
* [License](#license)

<br>

${formattedShields}

## Product

* [Check it out!](${deployedUrl}) 

![Screenshot](./assets/images/screenshot.png)

<br>

## Installation

1.
2.
3.
4.
5.

<br>

## How to Use

1.
2.
3.
4.
5.

<br>

## Contributing

* [Submit bugs and feature requests](${getRepoUrl(repoName)}/issues)
* [Review changes](${getRepoUrl(repoName)}/pulls)

<br>

## Testing

1.
2.
3.
4.
5.

<br>

## Questions

| Name | Email  | Github  | LinkedIn | Portfolio |
| :--: | :----: | :-----: | :------: | :-------: |
| ${name} | ${email} | [![Github](./assets/images/logo/github.png)](https://github.com/${gitHubId}) | [![LinkedIn](./assets/images/logo/linkedin.png)](https://www.linkedin.com/in/${linkedInId}) | [samueljfox.com](https://samueljfox.com)

<br>

${licenseData}

<br>

## [Top of page](#${repoName})`
)


module.exports = mdTemplate;
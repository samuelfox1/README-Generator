const { readFileSync, writeFile, appendFile } = require('fs')
require('dotenv').config()

const validateDotEnvFile = async () => {
    return new Promise((resolve) => {

        const { NAME, EMAIL, GITHUB_USERNAME, LINKEDIN_USERNAME } = process.env
        if (NAME && EMAIL && GITHUB_USERNAME && LINKEDIN_USERNAME) return resolve(true)

        const exampleData = readFileSync('.env.example', 'utf8', (error, data) => data)
        const exampleDataArr = exampleData.split('\n')

        try {
            const env = readFileSync('.env', 'utf-8', (error, data) => data)
            const envArr1 = env.split('\n')
            const envArr2 = envArr1.map(key => key.split('=')[0] + '=')

            const missingVariables = exampleDataArr.filter(key => envArr2.indexOf(key) === -1)
            const formattedMissingVariables = missingVariables.join('\n')

            if (formattedMissingVariables.length > 0) addMissingVariablesToEnvFile('\n' + formattedMissingVariables)
            alertUserAndExit()

        } catch (error) {
            createEnvFile(exampleData)
        }
    })
}

const createEnvFile = (data) => {
    writeFile('.env', data, (error) => {
        if (error) throw error
        alertUserAndExit()
    })
}

const addMissingVariablesToEnvFile = (data) => {
    appendFile('.env', data, (error) => {
        if (error) throw error
        alertUserAndExit()
    })
}

const alertUserAndExit = () => console.log('fill out ./.env file and try again') && process.exit(0)

module.exports = validateDotEnvFile

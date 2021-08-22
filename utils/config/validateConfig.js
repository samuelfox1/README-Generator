const userData = require('./config')

const validateConfig = () => {
    const missingKeys = []
    for (let key in userData) {
        if (!userData[key]) missingKeys.push(key)
    }

    if (!missingKeys.length) return true
    console.log(`missing config value: ${[...missingKeys]} in ./config/config.js`)
}

module.exports = { validateConfig, userData }
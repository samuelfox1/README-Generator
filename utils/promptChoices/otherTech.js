const { urlBase, formatUrlSpaces } = require('./helpers')

const nodeJs = 'node.js'
const npm = 'npm'
const jest = 'jest'

const otherTech = [
    { name: nodeJs, value: `![${nodeJs}](${urlBase}/-${nodeJs}-339933?logo=${nodeJs}&logoColor=white)` },
    { name: npm, value: `![${npm}](${urlBase}/-${npm}-CB3837?logo=${npm})` },
    { name: jest, value: `![${jest}](${urlBase}/-${jest}-C21325?logo=${jest})` }
]

module.exports = otherTech
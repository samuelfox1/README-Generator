const { urlBase, formatUrlSpaces } = require('./helpers')


const html5 = 'html5'
const css3 = 'css3'
const javascript = 'javascript'

const languages = [
    { name: html5, value: `![${html5}](${urlBase}/-${html5}-blue?logo=${html5})` },
    { name: css3, value: `![${css3}](${urlBase}/-${css3}-red?logo=${css3})` },
    { name: javascript, value: `![${javascript}](${urlBase}/-${javascript}-F7DF1E?logo=${javascript}&logoColor=black)` },
]

module.exports = languages
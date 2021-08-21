const { urlBase, formatUrlSpaces } = require('./helpers')

const react = 'react'
const bootstrap = 'bootstrap'
const materialdesign = 'material design'

const clientSideTech = [
    { name: react, value: `![${react}](${urlBase}/-${react}-000000?logo=${react}&logoColor=61DAFB)` },
    { name: bootstrap, value: `![${bootstrap}](${urlBase}/-${bootstrap}-7952B3?logo=${bootstrap}&logoColor=white)` },
    { name: materialdesign, value: `![${materialdesign}](${urlBase}/-${formatUrlSpaces(materialdesign)}-FF7F7F?logo=${formatUrlSpaces(materialdesign)}&logoColor=white)` },
    { name: 'n/a', value: '' }
]

module.exports = clientSideTech
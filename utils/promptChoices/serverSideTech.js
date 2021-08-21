const { urlBase, formatUrlSpaces } = require('./helpers')

const expressJS = 'express.js'
const handlebarsJs = 'handlebars.js'
const mysql = 'mysql'
const mongoDb = 'mongoDb'

const serverSideTech = [
    { name: expressJS, value: `![${expressJS}](${urlBase}/-${expressJS}-000000?logo=javascript&logoColor=yellow)` },
    { name: handlebarsJs, value: `![${handlebarsJs}](${urlBase}/-${handlebarsJs}-FF7D00)` },
    { name: mysql, value: `![${mysql}](${urlBase}/-${mysql}-4479A1?logo=${mysql}&logoColor=white)` },
    { name: mongoDb, value: `![${mongoDb}](${urlBase}/-${mongoDb}-47A248?logo=${mongoDb}&logoColor=white)` }
]

module.exports = serverSideTech
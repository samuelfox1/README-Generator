function generateBadges(element) {
    var badges = []
    element.forEach(element => {

        if (element === 'HTML') {
            badges.push('![html](https://img.shields.io/badge/-HTML5-blue?logo=html5)')
        }
        if (element === 'CSS') {
            badges.push('![css](https://img.shields.io/badge/-CSS-red?logo=css3)')
        }
        if (element === 'JavaScript') {
            badges.push('![javascript](https://img.shields.io/badge/-JavaScript-F7DF1E?logo=javascript&logoColor=black)')
        }
        if (element === 'Node.js') {
            badges.push('![node.js](https://img.shields.io/badge/-node.js-339933?logo=node.js&logoColor=white)')
        }
        if (element === 'ExpressJS') {
            badges.push('![ExpressJS](https://img.shields.io/badge/-Express-000000?logo=JavaScript&logoColor=yellow)')
        }
        if (element === 'handlebars.js') {
            badges.push('![handlebars.js](https://img.shields.io/badge/-handlebars.js-FF7D00)')
        }
        if (element === 'Bootstrap') {
            badges.push('![Bootstrap](https://img.shields.io/badge/-Bootstrap-7952B3?logo=Bootstrap&logoColor=white)')
        }
        if (element === 'MaterializeCSS') {
            badges.push('![MaterializeCSS](https://img.shields.io/badge/-MaterializeCSS-FF7F7F?logo=Material%20Design&logoColor=white)')
        }
        if (element === 'MySQL') {
            badges.push('![MySQL](https://img.shields.io/badge/-MySQL-4479A1?logo=MySQL&logoColor=white)')
        }
        if (element === 'MongoDB') {
            badges.push('![MongoDB](https://img.shields.io/badge/-MongoDB-47A248?logo=MongoDB&logoColor=white)')
        }
        if (element === 'ReactJS') {
            badges.push('![ReactJS](https://img.shields.io/badge/-ReactJS-000000?logo=React&logoColor=61DAFB)')
        }
        if (element === 'npm') {
            badges.push('![npm](https://img.shields.io/badge/-npm-CB3837?logo=NPM)')
        }
        if (element === 'jest') {
            badges.push('![jest](https://img.shields.io/badge/-Jest-C21325?logo=jest)')
        }
    })
    return badges.join('')
}
module.exports = generateBadges
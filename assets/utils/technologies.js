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
            badges.push('![node.js](https://img.shields.io/badge/-Express-000000?logo=JavaScript&logoColor=yellow)')
        }
    })
    return badges.join('')
}
module.exports = generateBadges
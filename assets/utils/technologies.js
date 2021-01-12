function generateBadges(element) {
    var badges = []
    element.forEach(element => {

        if (element === 'html') {
            badges.push('![html](https://img.shields.io/badge/-HTML5-blue?logo=html5)')
        }
        if (element === 'css') {
            badges.push('![css](https://img.shields.io/badge/-CSS-red?logo=css3)')
        }
        if (element === 'javascript') {
            badges.push('![javascript](https://img.shields.io/badge/-javascript-yellow?logo=javascript)')
        }
    })
    return badges
}
module.exports = generateBadges
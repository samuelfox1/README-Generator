const mdTemplate = require('./mdTemplate')
const licenses = require('./licenses')


const getFormattedShields = (data) => {
  const { languages, clientSideTech, serverSideTech, otherTech } = data
  const allTechSelected = []

  if (data.languages.length > 0) allTechSelected.push(languages.join(' '))
  if (clientSideTech.length > 0) allTechSelected.push(clientSideTech.join(' '))
  if (serverSideTech.length > 0) allTechSelected.push(serverSideTech.join(' '))
  if (otherTech.length > 0) allTechSelected.push(otherTech.join(' '))
  return allTechSelected.join(' ')
};

const getLicense = ({ license, year }) => {
  const licenseFunction = licenses[license.toLowerCase()]
  return licenseFunction(year)
};

const generateMarkdown = (data) => {
  data.formattedShields = getFormattedShields(data)
  data.licenseData = getLicense(data)

  return mdTemplate(data);
};

module.exports = generateMarkdown;
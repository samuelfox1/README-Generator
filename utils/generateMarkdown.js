const mdTemplate = require('./mdTemplate')

const generateMarkdown = (data) => {
  console.log(data)
  // append formatted shields strings to data object
  // const formattedShields = getFormattedShields(data)
  // data.formattedShields = formattedShields
  data.formattedShields = getFormattedShields(data)
  // append license string to data object
  // const licenseData = getLicense()
  // data.licenseData = licenseData
  data.licenseData = getLicense()

  return mdTemplate(data);
};

const getFormattedShields = (data) => {
  const { languages, clientSideTech, serverSideTech, otherTech } = data
  const allTechSelected = []

  if (data.languages.length > 0) allTechSelected.push(languages.join(' '))
  if (clientSideTech.length > 0) allTechSelected.push(clientSideTech.join(' '))
  if (serverSideTech.length > 0) allTechSelected.push(serverSideTech.join(' '))
  if (otherTech.length > 0) allTechSelected.push(otherTech.join(' '))
  return allTechSelected.join(' ')
};

const getLicense = () => 'licenseData here';

module.exports = generateMarkdown;
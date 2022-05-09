function renderLicenseBadge(license) {
  if (license){    
    const licenseFixed = license.split(' ').join('%20')
    return `![license badge](https://img.shields.io/badge/license-${licenseFixed}-green)  `
  } else {
    return '';
  }
}

function renderLicenseLink(license) {
  if (license){
    if (license === "GNU AGPLv3"){
      return `[${license}](https://choosealicense.com/licenses/agpl-3.0/)`
    } else if (license === "GNU GPLv3"){
      return `[${license}](https://choosealicense.com/licenses/gpl-3.0/)`
    } else if (license === "GNU LGPLv3"){
      return `[${license}](https://choosealicense.com/licenses/lgpl-3.0/)`
    } else if (license === "Mozilla Public License 2.0"){
      return `[${license}](https://choosealicense.com/licenses/mpl-2.0/)`
    } else if (license === "Apache License 2.0"){
      return  `[${license}](https://choosealicense.com/licenses/apache-2.0/)`
    } else if (license === "MIT License"){
      return  `[${license}](https://choosealicense.com/licenses/mit/)`
    } else if (license === "Boost Software License 1.0"){
      return  `[${license}](https://choosealicense.com/licenses/bsl-1.0/)`
    } else if (license === "The Unlicense"){
      return `[${license}](https://choosealicense.com/licenses/unlicense/)`
    }
  } else {
    return '';
  }
}

function renderLicenseSection(license) {
  if (license) {
    return `This project uses the ${renderLicenseLink(license)} license`
  } else {
    return '';
  }
}

function generateMarkdown(data) {
  const {title, description, license, installation, usage, credits, tests, ...questionsData} = data

  return `# ${title}

  ## Description
  ${description}

  ${renderLicenseBadge(license)}

  ## Table of Contents

  - [Installation](#installation)
  - [Usage](#usage)
  - [License](#license)
  - [Contributing](#contributing)
  - [Tests](#tests)

  ## Installation
  ${installation}

  ## Usage
  ${usage}

  ## License
  ${renderLicenseSection(license)}

  ## Contributing
  ${credits}

  ## Tests
  ${tests}
  
  ## Questions
  Contact me:
  [GitHub](https://github.com/${questionsData.github})
  [${questionsData.email}](mailto:${questionsData.email})
  ${questionsData.contact}`;
}

module.exports = generateMarkdown;

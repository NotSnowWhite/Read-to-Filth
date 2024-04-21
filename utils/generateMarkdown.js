// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (!license) {
    return '';
  } else {
    return `![License: ${license}](https://img.shields.io/badge/License-${license}-lavender)`
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (!license) {
    return '';
  } else if (license === 'GNU_AGPLv3') {
    return `[Link to ${license}](https://choosealicense.com/licenses/agpl-3.0/)`

  } else if (license === 'The_MIT_License') {
    return `[Link to ${license}](https://choosealicense.com/licenses/mit/)`

  } else if (license === 'The_Unlicense') {
    return `[Link to ${license}](https://choosealicense.com/licenses/unlicense/)`
    
  }

}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (!license) {
    return '';
  } else {
    return `This project utilizes the ${license} and can be found at ${renderLicenseLink(license)}`
  }
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}         ${renderLicenseBadge(data.license)}  

${data.purpose}

  ## Description
  
  ${data.description}
  
  ## Questions 
  
  My motivation: ${data.motivation}
  
  My reason for creating this: ${data.reason}
  
  ### Contact me
  
  - [My Email](mailto:${data.email})
  
  - [My GitHub](https://${data.github})
  
  ## Table of Contents
  
  - [Installation](#installation)
  - [Usage](#usage)
  - [Credits](#credits)
  - [License](#license)
  
  ## Installation
  
  ${data.install}
  
  ## Usage
  
  ${data.usage}

  ![alt text](assets/images/'placeImageHere'.png)

  ## License
  
  ${renderLicenseSection(data.license)}
  
  ## Contributing
  
  ${data.credits}
  
  ## Tests
  
  ${data.tests}
  
`;
}

module.exports = generateMarkdown;

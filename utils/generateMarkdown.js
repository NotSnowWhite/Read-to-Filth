// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (!license) {
    return '';
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

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
  
  ${data.license}
  
  ## Badges
  
  ${data.badges}
  
  ## Contributing
  
  ${data.credits}
  
  ## Tests
  
  ${data.tests}
  
`;
}

module.exports = generateMarkdown;

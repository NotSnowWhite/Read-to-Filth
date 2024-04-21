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

  ## Description
  
  ${data.description}
  
  ## Questions 
  
  ${data.motivation}
  
  ${data.reason}
  
  ### Contact me
  
  - [My Email](mailto:${data.email})
  
  - [My GitHub](https://${data.github})
  
  ## Table of Contents
  
  - [Installation](#installation)
  - [Usage](#usage)
  - [Credits](#credits)
  - [License](#license)
  
  ## Installation
  
  ${data.installation}
  
  ## Usage
  
  ${data.usage}
  ![alt text](assets/images/'placeImageHere'.png)

  ## Credits
  
  ${data.credits}
  
  ## License
  
  ${data.license}
  
  ## Badges
  
  ${data.badges}
  
  ## Contributing
  
  ${data.contributing}
  
  ## Tests
  
  ${data.tests}
  
`;
}

module.exports = generateMarkdown;

function generateMarkdown(data) {
  return `
    # ${data.title}
    ## Description
    ${data.description}
    ## Table of Contents
    ## Installation
    ${data.installation}
    ## Usage
    ${data.usage}
    ## License
    ${data.licenses}
    ## Contributing
    ${data.contributors}
    ## Tests
    ${data.tests}
    ## Questions
    ${data.username}
    ${data.email}
  `;
}

module.exports = generateMarkdown;
function generatePage(answers) {
    return `
<h1 align="center"> ${answers.projectTitle} </h1>
  
![badge](https://img.shields.io/badge/license-${answers.license}-brightgreen)<br />
## Description
${answers.description}
## Table of Contents
- [Description](#description)
- [Installation](#installation)
- [Usage](#usage)
- [Contribution](#contributing)
- [Tests](#tests)
- [License](#license)
- [Questions](#questions)
## Installation
${answers.installation}
## Usage
${answers.usage}
## Contribution
${answers.contribution}
## Tests
✏️ ${answers.test}
## License
![badge](https://img.shields.io/badge/license-${answers.license}-brightgreen)
<br />
This application is covered by the ${answers.license} license. 
## Questions
 ${answers.questions}<br />
<br />
:octocat: Find me on GitHub: [${answers.github}](https://github.com/${answers.github})<br />
<br />
✉️ Email me with any questions: ${answers.email}<br /><br />
_This README was generated with ❤️ by [README-generator](https://github.com/zpuckett/README-generator) 
    `;
  }
  
  module.exports = generatePage;

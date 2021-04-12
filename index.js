const fs = require("fs");
const util = require("util");
const inquirer = require("inquirer");
const generatePage = require("./src/generateReadme")
const writeFileAsync = util.promisify(fs.writeFile);

const questions = () => {
    return inquirer.prompt([
    {
        type: 'input',
        name: 'projectTitle',
        message: 'What is the project title?'
    },
    {
        type: 'input',
        name: 'description',
        message: 'Enter your project description.',
    },
    {
        type: 'input',
        name: 'installation',
        message: 'Enter the installation instructions.',
    },
    {
        type: 'input',
        name: 'usage',
        message: 'Enter the project usage information.',
    },
    {
        type: 'input',
        name: 'contribution',
        message: 'Enter the project contributions.',
    },
    {
        type: 'input',
        name: 'test',
        message: 'Enter the project test instructions.',
    },
    {
        type: 'input',
        name: 'license',
        message: 'Enter the project license information.',
    },
    {
        type: 'input',
        name: 'github',
        message: 'Enter your GitHub username.',
    },
    {
        type: 'input',
        name: 'email',
        message: 'Enter your email address:',
    }

]);
}
async function init() {
    try {
        // Ask user questions and generate responses
        const answers = await questions();
        const generateContent = generatePage(answers);
        // Write new README.md 
        await writeFileAsync('./src/README.md', generateContent);
        console.log('Successfully wrote to README.md');
    }   catch(err) {
        console.log(err);
    }
  }
  
  init();  
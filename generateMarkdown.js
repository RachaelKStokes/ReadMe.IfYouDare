// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  const inquirer = require('inquirer');

inquirer
  .prompt([
    {
      type: 'input',
      message: 'What is the name of your project?',
      name: 'readMeTitle',
      default: 'MyReadMe',
    },
    {
      type: 'input',
      message: 'Please enter a description of your project.',
      name: 'description',
      default:'lorem ipsum',
    },
    {
      type: 'input',
      message: 'Please enter the installation instructions.',
      name: 'installation',
    },
    {
      type: 'input',
      message: 'PLease enter usage information.',
      name: 'usage',
    },
    {
      type: 'input',
      message: 'Please enter contribution guidelines.',
      name: 'contribution',
    },
    {
      type: 'input',
      message: 'Please enter test instructions.',
      name: 'tests',
    },
    {
      type: 'input',
      message: 'Please select a license:',
      choices: ['MIT','Apache 2.0'],
      name: 'license',
    },
    {
      type: 'input',
      message:'Please enter yout GitHub username.',
      name: 'github',
    },
    {
      type: 'input',
      message: 'Please enter your email address.',
      name: 'email',
    },
  ])
  .then((data) =>) {
    console.log(data);
    const markDown = `
    
    # ${data.readMeTitle}

    ##License

    ${data.license}

    ## Description
    
    ${data.decription}
    
    ## Table of Contents
    
    - [Installation](#installation)
    - [Usage](#usage)
    - [Contributing](#contributing)
    - [Tests](#tests)
    - [Questions](#questions)
    
    ## Installation
    
    ${data.installation}
    
    ## Usage
    
    ${data.usage}
    
    ## Contributing
    
    ${data.contribution}
    
    ## Tests

    ${data.tests}

    ## Questions

    If you have any additional questions please feel free to reach me at:
    ${data.github} or ${data.email}. 
    `

    if (!fstat.existsSync('./output')) {
      fs.mkdirSync('./output');
    }

    fs.writeFileSync('./output/README.md', markDown);
  }
}

module.exports = generateMarkdown;

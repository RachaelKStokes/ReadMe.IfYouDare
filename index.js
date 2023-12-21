const inquirer = require('inquirer');
const fs = require('fs');

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {

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
        
      },
      {
        type: 'input',
        message: 'Please enter the installation instructions.',
        name: 'installation',
      },
      {
        type: 'input',
        message: 'Please enter usage information.',
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
        type: 'rawlist',
        message: 'Please select a license:',
        choices: ['MIT', 'Apache 2.0'],
        name: 'license',
      },
      {
        type: 'input',
        message: 'Please enter yout GitHub username.',
        name: 'github',
      },
      {
        type: 'input',
        message: 'Please enter your email address.',
        name: 'email',
      },
    ])
    .then((data) => {
      console.log(data);
      const markDown = `

# ${data.readMeTitle}

## License

![Github license](https://img.shields.io/badge/license-${data.license}-pink.svg)


## Description

${data.description}

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
GitHub: ![liveURL](https://github.com/${data.github}) or ${data.email}. 
`

      if (!fs.existsSync('./output')) {
        fs.mkdirSync('./output');
      }

      fs.writeFileSync('./output/README.md', markDown);
    });
};

 generateMarkdown();

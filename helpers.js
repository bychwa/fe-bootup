const fs = require('fs');
const chalk = require('chalk');
const git = require('nodegit');
const inquirer = require('inquirer');
const constants = require('./constants');
const prompt = inquirer.prompt;

const writeTo = (file, data) => {
  fs.writeFileSync(file, JSON.stringify(data));
};

const startProject = (name, options = {}) => {
  console.log('INIT:', chalk.blue(`initializing '${name}' project...`));
  const projectDir = `${process.cwd()}/${name}`;
  git
    .Clone(constants.templateUrl, projectDir)
    .then(() => {
      const pkgJsonFilename = `${projectDir}/package.json`;
      const pkgData = {
        ...require(pkgJsonFilename),
        name,
        repository: undefined
      }
      writeTo(pkgJsonFilename, pkgData)
      console.log('SUCCESS!: ', chalk.blue(`cd ./${name}`));
    }).catch(error => {
      console.error(chalk.red(error.message));
    });
};

const renameProject = (name, options = {}) => {
  console.log(chalk.red('// TODO: Renaming the project'))
};

const defaultPrompter = (name, options = {}) => {
  prompt(constants.questions.mode_question)
    .then(create_answers => {
      switch (create_answers.mode) {
        case constants.modes.CREATE:
          prompt(constants.questions.create_questions)
            .then(create_answers => {
              console.log(chalk.red("Looks Ok?"));
              Object.keys(create_answers).forEach(key => {
                console.log(`${key} : `, chalk.blue(create_answers[key]))
              });
              prompt(constants.questions.confirm_questions).then(ans => {
                if (ans.looks_good) {
                  startProject(create_answers.app_name, create_answers);
                } else {
                  process.exit(-1);
                }
              });
            });
          break;
        case constants.modes.UPDATE:
          renameProject();
          break;
        default:
          process.exit(-1);
          break;
      }
    });
}
module.exports = {
  startProject,
  renameProject,
  defaultPrompter
}
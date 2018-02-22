const fs = require('fs');
const chalk = require('chalk');
const git = require('nodegit');

const templateUrl = 'https://github.com/bychwa/react-frontend-bootstrap-app.git';

const startProject = (name, options={}) => {
  console.log(chalk.blue(`Starting up the project ${name}`));
  const projectDir = `${process.cwd()}/${name}`;
  git
  .Clone(templateUrl, projectDir)
  .then(()=> {
    const pkgJsonFilename = `${projectDir}/package.json`;
    pkgjson = require(pkgJsonFilename);
    fs.writeFileSync(pkgJsonFilename, JSON.stringify({ 
      ...pkgjson,
       repository: undefined,
       name, 
    }))
    console.log('SUCCESS: ',chalk.blue(`cd ./${name}`));
  }).catch(console.error);
};
const renameProject = (name, options = {})=> {
  console.log(chalk.red('renaming the project'))
};

module.exports = { startProject, renameProject }
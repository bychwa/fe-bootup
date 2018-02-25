#! /usr/bin/env node

const program = require('commander');
const { startProject, renameProject, defaultPrompter } = require('./helpers');
const CFonts = require('cfonts');
CFonts.say('FE Bootup!', {
    font: 'block',       
    align: 'left',       
    colors: ['blue'],   
    background: 'Black', 
    letterSpacing: 0.3,    
    lineHeight: 1,       
    space: true,         
    maxLength: '0'       
});

if(process.argv.length < 3){
  defaultPrompter();
}else{

  program
    .version('0.0.1')
    .description('Frontend Bootstrap!');

  program
    .command('new <name>')
    .alias('-n')
    .description('Start a new project')
    .action(startProject);

  program
    .command('rename <name>')
    .alias('-r')
    .description('Renames current project')
    .action(renameProject);
    
  program.parse(process.argv);
}

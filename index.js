#! /usr/bin/env node

const program = require('commander');
const { startProject, renameProject } = require('./helpers');

program
  .version('0.1.0')
  .usage('[options] <file ...>')
  .option('-n, --new <name>', 'new project')
  .option('-r, --rename <name>', 'rename project')
  .parse(process.argv);

if(program.new){
  startProject(program.new);
}
if(program.rename){
  renameProject(program.rename);
}

const MODES = {
  CREATE: 'Create new fe react app',
  UPDATE: 'Update current fe react app',
  EXIT: 'Exit'
}
module.exports = {
  templateUrl: 'https://github.com/bychwa/react-frontend-bootstrap-app.git',
  modes: MODES,
  questions: {
    mode_question: [{
      type: 'list',
      name: 'mode',
      message: 'What do you want to do?',
      choices: [MODES.CREATE, MODES.UPDATE, MODES.EXIT]
    }],
    confirm_questions: [{
      type: 'confirm',
      name: 'looks_good',
      default: true,
      message: 'Looks good?'
    }],
    create_questions: [{
        type: 'input',
        name: 'app_name',
        message: 'App name:'
      },
      {
        type: 'confirm',
        name: 'use_typescript',
        default: true,
        message: 'Use Typescript?'
      },
      {
        type: 'confirm',
        name: 'use_webpack',
        default: true,
        message: 'Use webpack?'
      },
      {
        type: 'confirm',
        name: 'use_redux_observable',
        default: true,
        message: 'Use Redux Observable?'
      },
      {
        type: 'list',
        name: 'streaming_lib',
        default: true,
        message: 'Streaming lib?',
        choices: ['mostjs', 'rxjs', 'highland']
      }
    ]
  }
}
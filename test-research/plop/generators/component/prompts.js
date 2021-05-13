// eslint-disable-next-line @typescript-eslint/no-var-requires
const requireField = require('../common');

module.exports = [
  {
    type: 'input',
    name: 'name',
    message: 'What is your component name?',
    validate: requireField('name'),
  },
  {
    type: 'input',
    name: 'folder',
    message: 'What should be the folder/package inside components folder?',
    validate: requireField('folder'),
  },
];

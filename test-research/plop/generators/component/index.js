const generator = {
  description: 'Create a reusable component',
  prompts: [...require('./prompts')],
  actions: [...require('./actions')],
};

module.exports = generator;

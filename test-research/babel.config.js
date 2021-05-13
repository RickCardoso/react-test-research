module.exports = {
  env: {
    development: {
      presets: ['next/babel'],
    },
    production: {
      presets: ['next/babel'],
      sourceMaps: true,
    },
    test: {
      presets: [['next/babel', { 'preset-env': { modules: 'commonjs' } }]],
    },
  },
};

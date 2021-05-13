module.exports = [
  {
    type: 'add',
    path:
      'src/components/{{pascalCase folder}}/{{pascalCase name}}/{{pascalCase name}}.component.tsx',
    templateFile: 'plop/templates/Component/Component.tsx.hbs',
  },
  {
    type: 'add',
    path: 'src/components/{{pascalCase folder}}/{{pascalCase name}}/{{pascalCase name}}.styles.tsx',
    templateFile: 'plop/templates/Component/Component.styles.hbs',
  },
  {
    type: 'add',
    path: 'src/components/{{pascalCase folder}}/{{pascalCase name}}/{{pascalCase name}}.spec.tsx',
    templateFile: 'plop/templates/Component/Component.spec.tsx.hbs',
  },
  {
    type: 'add',
    path: 'src/components/{{pascalCase folder}}/{{pascalCase name}}/index.ts',
    templateFile: 'plop/templates/Component/index.ts.hbs',
  },
];

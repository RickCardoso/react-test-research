import { configureAxe, defaultAxeRunConfig } from '../support/helpers';

context('Home Page', () => {
  beforeEach(() => {
    cy.visit('/');
    configureAxe();
  });

  it('should find no detectable a11y violations', () => {
    cy.checkA11y(null, defaultAxeRunConfig);
  });
});

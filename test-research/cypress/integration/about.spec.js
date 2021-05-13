import { configureAxe, defaultAxeRunConfig } from '../support/helpers';

context('About Page', () => {
  beforeEach(() => {
    cy.visit('/about');
    configureAxe();
  });

  it('should find no detectable a11y violations', () => {
    cy.checkA11y(null, defaultAxeRunConfig);
  });
});

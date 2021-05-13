import { configureAxe, defaultAxeRunConfig } from '../support/helpers';

context('Contact Page', () => {
  beforeEach(() => {
    cy.visit('/contact');
    configureAxe();
  });

  it('should find no detectable a11y violations', () => {
    cy.checkA11y(null, {
      ...defaultAxeRunConfig,
      rules: {
        // Our primary buttons are unfortunately not accessible on their current design :-(
        'color-contrast': { enabled: false },
      },
    });
  });

  it('Label "Email" should exist', () => {
    cy.get('label').contains('Email').should('exist');
  });
});

export const configureAxe = () => {
  cy.injectAxe();
  cy.configureAxe({
    // Default axe.config API configurations
    rules: [
      {
        id: 'document-title',
        enabled: false,
      },
    ],
  });
};

export const defaultAxeRunConfig = {
  // Default axe.run API configurations
  includedImpacts: ['critical', 'serious'],
};

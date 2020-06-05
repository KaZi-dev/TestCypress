describe('The Home Page', () => {
  it('should vistit the page', () => {
    cy.visit('/')
  });
  it('should click the button', () => {
    cy.get('[name="btnFirst"]').click()
  });
  it('should enter name and address', () => {
    cy.get('[name="nameT"]').type('Test');
  });
  it('Commit button should not be clickable', () => {
    assert(cy.get('[name="btnTransmit"]').should('be.disabled'));
  });
  it('should enter name and address', () => {
    cy.get('[name="nameT"]').clear()
    cy.get('[name="nameT"]').type('Testerino');
    cy.get('[name="addressT"]').type('Wunderland 34');
  });
  it('should select a gender', () => {
    cy.get('[value="male"]').click()
  });
  it('should display the data', () => {
    cy.get('.paraData').should('contain.text', 'Testerino')
    cy.get('.paraData').should('contain.text', 'Wunderland 34')
  })
  it('should click the data submit button', () => {
    cy.get('[name="btnTransmit"]').click()
  });

})

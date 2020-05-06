describe('The Home Page', () => {
  it('should vistit the page', () => {
    cy.visit('/')
  });
  it('should click the button', () => {
    cy.get('[name="btnFirst"]').click()
  });
  it('should enter name and address', () => {
    cy.get('[name="nameT"]').type('Testerino');
    cy.get('[name="addressT"]').type('Wunderland 34');;
  });

  it('should display the data', () => {
    cy.get('.paraData').should('have.text', 'Testerino , Wunderland 34')
  })
  it('should click the data submit button', () => {
    cy.get('[name="btnTransmit"]').click()
    cy.get('[name="btnTransmit"]').click()
    cy.get('[name="btnFirst"]').click()
    cy.get('[name="btnFirst"]').click()
    cy.get('[name="btnFirst"]').click()
  });

})

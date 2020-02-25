describe('Vetty CMS Test', function() {
    it('Visits the stage client url', function() {
      cy.viewport(1600,1200)
      cy.visit('https://stgclient.vetty.co')
      cy.get('#email').type('farha.client+10@gmail.com')
      cy.get('#ssn').type('1234567')
      cy.get('.login-button-container > .form-control').click()
      cy.wait(10000)
      cy.get('div[class="client-nav-item-btn"]').click()
      cy.wait(4000)
      cy.get('app-account-dropdown > .dropdown > #dropdownBasic1 > div')
      cy.get('cy.get('.dropdown-menu > :nth-child(2)')').click()

    });
   
});
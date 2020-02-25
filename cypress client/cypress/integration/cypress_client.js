describe('Vetty CMS Test', function() {
    it('Visits the stage client url', function() {
      cy.viewport(1600,1200)
      cy.visit('https://stgclient.vetty.co')
      cy.get('#email').type('farha.client+10@gmail.com')
      cy.get('#ssn').type('1234567')
      cy.get('.form-control').click()
      cy.wait(6000)
      
    });
   
});
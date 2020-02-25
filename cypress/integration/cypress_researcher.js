describe('Vetty CMS Test', function() {
    it('Visits the stage applicant url', function() {
      cy.viewport(1600,1200)
      cy.visit('https://stgresearcher.vetty.co')
      cy.get('#email').type('staging_res@mail.com')
      cy.get('#ssn').type('123456')
      cy.get('.login-button-container > .form-control').click()
      cy.wait(25000)
      cy.get('.row > .btn').click()
      cy.wait(25000)
      cy.get('.Rectangle-34 > div').click()
      cy.wait(25000)
      cy.get('.deleteUserBtnWrap > .row > div > .btn')
      cy.wait(25000)
      cy.get(':nth-child(2) > .deleteUserBtnWrap > .btn')
      cy.wait(20000)
      cy.get('.logout > span').click()

    })
});
describe('Vetty CMS Test', function() {
    it('Visits the stage applicant url', function() {
      cy.viewport(1600,1200)
      cy.visit('https://stgapplicant.vetty.co')
      cy.get('#email').type('dezellemise-8043@yopmail.com')
      cy.get('#ssn').type('123456')
      cy.get('.form-control').click()
      cy.wait(20000)
      cy.get('#middleNameCheck').click()
      cy.get('input[formcontrolname="formeeeeDateeeeee"]').type('01/01/1990')
      cy.get('input[formcontrolname="ssn"]').clear().type('266962852')
      cy.get('input[formcontrolname="street"]').type('bell')
      cy.get('input[name="zip"]').type('90201')
      cy.get('input[formcontrolname="phone"]').clear().type('(941)743-1350')
      cy.get('div[class="form-label noSelected"]').click()
      cy.get('.white-btn').click()
      cy.wait(8000)
      cy.get('input').click()
      cy.get('.btnDefault').click()
      cy.wait(8000)
      cy.get('input').click()
      cy.get('.btnDefault').click()
      cy.wait(8000)
      cy.get('canvas').click();
      cy.get('canvas').click(100, 100);
      cy.get('canvas').click(100, 99);
      cy.get('canvas').click(100, 98);
      cy.get('canvas').click(100, 97);
      cy.get('canvas').click(100, 96);
      cy.get('canvas').click(100, 95);
      cy.get('canvas').click(100, 96);
      cy.get('#printedName').type('shroth')
      cy.get('.discloser > input').click()
      cy.get('.btnDefault').click()
      cy.wait(20000)
      cy.get('.btnReview').click()
      cy.wait(10000)
      cy.get('.vpNavWrap > :nth-child(4)').click()
   
  });
   
  });
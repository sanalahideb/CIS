describe("BWO", () => {

    
  
  
  
      it(' aller sur le site', () => {
          cy.visit('https://staging.birds-worker.com/');
  
      });
  
  
     
  
      it(' connexion ', () => {
        cy.get('[onclick="location.href=\'/login\'"]').click();
        cy.get('.email').type('bwo@yopmail.com');
        cy.get('.password').type('12345Ab');
        cy.get('.button-primary').click();

    });


    it('deconnexion ', () => {
        cy.get('.name').trigger('mouseover')
        cy.contains('Se déconnecter').click({ force: true });



    });
      
    it('recherche visiteur',()=>{

        cy.visit('https://staging.birds-worker.com/');
        cy.get('.fake-search').click();
        cy.wait(3000);
        cy.get('.search').type('graphiste');
        cy.wait(3000);
        cy.get('.button:nth-child(3)').click();
        cy.url().should('contains', 'https://staging.birds-worker.com/browse/q/graphiste/l/Paris/48.856614,2.352221');
        cy.get('.browse-results-consultant:nth-child(5) .price').click();
        cy.get('.profile-popup-suggest-a-mission').click();
        
        





    })


  
  
  
  
})
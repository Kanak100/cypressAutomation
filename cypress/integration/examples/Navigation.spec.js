///  <reference types="cypress" />

    describe('MyTestSuite', () => 
{
    it(' Navigation back or forward', () => 
    {
        //visit URL
    cy.visit("https://www.nopcommerce.com/en")
    //Verify the title of page(HOme page)
    cy.title().should('eq','Free and open-source eCommerce platform. ASP.NET based shopping cart. - nopCommerce') 
        //
        cy.get(".userlink").click()//click on icon
        cy.get(".ico-register").contains('Regis').click()//Choose register option and click
        cy.title().should('eq','Register - nopCommerce')//Verifying REgistration page

        cy.go('back')//If we want to go back on homepage
        //Verifying the title of homepage
        cy.title().should('eq','Free and open-source eCommerce platform. ASP.NET based shopping cart. - nopCommerce') 

        cy.go('forward')//If we want to go foward again
        cy.title().should('eq','Register - nopCommerce')//Verifying REgistration page titlw

        cy.go(-1)//go back
        cy.title().should('eq','Free and open-source eCommerce platform. ASP.NET based shopping cart. - nopCommerce')

        cy.go(1)//go foward
        cy.title().should('eq','Register - nopCommerce')//Verifying REgistration page titlw







    })
})
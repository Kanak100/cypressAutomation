///  <reference types="cypress" />

describe('Locating Elements',function()
{
    it('Verify type of locators',function()
    {
        cy.visit("https://demo.nopcommerce.com/")                             //open the url
        cy.get("#small-searchterms").type("Apple MacBook Pro 13-inch")        //type what you want(Search box)
        cy.get("[type='submit']").click()                                         //click on search button 
        cy.get(".product-box-add-to-cart-button").click()               //Edit quantity
        cy.get("#product_enteredQuantity_4").clear().type('4')  
        cy.get("#add-to-cart-button-4").click()                //Click on add to cart button after providing quantity
        cy.wait(5000)                                             //wait 5 seconds
        cy.get("#topcartlink > a > span.cart-label").click()   //Shopping cart         
        cy.wait(8000)
        cy.get(".product-unit-price").contains("$1,800.00")         //validation point
    }
    )
}
)
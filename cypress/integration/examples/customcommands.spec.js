describe('MyTestSuite', () => 
{
//Custom commands uses for this purpose that we can use code again and again
   
    
    it('Login Test', () => 
    {
        cy.login('8448213056','kunal@4321')  //valid
        cy.title().should('be.equal','Online Shopping Site for Mobiles, Electronics, Furniture, Grocery, Lifestyle, Books & More. Best Offers!')

        cy.login('8448213056','kunal@43211') //invalid data
        cy.title().should('be.equal','Online Shopping Site for Mobiles, Electronics, Furniture, Grocery, Lifestyle, Books & More. Best Offers!')

        cy.login('84482130564','kunal@43211') //invalid data
        cy.title().should('be.equal','Online Shopping Site for Mobiles, Electronics, Furniture, Grocery, Lifestyle, Books & More. Best Offers!')

        //Unfortunately we have same title for invalid data and valid data but 
        //some sites have different title after login the page then that and this case perform in same way
    })


    it('Add customer', () => 
    {
        cy.login('8448213056','kunal@4321')
        cy.log("Adding customer.........")
    })
    it('Edit customer', () => 
    {
        cy.login('8448213056','kunal@4321')
        cy.log("Editing customer.........")
    })
})
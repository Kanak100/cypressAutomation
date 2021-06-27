
import LoginPage from '../PageObjects/LoginPage'

describe('MyTestSuite', () => 
{
    
    it('Valid Login Test', () => 
    {
        const lp=new LoginPage()
        lp.visit()
        lp.fillEmail("8448213056")
        lp.fillPassword("kunal@4321")
        lp.submit()
        cy.title().should('be.equal','Online Shopping Site for Mobiles, Electronics, Furniture, Grocery, Lifestyle, Books & More. Best Offers!')
    })
})
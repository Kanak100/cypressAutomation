describe('MyTestSuite', () => 
{
    it('Alert message checkk ', () => 
    {
        /*cy.visit("https://mail.rediff.com/cgi-bin/login.cgi")
        cy.get("input[type=submit]").click() 

        cy.on("window:alert",(str)=>
        {
                expect(str).to.equal("Please enter a valid user name")
        }
        )*/

        cy.visit("http://testautomationpractice.blogspot.com/")
        cy.get("#HTML9 > div.widget-content > button").click() 
        cy.on("window:confirm",(str)=>
        {
                expect(str).to.equal("Press a button!")
        }
        )//Go to catalog events for more events


    })
})
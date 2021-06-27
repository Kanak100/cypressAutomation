///  <reference types="cypress" />

describe('UI Elements',function()
{
    it('Verify Input Buttons,Drop down and UI elements',function()
    {
        cy.visit("http://demo.automationtesting.in/Register.html")   //Visit URL
        cy.url().should('include','demo')    //Verify URL should include demo

        cy.get("#basicBootstrapForm > div:nth-child(1) > div:nth-child(2) > input").should('be.visible')
        .should('be.enabled').type('Kanak')//Type the fname

        cy.get("#basicBootstrapForm > div:nth-child(1) > div:nth-child(3) > input").should('be.visible')
        .should('be.enabled').type('Singh')//Type the lname

        cy.get("#basicBootstrapForm > div:nth-child(2) > div > textarea").should('be.visible')
        .should('be.enabled').type('Flat 1201,Tower B4,Jaypee Klassic, Sector 134,Noida')//Type the address

        cy.get("#eid > input").should('be.visible')
        .should('be.enabled').type('kanak.singh739@gmail.com')//Type the email address

        cy.get("#basicBootstrapForm > div:nth-child(4) > div > input").should('be.visible')
        .should('be.enabled').type('8448213056')//Type the Mobile Number

        //Radio buttons
        cy.get("#basicBootstrapForm > div:nth-child(5) > div > label:nth-child(1)").should('be.visible')
        .should('be.not.checked').click()
        cy.get("#basicBootstrapForm > div:nth-child(5) > div > label:nth-child(2)").should('be.visible')
        .should('be.not.checked')
        
        //First check condition is used to check(mark the tick) to check box and 2nd (be.checked) used for validation
        cy.get('#checkbox1').check().should('be.checked').and('have.value','Cricket') 
        cy.get('#checkbox2').check().should('be.checked').and('have.value','Movies')
        cy.get('#checkbox3').check().should('be.checked').and('have.value','Hockey')

        //Then you can uncheck all the  checkbox and to make sure it should be unchecked....
        cy.get('#checkbox1').uncheck().should('not.be.checked')
        cy.get('#checkbox2').uncheck().should('not.be.checked')
        cy.get('#checkbox3').uncheck().should('not.be.checked')

        //If you want to check in a single line()
        cy.get('input[type=checkbox]').check(['Cricket','Hockey'])

        cy.get("#eid > input").should('be.visible')
        .should('be.enabled').type('kanak.singh739@gmail.com')
    }
    )

    it('Drop down ',function()
    {
        cy.get("#Skills").select('Android').should('have.value','Android')//Select androi->validate

    }
    )
 
    it('Drop down country ',function()
    {
        cy.get("#countries").select('India').should('have.value','India')//Select androi->validate

    }
    )
    
    it('Drop down Multiselect ',function()
    {
        cy.get("#msdd").click()
        cy.get(".ui-corner-all").contains('English').click()  //Here ul-corner-all is a common locator in li tag->anchor tag
        cy.get(".ui-corner-all").contains('Bulgarian').click()

    }
    )

    it('Select countries ',function()
    {
        cy.get("[role=combobox]").click({force:true})
        cy.get(".select2-search__field").type('Ind')  
        cy.get(".select2-search__field").type('{enter}') 

      

    }
    )

    it('Drop D.O.B ',function()
    {
        cy.get("#yearbox").select('1998').should('have.value','1998')
        cy.get("#basicBootstrapForm > div:nth-child(11) > div:nth-child(3) > select").select('May').should('have.value','May')
        cy.get("#daybox").select('10').should('have.value','10')

        

    }
    )

}
)
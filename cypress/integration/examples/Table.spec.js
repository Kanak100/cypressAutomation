///  <reference types="cypress" />

describe('MyTestSuite', () => 
{
    it(' Table TEst', () => 
    {
       
        cy.visit("http://testautomationpractice.blogspot.com/")

        //Q1Check value presence anywhere in the table//table name check then go to td tag where Learn selenium is 
        //written and it should be visible in table->td->Learn Selenium->Visible on UI
        cy.get('Table[name=BookTable]').contains('td','Learn Selenium').should('be.visible')

        //Q2CHeck value present in a specific row and column
        cy.get('#HTML1 > div.widget-content > table > tbody > tr:nth-child(2) > td:nth-child(3)').contains('Selenium')
        .should('be.visible')

        //Check value present based on some condition
        //Check the book name 'Master in Java' whose author is Amod
        cy.get('table[name=BookTable]>tbody>tr td:nth-child(2)').each(($e,index,$list)=>{
//this query will run until we got the AMod
            const text = $e.text()
            if(text.includes("Amod"))
            {
                cy.get("table[name=BookTable]>tbody>tr td:nth-child(1)").eq(index).then(function(bname)
                {//index is representing the row
                    const bookName= bname.text()
                    expect(bookName).to.equal("Master In Java")

                })
            }
        })



    })
})
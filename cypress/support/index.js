Cypress.Commands.add("login",(email,password)=> {
    cy.visit("https://www.flipkart.com/")
        cy.get("._1_3w1N").click()
        cy.get("body > div._2Sn47c > div > div > div > div > div._36HLxm.col.col-3-5 > div > form > div:nth-child(1) > input").type(email)
        cy.get("input[type=password]").type(password)
        cy.get("body > div._2Sn47c > div > div > div > div > div._36HLxm.col.col-3-5 > div > form > div._1D1L_j > button").click()
        
})
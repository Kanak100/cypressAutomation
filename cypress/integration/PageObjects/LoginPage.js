class LoginPage
{
        visit()
            {
        cy.visit("https://www.flipkart.com/")  
        cy.get("._1_3w1N").click()
        }

        fillEmail(value)
        {
            const field=cy.get("body > div._2Sn47c > div > div > div > div > div._36HLxm.col.col-3-5 > div > form > div:nth-child(1) > input")
            field.clear()
            field.type(value)
            return this
        }

        fillPassword(value)
        {
            const field=cy.get("input[type=password]")
            field.clear()
            field.type(value)
            return this
        }

        submit()
        {
            const button2=cy.get("body > div._2Sn47c > div > div > div > div > div._36HLxm.col.col-3-5 > div > form > div._1D1L_j > button")
            button2.click()    
        }
    }
    export default LoginPage
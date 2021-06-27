describe('MyTestSuite', () => 
{

    before(() => {
    cy.fixture('1').then(function(data){
            this.data=data  //this keyword accessible outside the block also
    })   
   
      })
    
    it('Fixture Demo Test', () => 
    {

    cy.visit("https://www.flipkart.com/")
    cy.get("._1_3w1N").click()
    cy.get("body > div._2Sn47c > div > div > div > div > div._36HLxm.col.col-3-5 > div > form > div:nth-child(1) > input").type(this.data.email)
    cy.get("input[type=password]").type(this.data.password)
    cy.get("body > div._2Sn47c > div > div > div > div > div._36HLxm.col.col-3-5 > div > form > div._1D1L_j > button").click()

    })
})
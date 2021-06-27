describe('MyTestSuite', () => 
{
      before(() => {
        // runs once before all tests in the block
        cy.log("********Setup********* ")
      })
    
      beforeEach(() => {
           // runs before each test in the block
        cy.log("*******This is Login block********* ")
      })
    
      afterEach(() => {
        // runs after each test in the block
        cy.log("*******This is Logout block********* ")
      })
    
      after(() => {
        // runs once after all tests in the block
        cy.log("*******This is tear down block********* ")
      })

    it('Searching', () => 
    {
    cy.log("*******This is searching Test*******")
    })

    it('Advance Searching', () => 
    {
    cy.log("*******This is Advanced searching Test*******")
    })

    it('listing products', () => 
    {
    cy.log("*******This is listing products Test*******")
    })
})
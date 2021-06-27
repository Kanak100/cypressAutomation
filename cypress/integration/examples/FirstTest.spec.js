describe('MyTestSuite', () => 
{
    it('Verify Title of the Page Positive', () => 
    {
    cy.visit('https://www.google.com/')
    cy.title().should('eq','Google') 
    })

    it('Verify Title of the Page Positive', () => 
    {
    cy.visit('https://www.sololearn.com/learning')
    cy.title().should('eq','Courses | SoloLearn') 
    })

    it('Verify Title of the Page Negative', () => 
    {
    cy.visit('https://www.sololearn.com/learning')
    cy.title().should('eq','Coursess | SoloLearn') 
    })
})
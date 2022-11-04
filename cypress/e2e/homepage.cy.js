import stories from '../fixtures/stories.json'

describe('Homepage', () => {
    beforeEach(() => {
        cy.intercept(`https://api.nytimes.com/svc/topstories/v2/home.json?api-key=4avDpdFXu1EGb9etx6oEDvv1on0qxTMm`, stories)
        cy.visit('http://localhost:3000/')
    })

    it('Should render all the correct elements', () => {
        cy.get('.newstonTitle').contains('Newston')
        cy.get('.options').should("exist")
    })

    it('Should render correct amount of titles(based on fixture)', () => {
        cy.get('.storiesTitle').should('have.length', 35)
    })

    it('Should render different stories for each topic', () => {
        cy.get('.storiesTitle').first().contains("Voters Have Expanded Medicaid in 6 States. Is South Dakota Next?")
        cy.get('.storiesTitle').last().contains("ton trades")
    })

    it('Should be able to click a title and go to details page', () => {
        cy.get('.storiesTitle').last().click()
        cy.url('http://localhost:3000/story/Few%20Wordle%20Players%20Use%20Consistent%20Starting%20Words,%20but%20When%20They%20Do,%20It%E2%80%99s%20ADIEU')
        cy.contains('h2', 'ton trades')
        cy.get('.options').should("not.exist")
        cy.get('img').should('exist')
        cy.get('h3').should('exist')
        cy.contains('a', 'THE NEW YORK TIMES STORY')
    })

    it('Should be able to click a title and go to details page, and come back to home', () => {
        cy.get('.storiesTitle').last().click()
        cy.url('http://localhost:3000/story/Few%20Wordle%20Players%20Use%20Consistent%20Starting%20Words,%20but%20When%20They%20Do,%20It%E2%80%99s%20ADIEU')
        cy.contains('h2', 'ton trades')
        cy.get('.options').should("not.exist")
        cy.get('.newstonTitle').click()
        cy.get('.newstonTitle').contains('Newston')
        cy.get('.options').should("exist")
    })

    it('Should render an error message if user visits invalid URL', () => {
        cy.visit('http://localhost:3000/example')
            .contains('This Path Does Not Exist!')
    })

})


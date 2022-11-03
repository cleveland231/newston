describe('Homepage', () => {
    beforeEach(() => {
        cy.visit('http://localhost:3000/')
    })

    it('Should render all the correct elements', () => {
        cy.get('.newstonTitle').contains('Newston')
    })

    it('Should render an error message if user visits invalid URL', () => {
        cy.visit('http://localhost:3000/example')
          .contains('This Path Does Not Exist!')
      })

})
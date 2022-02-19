describe('check if it visits local', () => {
    it('and finds the text "Hacker Escape Room"', () => {
        cy.visit('http://127.0.0.1:5502/index.html')
        cy.contains('Hacker Escape Room')
    })
})

describe('click "Go to all chanllenges"', () => {
    it('and check the url contains "secondPage.html"', () => {
        cy.visit('http://127.0.0.1:5502/index.html')
        cy.contains('Go to all challenges').click()
        cy.url().should('include', '/secondPage.html')
    })
})

describe('Visit ESC github page of my repo"', () => {
    it('Check if booking buttons are not disabled in all challenges"', () => {
        cy.visit('https://kaulfield23.github.io/Grupp-3/')
        cy.contains('Go to all challenges').click()
        cy.get('.challenge-cta').should('not.be.disabled')
    })
})

describe('Visit ESC github page of my repo"', () => {
    it('Check if navbar is visible"', () => {
        cy.visit('https://kaulfield23.github.io/Grupp-3/')
        cy.get('nav').should('be.visible')
    })
})
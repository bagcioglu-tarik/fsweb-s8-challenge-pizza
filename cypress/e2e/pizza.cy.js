describe('pizza sayfası e2e testleri', () => {
  beforeEach(() => {
    cy.visit('http://localhost:5173/')
    cy.contains('ACIKTIM').click()
  })

  it('inputa bir metin giren test', () => {
    cy.get('[data-cy="client-name"] input').type('Tarık')
    cy.get('[data-cy="client-name"] input').should('have.value', 'Tarık')

    cy.get('[data-cy="note"] textarea').type('Not ekledim')
    cy.get('[data-cy="note"] textarea').should('have.value', 'Not ekledim') 
  })

  it('birden fazla malzeme seçen test', () => {
    cy.get('[data-cy="additional-ingredients"] input[type="checkbox"]').check(['pepperoni', 'tavuk izgara', 'mısır', 'roka'])
    cy.get('[data-cy="additional-ingredients"] input[type="checkbox"]').should('be.checked')
  })

  it('formu gonderen bir test', () => {
    cy.get('[data-cy="size"] input[value="küçük"]').click()
    cy.get('[data-cy="dough"] select').select('Standart')
    cy.get('[data-cy="additional-ingredients"] input[type="checkbox"]').check(['pepperoni', 'sosis', 'sucuk', 'roka', 'mısır'])
    cy.get('[data-cy="client-name"] input').type('Tarık')

    cy.get('[data-cy="submit-button"]').click()
    cy.contains('TEBRİKLER! SİPARİŞİNİZ ALINDI!').should('be.visible')
  })
})
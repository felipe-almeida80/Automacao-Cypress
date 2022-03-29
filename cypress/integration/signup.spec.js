import signup from '../pages/SignupPage'

describe('Cadastro', () => {

    beforeEach(function () {
        cy.fixture('myaccount').then((ma) => {
            this.myaccount = ma
        })
    })

    it('Logar na área do cliente', function () {

        signup.go()
        signup.fillForm(this.myaccount.signup)
        signup.logout()

    })

    it('Alterar os dados pessoais', function () {

        signup.go()
        signup.fillForm(this.myaccount.signup)
        signup.editData(this.myaccount.profile)
        signup.submit()
        signup.alertMessageShouldBe('Your information was successfully saved.')
        signup.logout()

    })

    it('Alterar os dados pessoais c/ o campo de telefone inválido', function () {

        signup.go()
        signup.fillForm(this.myaccount.signup)
        signup.editInvalidData(this.myaccount.profile)

        cy.get('[type="submit"] .vtex-button__label').click()
        cy.get('.red ').should('have.text', 'Invalid value.')

    })

    it('Acessar os dados de endereço', function () {

        signup.go()
        signup.fillForm(this.myaccount.signup)
        
        // Acessar dados de endereço
        cy.get('.vtex-login-2-x-addressesOption').click()
        
        signup.logout()

    })
})


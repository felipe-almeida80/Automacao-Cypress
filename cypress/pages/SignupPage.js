

class SignupPage {

    go() {

        cy.visit('/')
        cy.get('.vtex-login-2-x-label').click()
        cy.get('.vtex-login-2-x-optionsListItem .vtex-login-2-x-emailPasswordOptionBtn').click()
        cy.get('.vtex-login-2-x-formTitle ').should('have.text', 'Sign in with e-mail and password')

    }

    fillForm(login) {

        cy.get('.vtex-login-2-x-inputContainerEmail').type(login.email)
        cy.get('.vtex-login-2-x-inputContainerPassword').type(login.senha)
        cy.get('.vtex-login-2-x-sendButton').click()
        cy.wait(1000)
        cy.get('.vtex-login-2-x-profile').click()
        cy.get('.vtex-login-2-x-accountOptionsSectionTitle').should('have.text', 'My Account')

    }


    editData(profile) {
        
        cy.get('.vtex-login-2-x-profileOption').click()
        cy.wait(2000)
        cy.get('.justify-end .vtex-button .vtex-button__label').click()
        cy.get('.vtex-input-prefix__group [name="firstName"]').type(profile.nome)
        //cy.get('.vtex-input-prefix__group [name="lastName"]').type(profile.sobrenome)
        //cy.get('.vtex-input-prefix__group [name="homePhone"]').type(profile.telefone)
        //cy.get('.vtex-input-prefix__group [name="birthDate"]').type(profile.dataNascimento)
        cy.get('.o-0').select('Female')
    }

    editInvalidData(profile) {

        cy.get('.vtex-login-2-x-profileOption').click()
        cy.wait(2000)
        cy.get('.justify-end .vtex-button .vtex-button__label').click()
        cy.get('.vtex-input-prefix__group [name="homePhone"]').type(profile.telefone)
        cy.get('.o-0').select('Female')
    }


    submit() {

        cy.get('[type="submit"] .vtex-button__label').click()
    }

    logout() {

        cy.get('.vtex-login-2-x-profile').click()
        cy.get('.vtex-login-2-x-logoutButton ').click()
        cy.wait(1000)

    }

    modalContentShouldBe(expectedMessage) {

        cy.get('.items-start .ph5').should('have.text', expectedMessage)
    }

    alertMessageShouldBe(expectedMessage) {

        cy.get('.items-start .ph5').should('have.text', expectedMessage)
    }


}

export default new SignupPage;

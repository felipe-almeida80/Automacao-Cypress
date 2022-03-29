

class AddToCart {

    searchProduct() {

        cy.visit('/')
        cy.get('#downshift-0-input').type('work shirt')
        cy.get('.vtex-store-components-3-x-resultsItemImage').click()
        
    }

    selectCollor() {

        cy.get('.vtex-store-components-3-x-skuSelectorItem--fuchsia > .vtex-store-components-3-x-skuSelectorInternalBox > .absolute').click()  

    }

    addAndRemoveQuantity(){
        
        cy.get('.vtex-numeric-stepper__plus-button').click()
    }

    zipCodeProductPage(adress){

        cy.get('.vtex-address-form-4-x-input').type(adress.zipCode)
        cy.get('.vtex-store-components-3-x-shippingContainer > .vtex-button').click()
        
    }

    checkout(profile, signup){

        // Ir p/ o checkout
        cy.get('#proceed-to-checkout').click()
        cy.get('.srp-data > #shipping-calculate-link').click()
        cy.get('#ship-postalCode').type(profile.zipCode)
        cy.get('#cart-to-orderform').click()
        cy.get('#client-pre-email').type(signup.email)
        cy.get('#btn-client-pre-email > span').click()
        cy.get('#client-first-name').type(profile.nome)
        cy.get('#client-last-name').type(profile.sobrenome)
        cy.get('#client-phone').type(profile.telefone)
        cy.get('#go-to-shipping').click()
        cy.wait(2000) 
        cy.get('#ship-street').type(profile.adress)
        cy.get('#btn-go-to-payment').click()
        cy.get('#payment-group-bankInvoicePaymentGroup > .payment-group-item-text').click()
        cy.get('[data-bind="fadeVisible: !window.router.sac.isActive() && window.paymentData.isPaymentButtonVisible(), click: submit, disable: window.checkout.disablePaymentButton"]').click()
        
    }







}

export default new AddToCart;

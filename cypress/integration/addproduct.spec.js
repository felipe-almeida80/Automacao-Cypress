import addproduct from '../pages/AddToCart'

describe('Fluxo de compra', () => {

    beforeEach(function () {
        cy.fixture('myaccount').then((ma) => {
            this.myaccount = ma
        })
    })


    it('Pesquisar um produto abrindo a página de produto', function () {

        addproduct.searchProduct()

    })

    it('Selecionar outra cor do produto', function () {

        addproduct.searchProduct()
        addproduct.selectCollor()

    })

    it('Adicionar 2 quantidades do mesmo produto', function () {

        addproduct.searchProduct()
        addproduct.addAndRemoveQuantity()

    })

    it('Calcular o frete na página de produto', function () {

        addproduct.searchProduct()
        addproduct.zipCodeProductPage(this.myaccount.profile)

    })

    it('Adicionar o produto ao carrinho', function () {

        addproduct.searchProduct()
        addproduct.addAndRemoveQuantity()

        // Adicionar o produto no carrinho
        cy.get('.pr0 > .vtex-button > .vtex-button__label').click()

        addproduct.checkout(this.myaccount.profile , this.myaccount.signup)
        
    })



})
/// <reference types="cypress" />
import { faker } from '@faker-js/faker';

describe('product page functionality', ()=>{

    beforeEach(() =>{
        cy.visit('http://lojaebac.ebaconline.art.br/produtos/')
    });

    it('must select a product from the list',()=>{
        cy.get('[class="product-block grid"]')
        .first()
        .click()

    });


    it('must add a product to the cart',()=>{
        var quantidade = 3

        cy.get('[class="product-block grid"]')
        .first()
        .click()
        cy.get('.button-variable-item-M').click()
        cy.get('.button-variable-item-Blue').click()
        cy.get('.input-text').clear().type(quantidade)
        cy.get('.single_add_to_cart_button').click()

        cy.get('.dropdown-toggle > .mini-cart-items').should('contain', quantidade)
        cy.get('.woocommerce-message').should('contain', quantidade + ' × “Abominable Hoodie” foram adicionados no seu carrinho.')
            

    });

});
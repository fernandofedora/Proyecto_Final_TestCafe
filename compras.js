import page from './pageModel';
import { data } from './data';

fixture('Pruebas del módulo de compras')
    .page ('http://automationpractice.com');

test('Comprar un articulo, proceso completo', async t => {  
    await t
        .click(page.btnSignIn)
        .typeText(page.inputMail, data.emailAcount)
        .typeText(page.inputPass, data.passAcount)
        .click(page.btnSubmit)
    await t
        .click(page.menu1)
        .click(page.product3)
        .expect(page.textBuyProduct.innerText).contains('Model')
    await t
        .click(page.btnAddCar)
        .click(page.btnCheckout)
        .wait(500)
    await t
        
        .click(page.btnProccesCheckou)
        .wait(500)
        .click(page.btnProccesCheckou1)
        .wait(500)

        .click(page.checckboxBuy)
        .expect(page.checckboxBuy.checked).ok()
        .click(page.btnProccesCheckou2)
        .wait(500)
        .click(page.payBayBank)
        .click(page.confrimOrder)
        .expect(page.payMent.innerText).eql('Your order on My Store is complete.')
}); 

test('Comprar un articulo, sin estar logiado', async t => {

    await t
        .click(page.menu1)
        .click(page.product3)
        .expect(page.textBuyProduct.innerText).contains('Model')
    await t
        .click(page.btnAddCar)
        .click(page.btnCheckout)
        .wait(500)
    await t   
        .click(page.btnProccesCheckou)
        .wait(500)
        .expect(page.loginForm.exists).ok()
        .expect(page.createAcout.exists).ok()
    
});
test('Revisar el carrito de compras sin agregar ningún producto', async t => {  
    await t
        .click(page.cart)
        .expect(page.alertCart.innerText).eql('Your shopping cart is empty.')


});
test('Agregar un producto al carrito de compra', async t => {  
    await t
        .click(page.menu1)
        .expect(page.cart.exists).ok()
        .click(page.product3)
        .click(page.btnAddCar)
        .click(page.cart)
        .expect(page.numberProductCart.exists).ok()


});
test('Verificar el shopping-cart summary', async t => {
    await t
        .click(page.btnSignIn)
        .typeText(page.inputMail, data.emailAcount)
        .typeText(page.inputPass, data.passAcount)
        .click(page.btnSubmit)
    await t
        .click(page.menu1)
        .click(page.product3)
        .expect(page.textBuyProduct.innerText).contains('Model')
    await t
        .click(page.btnAddCar)
        .click(page.btnCheckout)
        .wait(500)
        
        //.click(page.deleteProduct)
        .expect(page.sumary0.exists).ok()
        .expect(page.sumary1.innerText).contains('Total products')
        //.expect(page.sumaryProduct.innerText).contains('Total')
        .expect(page.sumary2.innerText).contains('$16.51')
        .expect(page.sumary3.innerText).contains('Total')
        .expect(page.sumary4.innerText).contains('Tax')
        


});

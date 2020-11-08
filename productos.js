import page from './pageModel';

fixture('Pruebas del módulo de productos')
    .page ('http://automationpractice.com');

    test('Verificar que los botones de categorías populares funciones correctamente', async t => {  
        await t
        .click(page.btnBest)
        .expect(page.product1.innerText).contains('Printed Chiffon Dress')
        .expect(page.product2.innerText).contains('Blouse')

        await t
            .click(page.btnPopular)
            .expect(page.product3.innerText).contains('Faded Short Sleeve T-shirts')
            .expect(page.product4.innerText).contains('Printed Dress')
        
    });

    test('Hacer una búsqueda en la barra de búsqueda', async t => {
        await t
            .click(page.inputSearch)
            .typeText(page.inputSearch, 'dresses')
            .expect(page.inputSearch.value).eql('dresses')
            .click(page.btnSearch)

        await t
            .expect(page.resultSearch.innerText).contains('7 results have been found.')

    });

    test('Hacer una búsqueda dejando el input vacío ', async t => {
        await t
            .expect(page.inputSearch.exists).ok()
            .click(page.btnSearch)
           
        await t
            .expect(page.textAlert.innerText).eql('Please enter a search keyword')

    });

    test('Verificar que las subcategorías del menú de Women existan', async t => {
        await t
            .expect(page.submenu1.innerText).contains('Tops')
            .expect(page.submenu2.innerText).contains('T-shirts')
            .expect(page.submenu3.innerText).contains('Blouses')
        await t
            .expect(page.submenu4.innerText).contains('Dresses')
            .expect(page.submenu5.innerText).contains('Casual Dresses')
            .expect(page.submenu6.innerText).contains('Evening Dresses')
            .expect(page.submenu7.innerText).contains('Summer Dresses')

    });

    test('Seleccionar talla de un producto.', async t => {
        await t
            .click(page.menu1)
        
        await t
            .expect(page.checkbox1.exists).ok()
            .expect(page.checkbox2.exists).ok()
            .expect(page.checkbox3.exists).ok()    
        await t
            .click(page.checkbox1)
            .expect(page.checkbox1.checked).ok()
            .click(page.checkbox2)
            .expect(page.checkbox2.checked).ok()
            .click(page.checkbox3)
            .expect(page.checkbox3.checked).ok()

    });

    test('Probar el grid en la lista de producto de la categoría Dresses', async t => {
        await t
            .click(page.menuDresses)
            .click(page.list)
            .expect(page.favorite.innerText).contains('Add')
    });


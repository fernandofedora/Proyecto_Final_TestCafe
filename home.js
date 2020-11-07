import page from './pageModel';

fixture('Pruebas de modulo de home page')
    .page ('http://automationpractice.com');

    test('Acceder al home page y comparar que los elementos del menú existan.', async t => { 
        await t
            .expect(page.menu1.innerText).eql('Women');
        await t
            .expect(page.menu2.innerText).eql('Dresses');
        await t
            .expect(page.menu3.innerText).eql('T-shirts');
    });

    test('Acceder al home page y verificar que el banner de anuncios existe.', async t => { 
        await t 
            .expect(page.banner1.exists).ok();
        await t 
            .expect(page.banner2.exists).ok();
        await t
            .expect(page.banner3.exists).ok();
    });

    test('Verificar que botón de contacto esté presente en home page y funcione.', async t => { 
        await t
            .click(page.btnContac)
            .expect(page.contacForm.innerText).contains('SEND A MESSAGE')

    });

    test('Verificar que botón de contacto esté presente en home page y funcione.', async t => { 
        await t 
            .click(page.btnSignIn)
            .expect(page.singInForm.innerText).eql('Authentication')
    });

    test('Verificar que exista la información de contacto en el footer.', async t => {  
        await t
            .expect(page.footer.exists).ok();
        await t
            .expect(page.footerContac.innerText).eql('Store information');
        await t
            .expect(page.footerContacAdress.innerText).contains('Selenium');
        await t
            .expect(page.footerContacCall.innerText).eql('(347) 466-7432');
        await t
            .expect(page.footerContacEmail.innerText).eql('support@seleniumframework.com');

    });
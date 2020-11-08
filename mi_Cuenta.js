import page from './pageModel';
import { data } from './data';

fixture('Pruebas del módulo de cuenta')
    .page ('http://automationpractice.com');

/*Nota: esta prueba falla si se ejecuta en dos navegadores simultáneamente, 
los navegadores toman el mismo valor del correo electrónico que se genera aleatoriamente,
 lo cual genera un error porque ambos nevadores procesan la misma información y el mismo correo 
 para crear una dos cuentan distinta.

si la prueba se ejecuta en los dos navegadores uno después del otro, entonces no tendra problema. 
*/
 test('Crear una cuenta', async t => {
     await t
         .maximizeWindow()
        .click(page.btnSignIn)
        .typeText(page.inputNewAcount, data.emailTest)
        .click(page.btnNewAcount)

        .expect(page.email_form.value).contains(data.emailTest)
        .expect(page.email_form.hasAttribute('readonly')).notOk()

        .typeText(page.firsname_input, data.firstName)
        .typeText(page.lastname_input, data.lastName)
        .setTestSpeed(1)

        .expect(page.firstname_Address.value).contains(data.firstName)
        .expect(page.lastname_Address.value).contains(data.lastName)

        .typeText(page.password_input, data.password)
        
        .typeText(page.address, data.pbox)
        .expect(page.address.value).contains(data.pbox)

        .typeText(page.city, data.city)
        .expect(page.city.value).contains(data.city)
        
        .typeText(page.address, data.pbox)

        .click(page.smenuState)
        .click(page.optState)

        .click(page.numerSelect)
        .click(page.numerOpt)

        .click(page.monthSelect)
        .click(page.monthOpt)

        .click(page.yearSelect)
        .click(page.yearOpt)

        .typeText(page.zip, data.zip)
        .expect(page.zip.value).contains(data.zip)

        .typeText(page.phone, data.phone)
        .expect(page.phone.value).contains(data.phone)

        .click(page.btnRegister)

        await t
            .expect(page.textMyAccount.innerText).contains('Welcome to your account.')

});


test('Dejar los campos vacíos en el formulario de crear cuenta nueva', async t => {
    
    await t
        .maximizeWindow()
        .click(page.btnSignIn)
        .typeText(page.inputNewAcount, data.email)
        .click(page.btnNewAcount)
        .wait(500)

    await t
        .wait(500)
        .click(page.btnRegister)
       // .expect(page.alertFormNewAccount.exist).ok()
        .expect(page.errorTextFormNewAccount.innerText).eql('There are 8 errors')

});

test('Crear una cuenta, con un correo existen', async t => {
        await t
            .click(page.btnSignIn)
            .typeText(page.inputNewAcount, data.emailAcount)
            .expect(page.inputNewAcount.value).contains(data.emailAcount)
            .click(page.btnNewAcount)
        await t 
            .expect(page.alertNewAcount.innerText).contains('An account using this email address has already been registered. Please enter a valid password or request a new one.')
    
});



test('Acceder al login con las credenciales correctas', async t => {
    await t
        .maximizeWindow()
        .click(page.btnSignIn)
        .typeText(page.inputMail, data.emailAcount)
        .typeText(page.inputPass,data.passAcount)
        .click(page.btnSubmit)
    await t
        .expect(page.textMyAccount.innerText).contains('Welcome to your account.')
});

test('Acceder al login con las credenciales incorrectas', async t => {  
    
     await t
        .maximizeWindow()
        .click(page.btnSignIn)
        .typeText(page.inputMail, 'test@gmail.com')
        .typeText(page.inputPass, 'test1914')
        .click(page.btnSubmit)
    await t
        .expect(page.textLoginError.innerText).contains('There is 1 error')

});
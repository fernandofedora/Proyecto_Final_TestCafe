import {Selector} from 'testcafe';
    class Page{
        constructor (){

            //home
            this.menu1 = Selector('a').withText('Women'); //este selector se utliza tambien en la prueba "PRODUCT-05"
            this.menu2 = Selector('a').withText('Dresses'); // este selector tambien se utiliza en la prueba "PRODUCT-06"
            this.menu3 = Selector('a').withText('T-shirts');

            this.banner1 = Selector('#homepage-slider > div > div.bx-viewport');
            this.banner2 = Selector('#htmlcontent_top > ul > li.htmlcontent-item-1.col-xs-4 > a > img');
            this.banner3 = Selector('#htmlcontent_top > ul > li.htmlcontent-item-2.col-xs-4 > a > img');

            this.footer = Selector('#page > div.footer-container');
            this.footerContac = Selector('#block_contact_infos > div > h4');
            this.footerContacAdress = Selector('#block_contact_infos > div > ul > li:nth-child(1)');
            this.footerContacCall = Selector('#block_contact_infos > div > ul > li:nth-child(2) > span');
            this.footerContacEmail = Selector('a').withText('support@seleniumframework.com');

            this.btnContac = Selector('a').withText('Contact us');
            this.contacForm = Selector('#center_column > form > fieldset > h3');
            this.btnSignIn = Selector('a').withText('Sign in'); //este selector se utiliza tambien en la prueba "SHOPPIN-01"
            this.singInForm = Selector('#columns > div.breadcrumb.clearfix > span.navigation_page');

            //Lista de producto
            this.btnBest = Selector('#home-page-tabs > li:nth-child(2) > a');
            this.product1 = Selector('a').withText('Printed Chiffon Dress'); 
            this.product2 = Selector('a').withText('Blouse');
            
            this.btnPopular = Selector('#home-page-tabs > li:nth-child(1) > a');
            this.product3 = Selector('a').withText('Faded Short Sleeve T-shirts');// Este selector se utiliza tambien en la prueba "SHOPPIN-01"
            this.product4 = Selector('a').withText('Printed Dress');

            this.inputSearch = Selector('#search_query_top');
            this.btnSearch = Selector('#searchbox > button');
            this.resultSearch = Selector('#center_column > h1 > span.heading-counter');
            this.textAlert = Selector('#center_column > p');

            this.submenu1 = Selector('a').withText('Tops');
            this.submenu2 = Selector('a').withText('T-shirts');
            this.submenu3 = Selector('a').withText('Blouses');
            this.submenu4 = Selector('a').withText('Dresses');
            this.submenu5 = Selector('a').withText('Casual Dresses');
            this.submenu6 = Selector('a').withText('Evening Dresses');
            this.submenu7 = Selector('a').withText('Summer Dresses');

            this.checkbox1 = Selector('#layered_id_attribute_group_1');
            this.checkbox2 = Selector('#layered_id_attribute_group_3');
            this.checkbox3 = Selector('#layered_id_attribute_group_2');

            this.list = Selector('#list > a > i');
            //this.textList = Selector('#center_column > ul > li.ajax_block_product.first-in-line.first-item-of-tablet-line.first-item-of-mobile-line.col-xs-12 > div > div > div.center-block.col-xs-4.col-xs-7.col-md-4 > p');
            this.favorite = Selector('a').withText('Add to Wishlist')
            //this.carProduct = Selector('#center_column > ul > li.ajax_block_product.first-in-line.first-item-of-tablet-line.first-item-of-mobile-line.col-xs-12 > div > div > div.right-block.col-xs-4.col-xs-12.col-md-4 > div > div.button-container.col-xs-7.col-md-12 > a.button.ajax_add_to_cart_button.btn.btn-default > span')
            this.productName = Selector('a').withText('Printed Dress');
            this.listProduct = Selector('//div[@class="product-count"]');
            this.menuDresses = Selector ('#block_top_menu > ul > li:nth-child(2) > a');

            //compras
            this.inputMail = Selector('#email');
            this.inputPass =  Selector('#passwd');
            this.btnSubmit = Selector('#SubmitLogin');
            //this.buyProduct = Selector('#center_column > ul > li:nth-child(1) > div > div.left-block > div > a.product_img_link > img')
            //this.buyProduct = Selector('#center_column > ul > li:nth-child(1) > div > div.left-block > div > a.product_img_link')
            this.textBuyProduct = Selector('#product_reference > label');
            this.btnAddCar = Selector('#add_to_cart > button');
            this.btnCheckout = Selector('a').withText('Proceed to checkout');
            this.btnProccesCheckou = Selector('#center_column > p.cart_navigation.clearfix > a.button.btn.btn-default.standard-checkout.button-medium');
            this.btnProccesCheckou1 = Selector('#center_column > form > p > button');
            this.btnProccesCheckou2 = Selector('#form > p > button')
          //  this.btnProccesCheckou3 = Selector('#form > p > button')
            this.checckboxBuy = Selector('#cgv');
            this.payBayBank = Selector('#HOOK_PAYMENT > div:nth-child(1) > div > p > a')
            this.confrimOrder = Selector('#cart_navigation > button')
            this.payMent = Selector('#center_column > div > p > strong')
            this.loginForm = Selector('#login_form')
            this.createAcout = Selector('#create-account_form')
            this.cart = Selector('#header > div:nth-child(3) > div > div > div:nth-child(3) > div > a')
            this.alertCart = Selector('#center_column > p')
            //this.btnAddCart = Selector('#homefeatured > li.ajax_block_product.col-xs-12.col-sm-4.col-md-3.first-in-line.first-item-of-tablet-line.first-item-of-mobile-line > div > div.right-block > div.button-container > a.button.ajax_add_to_cart_button.btn.btn-default')
            this.btnAddCar = Selector('#add_to_cart > button')
            this.numberProductCart = Selector('#header > div:nth-child(3) > div > div > div:nth-child(3) > div > div > div > div > dl > dt')
            //this.deleteProduct = Selector('#\31 _1_0_0 > i')
            this.sumary1 = Selector('#cart_summary > tfoot > tr:nth-child(1) > td.text-right')
            this.sumary2 = Selector('#total_product')
            this.sumary3 = Selector('#cart_summary > tfoot > tr:nth-child(5) > td.text-right')
            this.sumary4 = Selector('#cart_summary > tfoot > tr.cart_total_tax > td.text-right')
            this.sumary5 = Selector('#cart_summary > tfoot > tr:nth-child(7) > td.total_price_container.text-right > span')

            





        }
    }
export default new Page ();
/// <reference types ="cypress"/>
import { LoginPage } from "../../support/pages/loginPage";
import { HomePage } from "../../support/pages/homePage";
import { HeaderPage } from "../../support/pages/headerPage";



describe("API",()=>{
    let data;
    const loginPage= new LoginPage();
    const homePage = new HomePage();
    const headerPage =new HeaderPage();
    const baseUrl= 'https://pushing-it.onrender.com'
    const token ="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpYXQiOjE3MDIwODAwODZ9.H0y3lCc--lEmV9o8LoNTeGEwQBUi57kAfrQLWMK7hF4"
  ///  beforeEach(() => {
      ///  cy.visit('')
     ///   cy.get('#registertoggle').dblclick();
       /// loginPage.escribirUsuario(Cypress.env().usuario)
       /// loginPage.escribirContraseña(Cypress.env().password)
       /// loginPage.clickLogIn();
       /// headerPage.getUsername(Cypress.env().usuario)

///    });

    it('GET Method',()=>{
        cy.request({
          url:  `${baseUrl}/api/products`,
          headers:{
            "autorization": `Bearer${token}`
          },
          qs:{
            'page':2,
            'limit':4
          }
        }).then(respuesta =>{
            expect(respuesta.body.products.docs).to.have.lengthOf(4)
            expect(respuesta.status).to.be.equal(200)
            expect(respuesta.body.products.docs[0].name).to.be.equal('Buzo Azul')
        })
    })
    it('POST Method',()=>{
        cy.request({
          url:  `${baseUrl}/api/products`,
          headers:{
            "autorization": `Bearer${token}`
          },
          qs:{
            'page':2,
            'limit':4
          }
        }).then(respuesta =>{
            expect(respuesta.body.products.docs).to.have.lengthOf(4)
            expect(respuesta.status).to.be.equal(200)
            expect(respuesta.body.products.docs[0].name).to.be.equal('Buzo Azul')
        })
    })
 


})
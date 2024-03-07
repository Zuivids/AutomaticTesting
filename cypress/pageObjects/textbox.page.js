import { BasePage } from "./base.page";

export class TextBoxPage extends BasePage{
    //
    // static visit(){
    //     return cy.visit("/text-box");
    // }

    static get url(){
        return "/text-box";
    }

    static get userNameField() {
       return cy.get("input[id='userName']");
    }

    static get userEmailField() {
        return cy.get("input[id='userEmail']");
     }

    static get userCurrentAdress() {
        return cy.get("textarea[id='currentAddress']");
    }
    
    static get userPermanentAdress() {
        return cy.get("textarea[id='permanentAddress']");
    }

    static get submitButton () {
        return cy.get("button[id='submit']");
    }

    static get outPutFieldName() {
        return cy.get("#output #name");
    }
    
    static get outPutFieldEmail() {
        return cy.get("#output #email")
    }

    static get outPutFieldCurrentAdress() {
        return cy.get("#output #currentAddress")
    }
    
    static get outPutFieldPermanentAdress() {
        return  cy.get("#output #permanentAddress")
    }

    
}
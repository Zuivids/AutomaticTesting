import { BasePage } from "./base.page";

export class RadioButtons extends BasePage {

    // static visit() {
    //     return cy.visit("/radio-button");
    // }
    
    static get url(){
        return "/radio-button";
    }

    static get yesButton(){
        return cy.get("[for='yesRadio']");
    }

    static get impressiveButton(){
        return cy.get("label[for='impressiveRadio']");
    }

    static get noButton(){
        return cy.get("#noRadio");
    }

    static get outputText(){
        return cy.get("p.mt-3");
    }
    
    static get result() {
        return cy.get(".text-success");
    }
}
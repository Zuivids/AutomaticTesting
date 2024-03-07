import { BasePage } from "./base.page";

export class CheckboxPage extends BasePage{
    // static visit() {
    //     return cy.visit("/checkbox");
    // }

    static get url(){
        return "/checkbox"; 
    }
    static get expandButton() {
        return cy.get("button[title='Expand all']")
    }

    static get checkboxes() {
      return cy.get(".rct-node"); 
    } 
    
    static get selectedCheckboxes() {
        return cy.get("div[id='result']");
    }


} 
import { BasePage } from "./base.page";

export class WebtablesPage extends BasePage{

    static get url() {
        return "/webtables"
    }

    static get addButton() {
        //return cy.get("button[id='addNewRecordButton']");
        return cy.get("#addNewRecordButton");
    }

    static get firstNameField() {
        return cy.get("#firstName");
    }

    static get lastNameField() {
        return cy.get("#lastName");
    }

    static get emailField() {
        return cy.get("#userEmail");
    }
    static get ageField() {
        return cy.get("#age");
    }
    static get salaryField() {
        return cy.get("#salary");
    }
    static get departmentField() {
        return cy.get("#department");
    }
    static get submitButton() {
        return cy.get("button[id='submit']");
    }
    static get rows() {
        return cy.get("[role='row']");
    }
}
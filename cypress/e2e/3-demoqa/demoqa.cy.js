import { TextBoxPage } from "../../pageObjects/textbox.page";
import { CheckboxPage } from "../../pageObjects/checkbox.page";
import { RadioButtons } from "../../pageObjects/radiobuttons.page";
import { WebtablesPage } from "../../pageObjects/webtables";

describe("DemoQA", () => {
    context("Text Box scenario", () => {
      beforeEach(() => {
        //cy.visit("/text-box");
        TextBoxPage.visit();
      });
  
      it("Enter textfield data", () => {
        // TODO: Implement scenario

        //Actions
        //cy.get("input[id='userName']").type("Martins");
        TextBoxPage.userNameField.type("Martins");
        //cy.get("input[id='userEmail']").type("martins.zaimis@gmail.com");
        TextBoxPage.userEmailField.type("martins.zaimis@gmail.com");
        //cy.get("textarea[id='currentAddress']").type("Some Random Current Address" );
        TextBoxPage.userCurrentAdress.type("Some Random Current Address");
        //cy.get("textarea[id='permanentAddress']").type("Some Random Permanent Address");
        TextBoxPage.userPermanentAdress.type("Some Random Permanent Address");
        //cy.get("button[id='submit']").click();
        TextBoxPage.submitButton.click();

        //Validation

        //cy.get("#output #name").should("have.text","Name:Martins");
        TextBoxPage.outPutFieldName.should("have.text","Name:Martins");
        //cy.get("#output #email").should("have.text","Email:martins.zaimis@gmail.com");
        TextBoxPage.outPutFieldEmail.should("have.text","Email:martins.zaimis@gmail.com");
        //cy.get("#output #currentAddress").should("contain.text","Current Address :Some Random Current Address");
        TextBoxPage.outPutFieldCurrentAdress.should("contain.text","Current Address :Some Random Current Address");
        //cy.get("#output #permanentAddress").should("contain.text","Permananet Address :Some Random Permanent Address");
        TextBoxPage.outPutFieldPermanentAdress.should("contain.text","Permananet Address :Some Random Permanent Address");
    });

        it("Enter textfield data - incorrect email format - negative case", () => {
        //cy.get("input[id='userEmail']").type("martins.zaimis@test@gmail.com");
        TextBoxPage.userEmailField.type("martins.zaimis@test@gmail.com");
        //cy.get("button[id='submit']").click();
        TextBoxPage.submitButton.click();
        // validate that the email field has red border
        //cy.get("input#userEmail").should("have.class", 'field-error');
        TextBoxPage.userEmailField.should("have.class", 'field-error');
      });

    });
    context("Checkbox scenario", () => {
        beforeEach(() => {
          CheckboxPage.visit();
        });
    
        it("Click checkboxes - ", () => {
            //Click expand/pluss(+) button
            CheckboxPage.expandButton.click();
            //Select notes
            CheckboxPage.checkboxes.contains("Notes").click();
            // select office
            // CheckboxPage.checkboxes.contains("Office").click();
            CheckboxPage.checkboxes.contains("Angular").click();
            CheckboxPage.checkboxes.contains("Private").click();
            CheckboxPage.checkboxes.contains("Excel").click();

            //Validation
            CheckboxPage.selectedCheckboxes.should("have.text","You have selected :notesangularprivateexcelFile");
        });
      });
      context("RadioButtons scenario", () => {
        beforeEach(() => {
          RadioButtons.visit();
        });

        it("Click Radio button - Yes", () => {
            //Click yes button
            RadioButtons.yesButton.click();
            //Validate that Yes button is clicked (You have selected Yes)
            RadioButtons.result.should("have.text", "Yes");
        });

        it("Click Radio button - Impressive", () => {
            //Click Impressive button
            RadioButtons.impressiveButton.click();
            //Validate that Impressive button is clicked (You have selected Impressive)
            RadioButtons.result.should("have.text", "Impressive");
        });

        it("Click Radio button - No", () => {
            //validate that No button is disabled
            //RadioButtons.noButton.click();
            RadioButtons.noButton.should("be.disabled");
        });
    });

    context("Web Table scenario", () => {
        beforeEach(() => {
          WebtablesPage.visit();
        });

        it.only("Create new web table", () => {
            //Click add
            WebtablesPage.addButton.click();
            //Enter -firstname, lastname , email, age, salary , department
            WebtablesPage.firstNameField.type("Janis");
            WebtablesPage.lastNameField.type("Berzins")
            WebtablesPage.emailField.type("janisberzins@gmail.com");
            WebtablesPage.ageField.type("23");
            WebtablesPage.salaryField.type("1300");
            WebtablesPage.departmentField.type("IT");
            //click submit
            WebtablesPage.submitButton.click();
            //validate
            WebtablesPage.rows.contains("janisberzins@gmail.com").parent().should("contain.text","Janis")
            .and("contain.text","Berzins")
            .and("contain.text","janisberzins@gmail.com")
            .and("contain.text","23")
            .and("contain.text","1300")
            .and("contain.text","IT");
        });
    });
  });
import { BasePage } from "./basePage";

export class SavedPaymentMethodsPage extends BasePage {
  static get url() {
    return "/#/saved-payment-methods";
  }


  static get addNewCardButton() {
    return cy.get('mat-expansion-panel-header').contains('Add new card');
  }

  static get name() {
    return cy.contains('mat-form-field', 'Name').find('input');}

  static get card() {
    return cy.contains('mat-form-field', 'Card Number').find('input');
}

  static get expMonth() {
    return cy.get("#mat-input-4")
}

  static get expYear() {
    return cy.get("#mat-input-5");
}

  static get submitButton() {
    return cy.get("#submitButton")
  }

  static get cardInfo() {
    return cy.get(".mdc-card")
  }

} 
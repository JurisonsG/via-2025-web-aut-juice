import { BasePage } from "../pageObjects/basePage";

export class DeliveryMethodPage extends BasePage {
  static get url() {
    return "/#/delivery-method";
  }

  static get standardButton() {
    return cy.get('mat-cell').contains('Standard Delivery');
  }

  static get continueButton() {
    return cy.get("button[aria-label='Proceed to delivery method selection']");
  }
  
}

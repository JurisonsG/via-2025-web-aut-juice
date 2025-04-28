import { BasePage } from "../pageObjects/basePage";

export class CreateAddressPage extends BasePage {
  static get url() {
    return "/#/address/create";
  }

  static get country() {
    return cy.get('input[placeholder="Please provide a country."]');
  }

  static get name() {
    return cy.get('input[placeholder="Please provide a name."]');
}

  static get mobileNumber() {
    return cy.get('input[placeholder="Please provide a mobile number."]');
  }

  static get zipCode() {
    return cy.get('input[placeholder="Please provide a ZIP code."]');
  }

  static get address() {
    return cy.get('textarea[placeholder="Please provide an address."]');
  }

  static get city() {
    return cy.get('input[placeholder="Please provide a city."]');
  }

  static get state() {
    return cy.get('input[placeholder="Please provide a state."]');
  }

  static get submitButton() {
    return cy.get("#submitButton")
  }

  static get addressInformation () {
    return cy.get(".mdc-card")
  }

} 

const { I } = inject();
const locators = require('../locators');
require('dotenv').config();
const { assert } = require('chai');

module.exports = {
  submitDocData() {
    I.click(locators.kindOfDocSelector);
    I.selectOption(locators.kindOfDocSelector, 'Закордонний паспорт');

    I.click(locators.docAge);
    I.selectOption(locators.docAge, 'Дорослий');

    I.click(locators.officialIdSelector);
    I.selectOption(locators.officialIdSelector, 'Картки (ID)');

    I.fillField(locators.idNumber, process.env.ID_CARD_NUMBER);
  },

  async submitData() {
    I.scrollTo(locators.submitButton);
    I.forceClick(locators.submitButton);
  },
  async checkDocStatus() {
    I.wait(2);
    await I.waitForElement(locators.popupText);
    const text = await I.grabTextFrom(locators.popupText);
    console.log(text);
  },
};

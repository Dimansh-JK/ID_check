const { I } = inject();
const locators = require('../locators');
require('dotenv').config();
const { assert } = require('chai');

module.exports = {
  async submitDocData() {
    await I.click(locators.kindOfDocSelector);
    await I.selectOption(locators.kindOfDocSelector, 'Закордонний паспорт');

    await I.click(locators.docAge);
    await I.selectOption(locators.docAge, 'Дорослий');

    await I.click(locators.officialIdSelector);
    await I.selectOption(locators.officialIdSelector, 'Картки (ID)');

    await I.fillField(locators.idNumber, process.env.ID_CARD_NUMBER);
  },

  async submitData() {
    await I.scrollTo(locators.submitButton);
    await I.forceClick(locators.submitButton);
  },
  async checkDocStatus() {
    I.wait(2);
    await I.waitForElement(locators.popupText);
    const text = await I.grabTextFrom(locators.popupText);
    console.log(text);
  },
};

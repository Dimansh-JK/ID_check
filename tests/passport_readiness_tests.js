Feature('passport readiness');
require('dotenv').config();

Scenario('test something', async ({ I, docStatePage }) => {
  I.amOnPage('https://krakow.pasport.org.ua/solutions/checker');
  docStatePage.submitDocData();
  await docStatePage.submitData();
  await docStatePage.checkDocStatus();
}).tag('status');

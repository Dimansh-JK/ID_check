Feature('passport readiness');



Scenario('test something', async ({ I, docStatePage }) => {
  await I.amOnPage('https://krakow.pasport.org.ua/solutions/checker');
  await docStatePage.submitDocData();
  await docStatePage.submitData();
  await docStatePage.checkDocStatus();
}).tag('status');

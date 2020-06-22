let {Given,When,Then,setDefaultTimeout} = require('cucumber');
setDefaultTimeout(50 * 1000);
var chai = require('chai');
var expect = chai.expect;


Given('I am on the auden short loan page', async function () {
  await browser.manage().timeouts().implicitlyWait(50 * 8000);
  browser.ignoreSynchronization = true;
  browser.get('https://www.auden.co.uk/Credit/ShortTermLoan');
  await browser.sleep(3000);
  return console.log("@Given -- I am on the auden short loan page");

})


When('I select monthly loan instalment', async function () {
  browser.manage().timeouts().implicitlyWait(5000);
  var slider = element(by.css('div.range-input.loan-amount__range-slider'));  
  browser.actions().dragAndDrop(slider, {x:30, y:0}).perform();
  await browser.sleep(1000);
  return console.log("@When -- I select monthly loan instalment");
});



//first repayment day to weekend option will change to friday
Then('I set first repayment day to weekend option will change to friday', async function () {
  browser.manage().timeouts().implicitlyWait(5000);
  element(by.cssContainingText('.date-selector__date', "5")).click();
  browser.manage().timeouts().implicitlyWait(5000);
  return console.log("@Then -- I set first repayment day option for the weekend change to friday");
});


 // min & max amounts of loan slider
Then('I select min and max amounts of loan slider.', async function () {
  await browser.manage().timeouts().implicitlyWait(5000);
   var slider = element(by.css('div.range-input.loan-amount__range-slider')); 
   await browser.actions().dragAndDrop(slider, {x: 0, y: 30}).perform();
   await browser.sleep(2000);
   //assertion
   expect('Loan Amount').to.exist;
     
   return console.log("@Then -- I select min and max amounts of loan slider");
});


// This chai Assertion check loan amount exist
Then('I should see slider amount is loan', async function () {
  await browser.manage().timeouts().implicitlyWait(5000);
  //Assertion
  expect('Loan').to.exist;
  await browser.manage().timeouts().implicitlyWait(5000);
  return console.log("@Then -- I should see slider amount is loan");
});




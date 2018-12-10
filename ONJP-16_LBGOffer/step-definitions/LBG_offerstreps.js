
var LBG_offers = require('../page-objects/LBGoffer_action');
module.exports = function () {


       this.Given(/^user logs in to openbanking "([^"]*)" and enters the valid "([^"]*)" and "([^"]*)"$/, function (url, user, pass) {
        LBG_offers.crediential(url,user,pass);
      });


      this.When(/^user should navigate to home page click on optmize$/, function () {
        
        LBG_offers.VerifyHomePage();
      });

      this.When(/^user should navigate to payout screen and click on Agree and pay$/, function () {
        LBG_offers.VerifyPayoutpage();
      });


      this.Then(/^user should navigate to offering screen where message will be displayed for LBG Savings offering to Account$/, function () {
        LBG_offers.verifyoffering();
      });


      this.Then(/^verify LBG offers high rate AER of "([^"]*)" annual return savings for the user$/, function (expected) {
        LBG_offers.verifyofferingsavingsnew(expected);
        LBG_offers.logout();
      });


       this.Then(/^verify LBG offers low rate APR of "([^"]*)" annual return savings for the user$/, function (expected) {
        LBG_offers.verifyofferingsavingsAPR(expected);
        LBG_offers.logout();
       });

    }
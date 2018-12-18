
var LBG_offers = require('../page-objects/LBGoffer_action');
var merge_account = require('../page-objects/merge_account');
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


       //================================================================merge account

       this.Given(/^navigates to Wallet page$/, function () {
        merge_account.verify_wallet();
      });

      this.When(/^user clicks on optmize should land on optmize screen$/, function () {
        merge_account.optimize_screen();
      });

      this.When(/^click on port account so that user can select the all existing accounts to transfer funds to LBG account$/, function () {
      merge_account.click_PortAccount();
      });

      this.When(/^click yes to confirm merge account and transfer successfull message should be displayed$/, function () {
        merge_account.merge_LBGaccount();
      });

      this.Then(/^user should view transfered funds in LBG account from existing accounts$/, function () {
        merge_account.veriy_LBGaccount();
      });

      this.Then(/^user should not view the other accounts which is ported in the Wallet screen$/, function () {
        merge_account.verify_portedAccount();
      });


      this.Then(/^user logouts the application$/, function () {
        merge_account.logout();
      });

      this.When(/^click on port account so that user can select existing account to transfer funds to existing Barclays account$/, function () {
        merge_account.click_PortAccount();
      });

      this.When(/^click yes to confirm merge existing account and transfer successfull message should be displayed$/, function () {
        merge_account.merge_Barclaysaccount();
      });

      this.Then(/^user should view transfered funds in ported account from existing selected account$/, function () {
      merge_account.verify_Barclaysaccount();
      });


      this.Then(/^user should not view the other account which is ported in the Wallet screen$/, function () {
    
      });

      //-----------------------------finiancical advicory
       this.Then(/^click on Finiancial advisory and view the finacial advice information for the account$/, function () {         // Write code here that turns the phrase above into concrete actions
        
        merge_account.click_Financial();
        
      });

    }
const { Given, When, Then } = require('cucumber');
let code = require('../helper/code.js');

Given('I authenticate {string}', function (user) {
    return code.authenticateCall(user);
});

When('I try to retrieve best payout plan for {string}', function (user) {
    return code.getCall(user);

});

Then('I should get successful response for {string}', function (user) { 
    return code.assertCall(user);
});

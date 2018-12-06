const should = require('should');
const supertest = require('supertest');
const apiEndPointHelper = require('./api_endpoints.js');
const testData = require('./test_data.js');
const testEnv = require('./test_environment.js');
const validator = require('./validators.js');
const apiHelper = require('./api_helper.js');
let token;
let env = "local";
let res;

module.exports = {

    authenticateCall: async function (user) {
        let baseUrl = testEnv.getBaseURL(env, "auth");
        let apiEndPoint = apiEndPointHelper.authEndPoint;
        let username;
        let password;
        /*if (user === "alice") {
            username = testData.ausername;
            password = testData.apassword;
        }
        else if (user === "john") {
            username = testData.jusername;
            password = testData.jpassword;
        }
        else */
		if (user === "bob") {
            username = testData.busername;
            password = testData.bpassword;
        }
        else if (user === "emma") {
            username = testData.eusername;
            password = testData.epassword;
        }
        else if (user === "becca") {
            username = testData.beusername;
            password = testData.bepassword;
        }
        else if (user === "paul") {
            username = testData.pusername;
            password = testData.ppassword;
        }
        let requestBody = getRequestBody(username, password)
        let res = await apiHelper.sendPOSTRequest(baseUrl, apiEndPoint, requestBody);
        token = res.body.token;
        res.status.should.equal(200);
    },

    verifyUser: async function (user) {
        let baseUrl = testEnv.getBaseURL(env, "auth");
        let apiEndPoint = apiEndPointHelper.verifyAuthEndPoint;
        let res = await apiHelper.sendGETRequest(baseUrl, apiEndPoint, token);
        res.status.should.equal(200);
        validator.userValidator(res, user);
    },

    getCall: async function (user) {
        let baseUrl = testEnv.getBaseURL(env, "bestplan");
        let apiEndPoint = apiEndPointHelper.payOutPlanEndPoint;
        res = await apiHelper.sendGETRequest(baseUrl, apiEndPoint, token);
        res.status.should.equal(200);
    },

    assertCall: async function (user) {
        /*if (user === "alice") {
            validator.a_dataValidator(res, testData.a_user, testData.a_cc_1_bankName, testData.a_cc_1_accountType, testData.a_cc_1_accountTitle, testData.a_cc_1_totalBalanceDue, testData.a_cc_1_totalOutstandingBalance, testData.a_dc_1_1_bankName, testData.a_dc_1_1_accountType, testData.a_dc_1_1_accountTitle, testData.a_dc_1_1_contributingAmount, testData.a_dc_1_1_totalAvailableBalance, testData.a_dc_1_1_interestRate, testData.a_cc_2_bankName, testData.a_cc_2_accountType, testData.a_cc_2_accountTitle, testData.a_cc_2_totalBalanceDue, testData.a_cc_2_apr, testData.a_cc_2_totalOutstandingBalance, testData.a_dc_2_1_bankName, testData.a_dc_2_1_accountType, testData.a_dc_2_1_accountTitle, testData.a_dc_2_1_contributingAmount, testData.a_dc_2_1_totalAvailableBalance, testData.a_dc_2_1_interestRate, testData.a_cc_3_bankName, testData.a_cc_3_accountType, testData.a_cc_3_accountTitle, testData.a_cc_3_totalBalanceDue, testData.a_cc_3_apr, testData.a_cc_3_totalOutstandingBalance, testData.a_dc_3_1_bankName, testData.a_dc_3_1_accountType, testData.a_dc_3_1_accountTitle, testData.a_dc_3_1_contributingAmount, testData.a_dc_3_1_totalAvailableBalance, testData.a_dc_3_1_interestRate, testData.a_dc_3_2_bankName, testData.a_dc_3_2_accountType, testData.a_dc_3_2_accountTitle, testData.a_dc_3_2_contributingAmount, testData.a_dc_3_2_totalAvailableBalance, testData.a_dc_3_2_interestRate);
        }
        else if (user === "john") {
            validator.j_dataValidator(res, testData.j_user, testData.j_cc_1_bankName, testData.j_cc_1_accountType, testData.j_cc_1_accountTitle, testData.j_cc_1_totalBalanceDue, testData.j_cc_1_interestRate, testData.j_cc_1_totalOutstandingBalance, testData.j_dc_1_1_bankName, testData.j_dc_1_1_accountTitle, testData.j_dc_1_1_contributingAmount, testData.j_dc_1_1_totalAvailableBalance, testData.j_dc_1_1_interestRate, testData.j_cc_2_bankName, testData.j_cc_2_accountType, testData.j_cc_2_accountTitle, testData.j_cc_2_totalBalanceDue, testData.j_cc_2_apr, testData.j_cc_2_totalOutstandingBalance, testData.j_dc_2_1_bankName, testData.j_dc_2_1_accountTitle, testData.j_dc_2_1_contributingAmount, testData.j_dc_2_1_totalAvailableBalance, testData.j_dc_2_1_interestRate, testData.j_dc_2_2_bankName, testData.j_dc_2_2_accountType, testData.j_dc_2_2_accountTitle, testData.j_dc_2_2_contributingAmount, testData.j_dc_2_2_totalAvailableBalance, testData.j_dc_2_2_interestRate, testData.j_cc_3_bankName, testData.j_cc_3_accountType, testData.j_cc_3_accountTitle, testData.j_cc_3_totalBalanceDue, testData.j_cc_3_apr, testData.j_cc_3_totalOutstandingBalance, testData.j_dc_3_1_bankName, testData.j_dc_3_1_accountType, testData.j_dc_3_1_accountTitle, testData.j_dc_3_1_contributingAmount, testData.j_dc_3_1_totalAvailableBalance, testData.j_dc_3_1_interestRate, testData.j_dc_3_2_bankName, testData.j_dc_3_2_accountType, testData.j_dc_3_2_accountTitle, testData.j_dc_3_2_contributingAmount, testData.j_dc_3_2_totalAvailableBalance, testData.j_dc_3_2_interestRate);
        }
        else */
		if (user === "emma") {
            validator.e_dataValidator(res, testData.e_user, testData.e_cc_1_bankName, testData.e_cc_1_accountType, testData.e_cc_1_accountTitle, testData.e_cc_1_totalBalanceDue, testData.e_cc_1_apr, testData.e_cc_1_totalOutstandingBalance, testData.e_dc_1_bankName, testData.e_dc_1_accountType, testData.e_dc_1_accountTitle, testData.e_dc_1_contributingAmount, testData.e_dc_1_totalAvailableBalance, testData.e_dc_1_interestRate, testData.e_cc_2_bankName, testData.e_cc_2_accountType, testData.e_cc_2_accountTitle, testData.e_cc_2_totalBalanceDue, testData.e_cc_2_apr, testData.e_cc_2_totalOutstandingBalance, testData.e_dc_2_bankName, testData.e_dc_2_accountType, testData.e_dc_2_accountTitle, testData.e_dc_2_contributingAmount, testData.e_dc_2_totalAvailableBalance, testData.e_dc_2_interestRate, testData.e_cc_3_bankName, testData.e_cc_3_accountType, testData.e_cc_3_accountTitle, testData.e_cc_3_totalBalanceDue, testData.e_cc_3_interestRate, testData.e_cc_3_minMonthlyPayment, testData.e_cc_3_totalOutstandingBalance, testData.e_dc_3_bankName, testData.e_dc_3_accountType, testData.e_dc_3_accountTitle, testData.e_dc_3_contributingAmount, testData.e_dc_3_totalAvailableBalance, testData.e_dc_3_interestRate);
        }
        else if (user === "paul") {
            validator.p_dataValidator(res, testData.p_user, testData.p_cc_1_bankName, testData.p_cc_1_accountType, testData.p_cc_1_accountTitle, testData.p_cc_1_totalBalanceDue, testData.p_cc_1_apr, testData.p_cc_1_minimumDue, testData.p_cc_1_totalOutstandingBalance, testData.p_dc_1_bankName, testData.p_dc_1_accountType, testData.p_dc_1_accountTitle, testData.p_dc_1_contributingAmount, testData.p_dc_1_totalAvailableBalance, testData.p_dc_1_interestRate, testData.p_cc_2_bankName, testData.p_cc_2_accountType, testData.p_cc_2_accountTitle, testData.p_cc_2_totalBalanceDue, testData.p_cc_2_apr, testData.p_cc_2_minimumDue, testData.p_cc_2_totalOutstandingBalance, testData.p_dc_2_bankName, testData.p_dc_2_accountType, testData.p_dc_2_accountTitle, testData.p_dc_2_contributingAmount, testData.p_dc_2_totalAvailableBalance, testData.p_dc_2_interestRate, testData.p_cc_3_bankName, testData.p_cc_3_accountType, testData.p_cc_3_accountTitle, testData.p_cc_3_totalBalanceDue, testData.p_cc_3_interestRate, testData.p_cc_3_minMonthlyPayment, testData.p_cc_3_totalOutstandingBalance, testData.p_dc_3_bankName, testData.p_dc_3_accountType, testData.p_dc_3_accountTitle, testData.p_dc_3_contributingAmount, testData.p_dc_3_totalAvailableBalance, testData.p_dc_3_interestRate);
        }
        else if (user === "becca") {
            validator.be_dataValidator(res, testData.be_user, testData.be_cc_1_bankName, testData.be_cc_1_accountType, testData.be_cc_1_accountTitle, testData.be_cc_1_totalBalanceDue, testData.be_cc_1_interestRate, testData.be_cc_1_minMonthlyPayment, testData.be_cc_1_totalOutstandingBalance, testData.be_dc_1_bankName, testData.be_dc_1_accountType, testData.be_dc_1_accountTitle, testData.be_dc_1_contributingAmount, testData.be_dc_1_totalAvailableBalance, testData.be_dc_1_interestRate, testData.be_cc_2_bankName, testData.be_cc_2_accountType, testData.be_cc_2_accountTitle, testData.be_cc_2_totalBalanceDue, testData.be_cc_2_apr, testData.be_cc_2_minimumDue, testData.be_cc_2_totalOutstandingBalance, testData.be_dc_2_bankName, testData.be_dc_2_accountType, testData.be_dc_2_accountTitle, testData.be_dc_2_contributingAmount, testData.be_dc_2_totalAvailableBalance, testData.be_dc_2_interestRate, testData.be_cc_3_bankName, testData.be_cc_3_accountType, testData.be_cc_3_accountTitle, testData.be_cc_3_totalBalanceDue, testData.be_cc_3_apr, testData.be_cc_3_minimumDue, testData.be_cc_3_totalOutstandingBalance, testData.be_dc_3_bankName, testData.be_dc_3_accountType, testData.be_dc_3_accountTitle, testData.be_dc_3_contributingAmount, testData.be_dc_3_totalAvailableBalance, testData.be_dc_3_interestRate);
        }
        else if (user === "bob") {
            validator.b_dataValidator(res, testData.b_user, testData.b_cc_1_bankName, testData.b_cc_1_accountType, testData.b_cc_1_accountTitle, testData.b_cc_1_totalBalanceDue, testData.b_cc_1_apr, testData.b_cc_1_minimumDue, testData.b_cc_1_totalOutstandingBalance, testData.b_dc_1_bankName, testData.b_dc_1_accountType, testData.b_dc_1_accountTitle, testData.b_dc_1_contributingAmount, testData.b_dc_1_totalAvailableBalance, testData.b_dc_1_interestRate, testData.b_cc_2_bankName, testData.b_cc_2_accountType, testData.b_cc_2_accountTitle, testData.b_cc_2_totalBalanceDue, testData.b_cc_2_apr, testData.b_cc_2_minimumDue, testData.b_cc_2_totalOutstandingBalance, testData.b_dc_2_bankName, testData.b_dc_2_accountType, testData.b_dc_2_accountTitle, testData.b_dc_2_contributingAmount, testData.b_dc_2_totalAvailableBalance, testData.b_dc_2_interestRate, testData.b_cc_3_bankName, testData.b_cc_3_accountType, testData.b_cc_3_accountTitle, testData.b_cc_3_totalBalanceDue, testData.b_cc_3_interestRate, testData.b_cc_3_minMonthlyPayment, testData.b_cc_3_totalOutstandingBalance, testData.b_dc_3_bankName, testData.b_dc_3_accountType, testData.b_dc_3_accountTitle, testData.b_dc_3_contributingAmount, testData.b_dc_3_totalAvailableBalance, testData.b_dc_3_interestRate, testData.b_cc_4_bankName, testData.b_cc_4_accountType, testData.b_cc_4_accountTitle, testData.b_cc_4_totalBalanceDue, testData.b_cc_4_apr, testData.b_cc_4_minimumDue, testData.b_cc_4_totalOutstandingBalance, testData.b_dc_4_bankName, testData.b_dc_4_accountType, testData.b_dc_4_accountTitle, testData.b_dc_4_contributingAmount, testData.b_dc_4_totalAvailableBalance, testData.b_dc_4_interestRate);
        }
    }
};

var getRequestBody = function (username, password) {
    return {
        "username": username,
        "password": password
    }
};
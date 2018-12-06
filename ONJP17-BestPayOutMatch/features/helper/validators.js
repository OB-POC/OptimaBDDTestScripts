//Contains functions to validate the api details

//alice's data assertion
exports.a_dataValidator = function (res, a_user, a_cc_1_bankName, a_cc_1_accountType, a_cc_1_accountTitle, a_cc_1_totalBalanceDue, a_cc_1_totalOutstandingBalance, a_dc_1_1_bankName, a_dc_1_1_accountType, a_dc_1_1_accountTitle, a_dc_1_1_contributingAmount, a_dc_1_1_totalAvailableBalance, a_dc_1_1_interestRate, a_cc_2_bankName, a_cc_2_accountType, a_cc_2_accountTitle, a_cc_2_totalBalanceDue, a_cc_2_apr, a_cc_2_totalOutstandingBalance, a_dc_2_1_bankName, a_dc_2_1_accountType, a_dc_2_1_accountTitle, a_dc_2_1_contributingAmount, a_dc_2_1_totalAvailableBalance, a_dc_2_1_interestRate, a_cc_3_bankName, a_cc_3_accountType, a_cc_3_accountTitle, a_cc_3_totalBalanceDue, a_cc_3_apr, a_cc_3_totalOutstandingBalance, a_dc_3_1_bankName, a_dc_3_1_accountType, a_dc_3_1_accountTitle, a_dc_3_1_contributingAmount, a_dc_3_1_totalAvailableBalance, a_dc_3_1_interestRate, a_dc_3_2_bankName, a_dc_3_2_accountType, a_dc_3_2_accountTitle, a_dc_3_2_contributingAmount, a_dc_3_2_totalAvailableBalance, a_dc_3_2_interestRate) {
    res.body.username.should.equal(a_user);
    res.body.creditDebitMatch[0].bankName.should.equal(a_cc_1_bankName);
    res.body.creditDebitMatch[0].accountType.should.equal(a_cc_1_accountType);
    res.body.creditDebitMatch[0].accountTitle.should.equal(a_cc_1_accountTitle);
    res.body.creditDebitMatch[0].totalBalanceDue.should.equal(a_cc_1_totalBalanceDue);
    res.body.creditDebitMatch[0].totalOutstandingBalance.should.equal(a_cc_1_totalOutstandingBalance);
    res.body.creditDebitMatch[0].senders[0].bankName.should.equal(a_dc_1_1_bankName);
    res.body.creditDebitMatch[0].senders[0].accountType.should.equal(a_dc_1_1_accountType);
    res.body.creditDebitMatch[0].senders[0].accountTitle.should.equal(a_dc_1_1_accountTitle);
    res.body.creditDebitMatch[0].senders[0].contributingAmount.should.equal(a_dc_1_1_contributingAmount);
    res.body.creditDebitMatch[0].senders[0].totalAvailableBalance.should.equal(a_dc_1_1_totalAvailableBalance);
    res.body.creditDebitMatch[0].senders[0].interestRate.should.equal(a_dc_1_1_interestRate);

    res.body.creditDebitMatch[1].bankName.should.equal(a_cc_2_bankName);
    res.body.creditDebitMatch[1].accountType.should.equal(a_cc_2_accountType);
    res.body.creditDebitMatch[1].accountTitle.should.equal(a_cc_2_accountTitle);
    res.body.creditDebitMatch[1].totalBalanceDue.should.equal(a_cc_2_totalBalanceDue);
    res.body.creditDebitMatch[1].apr.should.equal(a_cc_2_apr);
    res.body.creditDebitMatch[1].totalOutstandingBalance.should.equal(a_cc_2_totalOutstandingBalance);
    res.body.creditDebitMatch[1].senders[0].bankName.should.equal(a_dc_2_1_bankName);
    res.body.creditDebitMatch[1].senders[0].accountType.should.equal(a_dc_2_1_accountType);
    res.body.creditDebitMatch[1].senders[0].accountTitle.should.equal(a_dc_2_1_accountTitle);
    res.body.creditDebitMatch[1].senders[0].contributingAmount.should.equal(a_dc_2_1_contributingAmount);
    res.body.creditDebitMatch[1].senders[0].totalAvailableBalance.should.equal(a_dc_2_1_totalAvailableBalance);
    res.body.creditDebitMatch[1].senders[0].interestRate.should.equal(a_dc_2_1_interestRate);

    res.body.creditDebitMatch[2].bankName.should.equal(a_cc_3_bankName);
    res.body.creditDebitMatch[2].accountType.should.equal(a_cc_3_accountType);
    res.body.creditDebitMatch[2].accountTitle.should.equal(a_cc_3_accountTitle);
    res.body.creditDebitMatch[2].totalBalanceDue.should.equal(a_cc_3_totalBalanceDue);
    res.body.creditDebitMatch[2].apr.should.equal(a_cc_3_apr);
    res.body.creditDebitMatch[2].totalOutstandingBalance.should.equal(a_cc_3_totalOutstandingBalance);
    res.body.creditDebitMatch[2].senders[0].bankName.should.equal(a_dc_3_1_bankName);
    res.body.creditDebitMatch[2].senders[0].accountType.should.equal(a_dc_3_1_accountType);
    res.body.creditDebitMatch[2].senders[0].accountTitle.should.equal(a_dc_3_1_accountTitle);
    res.body.creditDebitMatch[2].senders[0].contributingAmount.should.equal(a_dc_3_1_contributingAmount);
    res.body.creditDebitMatch[2].senders[0].totalAvailableBalance.should.equal(a_dc_3_1_totalAvailableBalance);
    res.body.creditDebitMatch[2].senders[0].interestRate.should.equal(a_dc_3_1_interestRate);
    res.body.creditDebitMatch[2].senders[1].bankName.should.equal(a_dc_3_2_bankName);
    res.body.creditDebitMatch[2].senders[1].accountType.should.equal(a_dc_3_2_accountType);
    res.body.creditDebitMatch[2].senders[1].accountTitle.should.equal(a_dc_3_2_accountTitle);
    res.body.creditDebitMatch[2].senders[1].contributingAmount.should.equal(a_dc_3_2_contributingAmount);
    res.body.creditDebitMatch[2].senders[1].totalAvailableBalance.should.equal(a_dc_3_2_totalAvailableBalance);
    res.body.creditDebitMatch[2].senders[1].interestRate.should.equal(a_dc_3_2_interestRate);
};


//john's data assertion 
exports.j_dataValidator = function (res, j_user, j_cc_1_bankName, j_cc_1_accountType, j_cc_1_accountTitle, j_cc_1_totalBalanceDue, j_cc_1_interestRate, j_cc_1_totalOutstandingBalance, j_dc_1_1_bankName, j_dc_1_1_accountTitle, j_dc_1_1_contributingAmount, j_dc_1_1_totalAvailableBalance, j_dc_1_1_interestRate, j_cc_2_bankName, j_cc_2_accountType, j_cc_2_accountTitle, j_cc_2_totalBalanceDue, j_cc_2_apr, j_cc_2_totalOutstandingBalance, j_dc_2_1_bankName, j_dc_2_1_accountTitle, j_dc_2_1_contributingAmount, j_dc_2_1_totalAvailableBalance, j_dc_2_1_interestRate, j_dc_2_2_bankName, j_dc_2_2_accountType, j_dc_2_2_accountTitle, j_dc_2_2_contributingAmount, j_dc_2_2_totalAvailableBalance, j_dc_2_2_interestRate, j_cc_3_bankName, j_cc_3_accountType, j_cc_3_accountTitle, j_cc_3_totalBalanceDue, j_cc_3_apr, j_cc_3_totalOutstandingBalance, j_dc_3_1_bankName, j_dc_3_1_accountType, j_dc_3_1_accountTitle, j_dc_3_1_contributingAmount, j_dc_3_1_totalAvailableBalance, j_dc_3_1_interestRate, j_dc_3_2_bankName, j_dc_3_2_accountType, j_dc_3_2_accountTitle, j_dc_3_2_contributingAmount, j_dc_3_2_totalAvailableBalance, j_dc_3_2_interestRate) {
    res.body.username.should.equal(j_user);
    res.body.creditDebitMatch[0].bankName.should.equal(j_cc_1_bankName);
    res.body.creditDebitMatch[0].accountType.should.equal(j_cc_1_accountType);
    res.body.creditDebitMatch[0].accountTitle.should.equal(j_cc_1_accountTitle);
    res.body.creditDebitMatch[0].totalBalanceDue.should.equal(j_cc_1_totalBalanceDue);
    res.body.creditDebitMatch[0].interestRate.should.equal(j_cc_1_interestRate);
    res.body.creditDebitMatch[0].totalOutstandingBalance.should.equal(j_cc_1_totalOutstandingBalance);
    res.body.creditDebitMatch[0].senders[0].bankName.should.equal(j_dc_1_1_bankName);
    res.body.creditDebitMatch[0].senders[0].accountTitle.should.equal(j_dc_1_1_accountTitle);
    res.body.creditDebitMatch[0].senders[0].contributingAmount.should.equal(j_dc_1_1_contributingAmount);
    res.body.creditDebitMatch[0].senders[0].totalAvailableBalance.should.equal(j_dc_1_1_totalAvailableBalance);
    res.body.creditDebitMatch[0].senders[0].interestRate.should.equal(j_dc_1_1_interestRate);

    res.body.creditDebitMatch[1].bankName.should.equal(j_cc_2_bankName);
    res.body.creditDebitMatch[1].accountType.should.equal(j_cc_2_accountType);
    res.body.creditDebitMatch[1].accountTitle.should.equal(j_cc_2_accountTitle);
    res.body.creditDebitMatch[1].totalBalanceDue.should.equal(j_cc_2_totalBalanceDue);
    res.body.creditDebitMatch[1].apr.should.equal(j_cc_2_apr);
    res.body.creditDebitMatch[1].totalOutstandingBalance.should.equal(j_cc_2_totalOutstandingBalance);
    res.body.creditDebitMatch[1].senders[0].bankName.should.equal(j_dc_2_1_bankName);
    res.body.creditDebitMatch[1].senders[0].accountTitle.should.equal(j_dc_2_1_accountTitle);
    res.body.creditDebitMatch[1].senders[0].contributingAmount.should.equal(j_dc_2_1_contributingAmount);
    res.body.creditDebitMatch[1].senders[0].totalAvailableBalance.should.equal(j_dc_2_1_totalAvailableBalance);
    res.body.creditDebitMatch[1].senders[0].interestRate.should.equal(j_dc_2_1_interestRate);
    res.body.creditDebitMatch[1].senders[1].bankName.should.equal(j_dc_2_2_bankName);
    res.body.creditDebitMatch[1].senders[1].accountType.should.equal(j_dc_2_2_accountType);
    res.body.creditDebitMatch[1].senders[1].accountTitle.should.equal(j_dc_2_2_accountTitle);
    res.body.creditDebitMatch[1].senders[1].contributingAmount.should.equal(j_dc_2_2_contributingAmount);
    res.body.creditDebitMatch[1].senders[1].totalAvailableBalance.should.equal(j_dc_2_2_totalAvailableBalance);
    res.body.creditDebitMatch[1].senders[1].interestRate.should.equal(j_dc_2_2_interestRate);

    res.body.creditDebitMatch[2].bankName.should.equal(j_cc_3_bankName);
    res.body.creditDebitMatch[2].accountType.should.equal(j_cc_3_accountType);
    res.body.creditDebitMatch[2].accountTitle.should.equal(j_cc_3_accountTitle);
    res.body.creditDebitMatch[2].totalBalanceDue.should.equal(j_cc_3_totalBalanceDue);
    res.body.creditDebitMatch[2].apr.should.equal(j_cc_3_apr);
    res.body.creditDebitMatch[2].totalOutstandingBalance.should.equal(j_cc_3_totalOutstandingBalance);
    res.body.creditDebitMatch[2].senders[0].bankName.should.equal(j_dc_3_1_bankName);
    res.body.creditDebitMatch[2].senders[0].accountType.should.equal(j_dc_3_1_accountType);
    res.body.creditDebitMatch[2].senders[0].accountTitle.should.equal(j_dc_3_1_accountTitle);
    res.body.creditDebitMatch[2].senders[0].contributingAmount.should.equal(j_dc_3_1_contributingAmount);
    res.body.creditDebitMatch[2].senders[0].totalAvailableBalance.should.equal(j_dc_3_1_totalAvailableBalance);
    res.body.creditDebitMatch[2].senders[0].interestRate.should.equal(j_dc_3_1_interestRate);
    res.body.creditDebitMatch[2].senders[1].bankName.should.equal(j_dc_3_2_bankName);
    res.body.creditDebitMatch[2].senders[1].accountType.should.equal(j_dc_3_2_accountType);
    res.body.creditDebitMatch[2].senders[1].accountTitle.should.equal(j_dc_3_2_accountTitle);
    res.body.creditDebitMatch[2].senders[1].contributingAmount.should.equal(j_dc_3_2_contributingAmount);
    res.body.creditDebitMatch[2].senders[1].totalAvailableBalance.should.equal(j_dc_3_2_totalAvailableBalance);
    res.body.creditDebitMatch[2].senders[1].interestRate.should.equal(j_dc_3_2_interestRate);
};

//emma's data assertion
exports.e_dataValidator = function (res, e_user, e_cc_1_bankName, e_cc_1_accountType, e_cc_1_accountTitle, e_cc_1_totalBalanceDue, e_cc_1_apr, e_cc_1_totalOutstandingBalance, e_dc_1_bankName, e_dc_1_accountType, e_dc_1_accountTitle, e_dc_1_contributingAmount, e_dc_1_totalAvailableBalance, e_dc_1_interestRate, e_cc_2_bankName, e_cc_2_accountType, e_cc_2_accountTitle, e_cc_2_totalBalanceDue, e_cc_2_apr, e_cc_2_totalOutstandingBalance, e_dc_2_bankName, e_dc_2_accountType, e_dc_2_accountTitle, e_dc_2_contributingAmount, e_dc_2_totalAvailableBalance, e_dc_2_interestRate, e_cc_3_bankName, e_cc_3_accountType, e_cc_3_accountTitle, e_cc_3_totalBalanceDue, e_cc_3_interestRate, e_cc_3_minMonthlyPayment, e_cc_3_totalOutstandingBalance, e_dc_3_bankName, e_dc_3_accountType, e_dc_3_accountTitle, e_dc_3_contributingAmount, e_dc_3_totalAvailableBalance, e_dc_3_interestRate) {
    res.body.username.should.equal(e_user);
    res.body.creditDebitMatch[0].bankName.should.equal(e_cc_1_bankName);
    res.body.creditDebitMatch[0].accountType.should.equal(e_cc_1_accountType);
    res.body.creditDebitMatch[0].accountTitle.should.equal(e_cc_1_accountTitle);
    res.body.creditDebitMatch[0].totalBalanceDue.should.equal(e_cc_1_totalBalanceDue);
    res.body.creditDebitMatch[0].apr.should.equal(e_cc_1_apr); res.body.creditDebitMatch[0].totalOutstandingBalance.should.equal(e_cc_1_totalOutstandingBalance);
    res.body.creditDebitMatch[0].senders[0].bankName.should.equal(e_dc_1_bankName);
    res.body.creditDebitMatch[0].senders[0].accountType.should.equal(e_dc_1_accountType);
    res.body.creditDebitMatch[0].senders[0].accountTitle.should.equal(e_dc_1_accountTitle);
    res.body.creditDebitMatch[0].senders[0].contributingAmount.should.equal(e_dc_1_contributingAmount);
    res.body.creditDebitMatch[0].senders[0].totalAvailableBalance.should.equal(e_dc_1_totalAvailableBalance);
    res.body.creditDebitMatch[0].senders[0].interestRate.should.equal(e_dc_1_interestRate);

    res.body.creditDebitMatch[1].bankName.should.equal(e_cc_2_bankName);
    res.body.creditDebitMatch[1].accountType.should.equal(e_cc_2_accountType);
    res.body.creditDebitMatch[1].accountTitle.should.equal(e_cc_2_accountTitle);
    res.body.creditDebitMatch[1].totalBalanceDue.should.equal(e_cc_2_totalBalanceDue);
    res.body.creditDebitMatch[1].apr.should.equal(e_cc_2_apr);
    res.body.creditDebitMatch[1].totalOutstandingBalance.should.equal(e_cc_2_totalOutstandingBalance);
    res.body.creditDebitMatch[1].senders[0].bankName.should.equal(e_dc_2_bankName);
    res.body.creditDebitMatch[1].senders[0].accountType.should.equal(e_dc_2_accountType);
    res.body.creditDebitMatch[1].senders[0].accountTitle.should.equal(e_dc_2_accountTitle);
    res.body.creditDebitMatch[1].senders[0].contributingAmount.should.equal(e_dc_2_contributingAmount);
    res.body.creditDebitMatch[1].senders[0].totalAvailableBalance.should.equal(e_dc_2_totalAvailableBalance);
    res.body.creditDebitMatch[1].senders[0].interestRate.should.equal(e_dc_2_interestRate);

    res.body.creditDebitMatch[2].bankName.should.equal(e_cc_3_bankName);
    res.body.creditDebitMatch[2].accountType.should.equal(e_cc_3_accountType);
    res.body.creditDebitMatch[2].accountTitle.should.equal(e_cc_3_accountTitle);
    res.body.creditDebitMatch[2].totalBalanceDue.should.equal(e_cc_3_totalBalanceDue);
    res.body.creditDebitMatch[2].interestRate.should.equal(e_cc_3_interestRate);
    res.body.creditDebitMatch[2].minMonthlyPayment.should.equal(e_cc_3_minMonthlyPayment);
    res.body.creditDebitMatch[2].totalOutstandingBalance.should.equal(e_cc_3_totalOutstandingBalance);
    res.body.creditDebitMatch[2].senders[0].bankName.should.equal(e_dc_3_bankName);
    res.body.creditDebitMatch[2].senders[0].accountType.should.equal(e_dc_3_accountType);
    res.body.creditDebitMatch[2].senders[0].accountTitle.should.equal(e_dc_3_accountTitle);
    res.body.creditDebitMatch[2].senders[0].contributingAmount.should.equal(e_dc_3_contributingAmount);
    res.body.creditDebitMatch[2].senders[0].totalAvailableBalance.should.equal(e_dc_3_totalAvailableBalance);
    res.body.creditDebitMatch[2].senders[0].interestRate.should.equal(e_dc_3_interestRate);
};

//paul's data assertion
exports.p_dataValidator = function (res, p_user, p_cc_1_bankName, p_cc_1_accountType, p_cc_1_accountTitle, p_cc_1_totalBalanceDue, p_cc_1_apr, p_cc_1_minimumDue, p_cc_1_totalOutstandingBalance, p_dc_1_bankName, p_dc_1_accountType, p_dc_1_accountTitle, p_dc_1_contributingAmount, p_dc_1_totalAvailableBalance, p_dc_1_interestRate, p_cc_2_bankName, p_cc_2_accountType, p_cc_2_accountTitle, p_cc_2_totalBalanceDue, p_cc_2_apr, p_cc_2_minimumDue, p_cc_2_totalOutstandingBalance, p_dc_2_bankName, p_dc_2_accountType, p_dc_2_accountTitle, p_dc_2_contributingAmount, p_dc_2_totalAvailableBalance, p_dc_2_interestRate, p_cc_3_bankName, p_cc_3_accountType, p_cc_3_accountTitle, p_cc_3_totalBalanceDue, p_cc_3_interestRate, p_cc_3_minMonthlyPayment, p_cc_3_totalOutstandingBalance, p_dc_3_bankName, p_dc_3_accountType, p_dc_3_accountTitle, p_dc_3_contributingAmount, p_dc_3_totalAvailableBalance, p_dc_3_interestRate) {
    res.body.username.should.equal(p_user);
    res.body.creditDebitMatch[0].bankName.should.equal(p_cc_1_bankName);
    res.body.creditDebitMatch[0].accountType.should.equal(p_cc_1_accountType);
    res.body.creditDebitMatch[0].accountTitle.should.equal(p_cc_1_accountTitle);
    res.body.creditDebitMatch[0].totalBalanceDue.should.equal(p_cc_1_totalBalanceDue);
    res.body.creditDebitMatch[0].apr.should.equal(p_cc_1_apr);
    res.body.creditDebitMatch[0].minimumDue.should.equal(p_cc_1_minimumDue); res.body.creditDebitMatch[0].totalOutstandingBalance.should.equal(p_cc_1_totalOutstandingBalance);
    res.body.creditDebitMatch[0].senders[0].bankName.should.equal(p_dc_1_bankName);
    res.body.creditDebitMatch[0].senders[0].accountType.should.equal(p_dc_1_accountType);
    res.body.creditDebitMatch[0].senders[0].accountTitle.should.equal(p_dc_1_accountTitle);
    res.body.creditDebitMatch[0].senders[0].contributingAmount.should.equal(p_dc_1_contributingAmount);
    res.body.creditDebitMatch[0].senders[0].totalAvailableBalance.should.equal(p_dc_1_totalAvailableBalance);
    res.body.creditDebitMatch[0].senders[0].interestRate.should.equal(p_dc_1_interestRate);

    res.body.creditDebitMatch[1].bankName.should.equal(p_cc_2_bankName);
    res.body.creditDebitMatch[1].accountType.should.equal(p_cc_2_accountType);
    res.body.creditDebitMatch[1].accountTitle.should.equal(p_cc_2_accountTitle);
    res.body.creditDebitMatch[1].totalBalanceDue.should.equal(p_cc_2_totalBalanceDue);
    res.body.creditDebitMatch[1].apr.should.equal(p_cc_2_apr);
    res.body.creditDebitMatch[1].minimumDue.should.equal(p_cc_2_minimumDue);

    res.body.creditDebitMatch[1].totalOutstandingBalance.should.equal(p_cc_2_totalOutstandingBalance);
    res.body.creditDebitMatch[1].senders[0].bankName.should.equal(p_dc_2_bankName);
    res.body.creditDebitMatch[1].senders[0].accountType.should.equal(p_dc_2_accountType);
    res.body.creditDebitMatch[1].senders[0].accountTitle.should.equal(p_dc_2_accountTitle);
    res.body.creditDebitMatch[1].senders[0].contributingAmount.should.equal(p_dc_2_contributingAmount);
    res.body.creditDebitMatch[1].senders[0].totalAvailableBalance.should.equal(p_dc_2_totalAvailableBalance);
    res.body.creditDebitMatch[1].senders[0].interestRate.should.equal(p_dc_2_interestRate);

    res.body.creditDebitMatch[2].bankName.should.equal(p_cc_3_bankName);
    res.body.creditDebitMatch[2].accountType.should.equal(p_cc_3_accountType);
    res.body.creditDebitMatch[2].accountTitle.should.equal(p_cc_3_accountTitle);
    res.body.creditDebitMatch[2].totalBalanceDue.should.equal(p_cc_3_totalBalanceDue);
    res.body.creditDebitMatch[2].interestRate.should.equal(p_cc_3_interestRate);
    res.body.creditDebitMatch[2].minMonthlyPayment.should.equal(p_cc_3_minMonthlyPayment);
    res.body.creditDebitMatch[2].totalOutstandingBalance.should.equal(p_cc_3_totalOutstandingBalance);
    res.body.creditDebitMatch[2].senders[0].bankName.should.equal(p_dc_3_bankName);
    res.body.creditDebitMatch[2].senders[0].accountType.should.equal(p_dc_3_accountType);
    res.body.creditDebitMatch[2].senders[0].accountTitle.should.equal(p_dc_3_accountTitle);
    res.body.creditDebitMatch[2].senders[0].contributingAmount.should.equal(p_dc_3_contributingAmount);
    res.body.creditDebitMatch[2].senders[0].totalAvailableBalance.should.equal(p_dc_3_totalAvailableBalance);
    res.body.creditDebitMatch[2].senders[0].interestRate.should.equal(p_dc_3_interestRate);
};

//becca’s data assertion
exports.be_dataValidator = function (res, be_user, be_cc_1_bankName, be_cc_1_accountType, be_cc_1_accountTitle, be_cc_1_totalBalanceDue, be_cc_1_interestRate, be_cc_1_minMonthlyPayment, be_cc_1_totalOutstandingBalance, be_dc_1_bankName, be_dc_1_accountType, be_dc_1_accountTitle, be_dc_1_contributingAmount, be_dc_1_totalAvailableBalance, be_dc_1_interestRate, be_cc_2_bankName, be_cc_2_accountType, be_cc_2_accountTitle, be_cc_2_totalBalanceDue, be_cc_2_apr, be_cc_2_minimumDue, be_cc_2_totalOutstandingBalance, be_dc_2_bankName, be_dc_2_accountType, be_dc_2_accountTitle, be_dc_2_contributingAmount, be_dc_2_totalAvailableBalance, be_dc_2_interestRate, be_cc_3_bankName, be_cc_3_accountType, be_cc_3_accountTitle, be_cc_3_totalBalanceDue, be_cc_3_apr, be_cc_3_minimumDue, be_cc_3_totalOutstandingBalance, be_dc_3_bankName, be_dc_3_accountType, be_dc_3_accountTitle, be_dc_3_contributingAmount, be_dc_3_totalAvailableBalance, be_dc_3_interestRate) {
    res.body.username.should.equal(be_user);
    res.body.creditDebitMatch[0].bankName.should.equal(be_cc_1_bankName);
    res.body.creditDebitMatch[0].accountType.should.equal(be_cc_1_accountType);
    res.body.creditDebitMatch[0].accountTitle.should.equal(be_cc_1_accountTitle);
    res.body.creditDebitMatch[0].totalBalanceDue.should.equal(be_cc_1_totalBalanceDue);
    res.body.creditDebitMatch[0].interestRate.should.equal(be_cc_1_interestRate);
    res.body.creditDebitMatch[0].minMonthlyPayment.should.equal(be_cc_1_minMonthlyPayment); res.body.creditDebitMatch[0].totalOutstandingBalance.should.equal(be_cc_1_totalOutstandingBalance);
    res.body.creditDebitMatch[0].senders[0].bankName.should.equal(be_dc_1_bankName);
    res.body.creditDebitMatch[0].senders[0].accountType.should.equal(be_dc_1_accountType);
    res.body.creditDebitMatch[0].senders[0].accountTitle.should.equal(be_dc_1_accountTitle);
    res.body.creditDebitMatch[0].senders[0].contributingAmount.should.equal(be_dc_1_contributingAmount);
    res.body.creditDebitMatch[0].senders[0].totalAvailableBalance.should.equal(be_dc_1_totalAvailableBalance);
    res.body.creditDebitMatch[0].senders[0].interestRate.should.equal(be_dc_1_interestRate);

    res.body.creditDebitMatch[1].bankName.should.equal(be_cc_2_bankName);
    res.body.creditDebitMatch[1].accountType.should.equal(be_cc_2_accountType);
    res.body.creditDebitMatch[1].accountTitle.should.equal(be_cc_2_accountTitle);
    res.body.creditDebitMatch[1].totalBalanceDue.should.equal(be_cc_2_totalBalanceDue);
    res.body.creditDebitMatch[1].apr.should.equal(be_cc_2_apr);
    res.body.creditDebitMatch[1].minimumDue.should.equal(be_cc_2_minimumDue);

    res.body.creditDebitMatch[1].totalOutstandingBalance.should.equal(be_cc_2_totalOutstandingBalance);
    res.body.creditDebitMatch[1].senders[0].bankName.should.equal(be_dc_2_bankName);
    res.body.creditDebitMatch[1].senders[0].accountType.should.equal(be_dc_2_accountType);
    res.body.creditDebitMatch[1].senders[0].accountTitle.should.equal(be_dc_2_accountTitle);
    res.body.creditDebitMatch[1].senders[0].contributingAmount.should.equal(be_dc_2_contributingAmount);
    res.body.creditDebitMatch[1].senders[0].totalAvailableBalance.should.equal(be_dc_2_totalAvailableBalance);
    res.body.creditDebitMatch[1].senders[0].interestRate.should.equal(be_dc_2_interestRate);

    res.body.creditDebitMatch[2].bankName.should.equal(be_cc_3_bankName);
    res.body.creditDebitMatch[2].accountType.should.equal(be_cc_3_accountType);
    res.body.creditDebitMatch[2].accountTitle.should.equal(be_cc_3_accountTitle);
    res.body.creditDebitMatch[2].totalBalanceDue.should.equal(be_cc_3_totalBalanceDue);
    res.body.creditDebitMatch[2].apr.should.equal(be_cc_3_apr);
    res.body.creditDebitMatch[2].minimumDue.should.equal(be_cc_3_minimumDue);
    res.body.creditDebitMatch[2].totalOutstandingBalance.should.equal(be_cc_3_totalOutstandingBalance);
    res.body.creditDebitMatch[2].senders[0].bankName.should.equal(be_dc_3_bankName);
    res.body.creditDebitMatch[2].senders[0].accountType.should.equal(be_dc_3_accountType);
    res.body.creditDebitMatch[2].senders[0].accountTitle.should.equal(be_dc_3_accountTitle);
    res.body.creditDebitMatch[2].senders[0].contributingAmount.should.equal(be_dc_3_contributingAmount);
    res.body.creditDebitMatch[2].senders[0].totalAvailableBalance.should.equal(be_dc_3_totalAvailableBalance);
    res.body.creditDebitMatch[2].senders[0].interestRate.should.equal(be_dc_3_interestRate);
};

//bob’s data assertion
exports.b_dataValidator = function (res, b_user, b_cc_1_bankName, b_cc_1_accountType, b_cc_1_accountTitle, b_cc_1_totalBalanceDue, b_cc_1_apr, b_cc_1_minimumDue, b_cc_1_totalOutstandingBalance, b_dc_1_bankName, b_dc_1_accountType, b_dc_1_accountTitle, b_dc_1_contributingAmount, b_dc_1_totalAvailableBalance, b_dc_1_interestRate, b_cc_2_bankName, b_cc_2_accountType, b_cc_2_accountTitle, b_cc_2_totalBalanceDue, b_cc_2_apr, b_cc_2_minimumDue, b_cc_2_totalOutstandingBalance, b_dc_2_bankName, b_dc_2_accountType, b_dc_2_accountTitle, b_dc_2_contributingAmount, b_dc_2_totalAvailableBalance, b_dc_2_interestRate, b_cc_3_bankName, b_cc_3_accountType, b_cc_3_accountTitle, b_cc_3_totalBalanceDue, b_cc_3_interestRate, b_cc_3_minMonthlyPayment, b_cc_3_totalOutstandingBalance, b_dc_3_bankName, b_dc_3_accountType, b_dc_3_accountTitle, b_dc_3_contributingAmount, b_dc_3_totalAvailableBalance, b_dc_3_interestRate, b_cc_4_bankName, b_cc_4_accountType, b_cc_4_accountTitle, b_cc_4_totalBalanceDue, b_cc_4_apr, b_cc_4_minimumDue, b_cc_4_totalOutstandingBalance, b_dc_4_bankName, b_dc_4_accountType, b_dc_4_accountTitle, b_dc_4_contributingAmount, b_dc_4_totalAvailableBalance, b_dc_4_interestRate) {
    res.body.username.should.equal(b_user);
    res.body.creditDebitMatch[0].bankName.should.equal(b_cc_1_bankName);
    res.body.creditDebitMatch[0].accountType.should.equal(b_cc_1_accountType);
    res.body.creditDebitMatch[0].accountTitle.should.equal(b_cc_1_accountTitle);
    res.body.creditDebitMatch[0].totalBalanceDue.should.equal(b_cc_1_totalBalanceDue);
    res.body.creditDebitMatch[0].apr.should.equal(b_cc_1_apr);
    res.body.creditDebitMatch[0].minimumDue.should.equal(b_cc_1_minimumDue); res.body.creditDebitMatch[0].totalOutstandingBalance.should.equal(b_cc_1_totalOutstandingBalance);
    res.body.creditDebitMatch[0].senders[0].bankName.should.equal(b_dc_1_bankName);
    res.body.creditDebitMatch[0].senders[0].accountType.should.equal(b_dc_1_accountType);
    res.body.creditDebitMatch[0].senders[0].accountTitle.should.equal(b_dc_1_accountTitle);
    res.body.creditDebitMatch[0].senders[0].contributingAmount.should.equal(b_dc_1_contributingAmount);
    res.body.creditDebitMatch[0].senders[0].totalAvailableBalance.should.equal(b_dc_1_totalAvailableBalance);
    res.body.creditDebitMatch[0].senders[0].interestRate.should.equal(b_dc_1_interestRate);

    res.body.creditDebitMatch[1].bankName.should.equal(b_cc_2_bankName);
    res.body.creditDebitMatch[1].accountType.should.equal(b_cc_2_accountType);
    res.body.creditDebitMatch[1].accountTitle.should.equal(b_cc_2_accountTitle);
    res.body.creditDebitMatch[1].totalBalanceDue.should.equal(b_cc_2_totalBalanceDue);
    res.body.creditDebitMatch[1].apr.should.equal(b_cc_2_apr);
    res.body.creditDebitMatch[1].minimumDue.should.equal(b_cc_2_minimumDue);

    res.body.creditDebitMatch[1].totalOutstandingBalance.should.equal(b_cc_2_totalOutstandingBalance);
    res.body.creditDebitMatch[1].senders[0].bankName.should.equal(b_dc_2_bankName);
    res.body.creditDebitMatch[1].senders[0].accountType.should.equal(b_dc_2_accountType);
    res.body.creditDebitMatch[1].senders[0].accountTitle.should.equal(b_dc_2_accountTitle);
    res.body.creditDebitMatch[1].senders[0].contributingAmount.should.equal(b_dc_2_contributingAmount);
    res.body.creditDebitMatch[1].senders[0].totalAvailableBalance.should.equal(b_dc_2_totalAvailableBalance);
    res.body.creditDebitMatch[1].senders[0].interestRate.should.equal(b_dc_2_interestRate);

    res.body.creditDebitMatch[2].bankName.should.equal(b_cc_3_bankName);
    res.body.creditDebitMatch[2].accountType.should.equal(b_cc_3_accountType);
    res.body.creditDebitMatch[2].accountTitle.should.equal(b_cc_3_accountTitle);
    res.body.creditDebitMatch[2].totalBalanceDue.should.equal(b_cc_3_totalBalanceDue);
    res.body.creditDebitMatch[2].interestRate.should.equal(b_cc_3_interestRate);
    res.body.creditDebitMatch[2].minMonthlyPayment.should.equal(b_cc_3_minMonthlyPayment);
    res.body.creditDebitMatch[2].totalOutstandingBalance.should.equal(b_cc_3_totalOutstandingBalance);
    res.body.creditDebitMatch[2].senders[0].bankName.should.equal(b_dc_3_bankName);
    res.body.creditDebitMatch[2].senders[0].accountType.should.equal(b_dc_3_accountType);
    res.body.creditDebitMatch[2].senders[0].accountTitle.should.equal(b_dc_3_accountTitle);
    res.body.creditDebitMatch[2].senders[0].contributingAmount.should.equal(b_dc_3_contributingAmount);
    res.body.creditDebitMatch[2].senders[0].totalAvailableBalance.should.equal(b_dc_3_totalAvailableBalance);
    res.body.creditDebitMatch[2].senders[0].interestRate.should.equal(b_dc_3_interestRate);

    res.body.creditDebitMatch[3].bankName.should.equal(b_cc_4_bankName);
    res.body.creditDebitMatch[3].accountType.should.equal(b_cc_4_accountType);
    res.body.creditDebitMatch[3].accountTitle.should.equal(b_cc_4_accountTitle);
    res.body.creditDebitMatch[3].totalBalanceDue.should.equal(b_cc_4_totalBalanceDue);
    res.body.creditDebitMatch[3].apr.should.equal(b_cc_4_apr);
    res.body.creditDebitMatch[3].minimumDue.should.equal(b_cc_4_minimumDue);
    res.body.creditDebitMatch[3].totalOutstandingBalance.should.equal(b_cc_4_totalOutstandingBalance);
    res.body.creditDebitMatch[3].senders[0].bankName.should.equal(b_dc_4_bankName);
    res.body.creditDebitMatch[3].senders[0].accountType.should.equal(b_dc_4_accountType);
    res.body.creditDebitMatch[3].senders[0].accountTitle.should.equal(b_dc_4_accountTitle);
    res.body.creditDebitMatch[3].senders[0].contributingAmount.should.equal(b_dc_4_contributingAmount);
    res.body.creditDebitMatch[3].senders[0].totalAvailableBalance.should.equal(b_dc_4_totalAvailableBalance);
    res.body.creditDebitMatch[3].senders[0].interestRate.should.equal(b_dc_4_interestRate);

};

exports.userValidator = function (res, user) {
    res.body.username.should.equal(user);
};


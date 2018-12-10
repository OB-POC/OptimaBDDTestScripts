Feature:To provide best LBG offers to users

Scenario Outline: Best LBG offer for higher AER Annual return savings for debit card when debit card balance is greater than credit card

Given user logs in to openbanking "<url>" and enters the valid "<username>" and "<password>"

When user should navigate to home page click on optmize

And user should navigate to payout screen and click on Agree and pay

Then user should navigate to offering screen where message will be displayed for LBG Savings offering to Account 

And verify LBG offers high rate AER of "0.28" annual return savings for the user

Examples:
| url | username |password|
| SIT | alice    | d29uZGVybGFuZA== |



Scenario Outline: Best LBG offer for lower APR Annual return savings for credit card when credit card outstanding balance is greater than debit card

Given user logs in to openbanking "<url>" and enters the valid "<username>" and "<password>"

When user should navigate to home page click on optmize

And user should navigate to payout screen and click on Agree and pay

Then user should navigate to offering screen where message will be displayed for LBG Savings offering to Account 

And verify LBG offers low rate APR of "21.8" annual return savings for the user

Examples:
| url | username |password|
| DEV | john    | ZG9l  |




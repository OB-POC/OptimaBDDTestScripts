Feature: As an end user i need to merge all/some accounts into a new LBG account


Scenario Outline: merge all account into new LBG account

Given user logs in to openbanking "<url>" and enters the valid "<username>" and "<password>"
And navigates to Wallet page 
When user clicks on optmize should land on optmize screen
And click on port account so that user can select the all existing accounts to transfer funds to LBG account
And click yes to confirm merge account and transfer successfull message should be displayed
Then user should view transfered funds in LBG account from existing accounts
And user should not view the other accounts which is ported in the Wallet screen
And user logouts the application

Examples:
 | url | username |password|
 | DEV | alice    | d29uZGVybGFuZA== |
 | DEV | john    | ZG9l  |


# Scenario Outline: merge all account into exsting barclays account

# Given user logs in to openbanking "<url>" and enters the valid "<username>" and "<password>"
# And navigates to Wallet page 
# When user clicks on optmize should land on optmize screen
# And click on port account so that user can select existing account to transfer funds to existing Barclays account
# And click yes to confirm merge existing account and transfer successfull message should be displayed
# Then user should view transfered funds in ported account from existing selected account
# And user should not view the other account which is ported in the Wallet screen
# And user logouts the application

# Examples:
# | url | username |password|
# | DEV | alice    | d29uZGVybGFuZA== |
# | DEV | john    | ZG9l  |

# Scenario Outline: Finiancial advisory for LBG account
# Given user logs in to openbanking "<url>" and enters the valid "<username>" and "<password>"
# And navigates to Wallet page 
# When user clicks on optmize should land on optmize screen
# And click on port account so that user can select any one existing account to transfer funds to LBG account
# And click yes to confirm merge account and transfer successfull message should be displayed
# And click on Finiancial advisory
# Then user navigates to finacial advisory screen and view the message for more saving for LBG account
# And user logouts the application

# Examples:
# | url | username |password|
# | DEV | alice    | d29uZGVybGFuZA== |
# | DEV | john    | ZG9l  |


# Scenario Outline: standalone flow for Finiancial advisory for LBG account 
# Given user logs in to openbanking "<url>" and enters the valid "<username>" and "<password>"
# And navigates to Wallet page 
# When user clicks on optmize should land on optmize screen
# Then click on Finiancial advisory and view the finacial advice information for the account
# And user logouts the application

# Examples:
# | url | username |password|
# | DEV | alice    | d29uZGVybGFuZA== |
# | DEV | john    | ZG9l  |

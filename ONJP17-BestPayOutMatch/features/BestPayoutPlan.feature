@BestMatch
Feature: Test Best Payout Plan
    Description: The purpose of this feature is to maximise one's savings and minimise one's expenses by using lower AER debit balance to pay off higher APR credit outstandings considering the minimum balance and optimizing the number of transactions

    #1
    Scenario: User opts for best payout plan whose credit outstanding is less than debit balance with different APR and AER
        Given I authenticate "emma"
        When I try to retrieve best payout plan for "emma"
        Then I should get successful response for "emma"

    #2
    Scenario: User opts for best payout plan whose credit outstanding is less than debit balance with same APR and AER
        Given I authenticate "paul"
        When I try to retrieve best payout plan for "paul"
        Then I should get successful response for "paul"

    #3
    Scenario Outline: User opts for best payout plan, whose credit outstanding is more than debit balance with different APR and AER
        Given I authenticate <user>
        When I try to retrieve best payout plan for <user>
        Then I should get successful response for <user>
        Examples:
            | user    |
            | "becca" |
            | "bob"   |
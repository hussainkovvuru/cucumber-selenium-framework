
Feature: Login Feature
	Verify the login page of the application
	    
Scenario Outline: Login as authenticated user 
	Given I am on the home page 
	Then Enter the username "<username>" and password "<password>" credentials
	And click on the login button
	Then successful message is displayed
	Then close the browser
Examples:
| usename | password   |
| hussain | abc45679   |
| user1   | husenfje896|
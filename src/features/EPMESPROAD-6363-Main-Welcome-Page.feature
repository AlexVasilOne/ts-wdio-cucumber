Feature: EPMESPROAD-6363 Implement the Main Welcome Page
Background: 
  Given I open 'welcomePage' 
    
Scenario: EPMESPROAD-6737 New user's view - welcome page
  When I login as 'newUser' 
   Then I expect 'welcomePage' 'uploadNewDataset' should 'to be' displayed
     
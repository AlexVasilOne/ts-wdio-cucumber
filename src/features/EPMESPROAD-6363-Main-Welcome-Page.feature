Feature: EPMESPROAD-6363 Implement the Main Welcome Page

Scenario Outline: EPMESPROAD-6737 welcome page content
  Given I open 'welcomePage' 
  When I login as '<user>'
  #page contains common elements
  Then I expect 'welcomePage' -> 'uploadNewDataset' should 'to be' displayed
    And I expect 'welcomePage' -> 'logo' should 'to be' displayed
    And I expect 'welcomePage' -> 'userMessage' should 'to be' displayed
    And I expect 'welcomePage' -> 'userMessage' has text 'Hello User, Welcome to QAI Assure!'
  #any user can proceed creating new DataSet
  When I click 'welcomePage' -> 'uploadNewDataset'
  Then I expect page title should be 'AIST QAI - Upload Dataset'

  Examples:
  |user|
  |newUser|
  |userWithPermissions|

Scenario: EPMESPROAD-6737 newUser can't see previous loaded files component
  Given I open 'welcomePage'
  When I login as 'newUser'
  Then I expect 'welcomePage' -> 'previousDataset' should 'not to be' displayed

Scenario: EPMESPROAD-6739 Existing user's view - display the previously uploaded files





   
     
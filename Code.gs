var SCRIPT_NAME = "Announcements_Master_Sunday_Bound_Script"
var SCRIPT_VERSION = "v0.dev_ajr"

function onOpen() {

  var ui = DocumentApp.getUi()

  ui
    .createMenu('CloudFire')
      .addItem('Add Week', 'master_insertWeeks')
      .addItem('Add Month', 'master_insertMonth')

//      .addSeparator() // TODO - Reenable trello.com/c/BRJyMUVI
//      .addItem('Archive', 'masterToArchive')
////  .addItem('Setup Archive', 'setup')

      .addSeparator()
      .addItem('Format Document', 'format_master')

//      .addSeparator()
//      .addItem('Automation', 'setupAutomation_master') // TODO - Reenable trello.com/c/AZvbyHCJ

      .addSubMenu(
        ui.createMenu('Instructions...')
          .addItem('Document Overview', 'showInstructions_Document')
          .addItem('Recurring Content', 'showInstructions_RecurringContent')
      )
      
      .addToUi();

//  //Disabled! This will be moved to a global config 
//  //check to see if the archive doc has been set, if not, warn and ask the to run Archive Setup
//  //but build the menu first or there won't be one if the script times out waiting on the user to click OK
//  if( ! checkSetup()){
//    var archiveSetupWarning = CacheService.getUserCache().get('archiveSetupWarning');
//    if( ! archiveSetupWarning){
//      DocumentApp.getUi().alert('Setup Required', "\
//Archiving is disabled.\n\
//Run the Archive Setup from the [ Custom Menu ] to enable archiving.\n\
//\n(And since I'm so nice, I won't bug you about it for a couple hours.)\
//", DocumentApp.getUi().ButtonSet.OK);
//      CacheService.getUserCache().put('archiveSetupWarning', true, 2*60*60);
//    }
//  }    

}

function master_insertWeeks()                {Announcements.master_insertWeeks()}
function master_insertMonth()                {Announcements.master_insertMonth()}

// function setup()                             {Announcements.setup()}
// function masterToArchive()                   {Announcements.masterToArchive()}

function format_master()                     {Announcements.format_master()}

// function setupAutomation_master()            {Announcements.setupAutomation_master()}

function showInstructions_Document()         {Announcements.showInstructions_Document()}
function showInstructions_RecurringContent() {Announcements.showInstructions_RecurringContent()}
var SCRIPT_NAME = "Announcements_Master_Sunday_Bound_Script"
var SCRIPT_VERSION = "v0.dev_ajr"

function onOpen() {

  var ui = DocumentApp.getUi()

  ui
    .createMenu('CloudFire')
      .addItem('Add Week', 'master_insertWeeks')
      .addItem('Add Month', 'master_insertMonth')
      .addSeparator()
      .addItem('Format Document', 'format_master')
      .addSubMenu(
        ui.createMenu('Instructions...')
          .addItem('Document Overview', 'showInstructions_Document')
          .addItem('Recurring Content', 'showInstructions_RecurringContent')
      )      
      .addToUi();
}

function master_insertWeeks()                {Announcements.master_insertWeeks()}
function master_insertMonth()                {Announcements.master_insertMonth()}

function format_master()                     {Announcements.format_master()}

function showInstructions_Document()         {Announcements.showInstructions_Document()}
function showInstructions_RecurringContent() {Announcements.showInstructions_RecurringContent()}
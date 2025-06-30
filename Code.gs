/**
 * === Approval Workflow Hub Add-on ===
 * Author: [Your Name]
 * License: MIT
 * Entry Point: Main Menu
 */

function onOpen() {
  SpreadsheetApp.getUi()
    .createMenu('Approvals Menu')
    .addItem('Setup Approval Forms (Wizard)', 'openApprovalFormBuilderSidebar')
    .addSeparator()
    .addItem('Submit Leave Request (Interactive)', 'submitLeaveRequest')
    .addItem('Open Leave Request Form', 'openLeaveRequestForm')
    .addSeparator()
    .addItem('Submit Expense Claim (Interactive)', 'submitExpenseClaim')
    .addItem('Open Expense Claim Form', 'openExpenseClaimForm')
    .addSeparator()
    .addItem('Submit Purchase Approval (Interactive)', 'submitPurchaseApproval')
    .addItem('Open Purchase Approval Form', 'openPurchaseApprovalForm')
    .addSeparator()
    .addItem('Submit Document Sign-off (Interactive)', 'submitDocumentSignOff')
    .addItem('Open Document Sign-off Form', 'openDocumentSignOffForm')
    .addSeparator()
    .addItem('View Logs', 'viewLogs')
    .addToUi();
}

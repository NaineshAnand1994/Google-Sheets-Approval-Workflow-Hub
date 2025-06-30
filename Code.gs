/**
 * === Approval Workflow Hub Add-on ===
 * Author: [Your Name]
 * License: MIT
 *
 * Supports:
 * - Leave Requests
 * - Expense Claims
 * - Purchase Approvals
 * - Document Sign-offs
 *
 * Each with:
 * - Interactive in-Sheet submission
 * - Link to Google Form
 * - Email to approver
 * - Logs tab
 */

function onOpen() {
  const ui = SpreadsheetApp.getUi();
  ui.createMenu('Approvals Menu')
    // Leave
    .addItem('Submit Leave Request (Interactive)', 'submitLeaveRequest')
    .addItem('Open Leave Request Form', 'openLeaveRequestForm')
    // Expense
    .addItem('Submit Expense Claim (Interactive)', 'submitExpenseClaim')
    .addItem('Open Expense Claim Form', 'openExpenseClaimForm')
    // Purchase
    .addItem('Submit Purchase Approval (Interactive)', 'submitPurchaseApproval')
    .addItem('Open Purchase Approval Form', 'openPurchaseApprovalForm')
    // Document
    .addItem('Submit Document Sign-off (Interactive)', 'submitDocumentSignOff')
    .addItem('Open Document Sign-off Form', 'openDocumentSignOffForm')
    .addSeparator()
    .addItem('View Logs', 'viewLogs')
    .addToUi();
}

/**
 * === Interactive Submission Functions ===
 */

// LEAVE
function submitLeaveRequest() {
  const ui = SpreadsheetApp.getUi();
  const employee = prompt('Your Name');
  const dates = prompt('Leave Dates (e.g. 2024-07-01 to 2024-07-05)');
  const reason = prompt('Reason');

  const approver = getSetting('LeaveApproverEmail');
  appendToSheet('LeaveRequests', [employee, dates, reason, 'Pending', approver, '']);
  sendApprovalEmail('Leave Request', employee, approver);
  logAction('Leave Request', employee, 'Submitted', approver, '');
  ui.alert('Leave request submitted!');
}

// EXPENSE
function submitExpenseClaim() {
  const ui = SpreadsheetApp.getUi();
  const employee = prompt('Your Name');
  const amount = prompt('Amount');
  const description = prompt('Description');

  const approver = getSetting('ExpenseApproverEmail');
  appendToSheet('ExpenseClaims', [employee, amount, description, 'Pending', approver, '']);
  sendApprovalEmail('Expense Claim', employee, approver);
  logAction('Expense Claim', employee, 'Submitted', approver, '');
  ui.alert('Expense claim submitted!');
}

// PURCHASE
function submitPurchaseApproval() {
  const ui = SpreadsheetApp.getUi();
  const employee = prompt('Your Name');
  const item = prompt('Item/Service');
  const amount = prompt('Amount');
  const reason = prompt('Reason');

  const approver = getSetting('PurchaseApproverEmail');
  appendToSheet('PurchaseApprovals', [employee, item, amount, reason, 'Pending', approver, '']);
  sendApprovalEmail('Purchase Approval', employee, approver);
  logAction('Purchase Approval', employee, 'Submitted', approver, '');
  ui.alert('Purchase approval submitted!');
}

// DOCUMENT SIGN-OFF
function submitDocumentSignOff() {
  const ui = SpreadsheetApp.getUi();
  const employee = prompt('Your Name');
  const documentName = prompt('Document Name');
  const reason = prompt('Reason for Sign-off');

  const approver = getSetting('DocumentApproverEmail');
  appendToSheet('DocumentSignOffs', [employee, documentName, reason, 'Pending', approver, '']);
  sendApprovalEmail('Document Sign-off', employee, approver);
  logAction('Document Sign-off', employee, 'Submitted', approver, '');
  ui.alert('Document sign-off request submitted!');
}

/**
 * === Open Google Forms ===
 */

function openLeaveRequestForm() {
  openFormURL('LeaveRequestFormURL');
}

function openExpenseClaimForm() {
  openFormURL('ExpenseClaimFormURL');
}

function openPurchaseApprovalForm() {
  openFormURL('PurchaseApprovalFormURL');
}

function openDocumentSignOffForm() {
  openFormURL('DocumentSignOffFormURL');
}

function openFormURL(settingKey) {
  const url = getSetting(settingKey);
  if (url) {
    const html = HtmlService.createHtmlOutput(`<script>window.open("${url}");google.script.host.close();</script>`);
    SpreadsheetApp.getUi().showModalDialog(html, 'Open Form');
  } else {
    SpreadsheetApp.getUi().alert('Form URL not found in Settings!');
  }
}

/**
 * === Helper Functions ===
 */

function prompt(question) {
  const ui = SpreadsheetApp.getUi();
  const response = ui.prompt(question);
  if (response.getSelectedButton() !== ui.Button.OK) throw new Error('Cancelled');
  return response.getResponseText();
}

function getSetting(key) {
  const sheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName('Settings');
  if (!sheet) throw new Error('Settings sheet missing!');
  const data = sheet.getDataRange().getValues();
  for (let i = 1; i < data.length; i++) {
    if (data[i][0] === key) return data[i][1];
  }
  return '';
}

function appendToSheet(sheetName, values) {
  const sheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName(sheetName);
  if (!sheet) throw new Error(`${sheetName} sheet missing!`);
  sheet.appendRow(values);
}

function sendApprovalEmail(type, employee, approver) {
  const subjectTemplate = getSetting('ApprovalEmailSubject') || `Approval Needed: ${type}`;
  const bodyTemplate = getSetting('ApprovalEmailBodyTemplate') || 
    `Hello, please review this request.`;

  const subject = subjectTemplate.replace('{{Type}}', type);
  const body = bodyTemplate
    .replace('{{Type}}', type)
    .replace('{{Employee}}', employee)
    + `

[Approve Link - Placeholder]
[Reject Link - Placeholder]
`;

  if (approver) {
    GmailApp.sendEmail(approver, subject, body);
  }
}

function logAction(type, employee, status, approver, comments) {
  const sheet = getOrCreateLogSheet();
  sheet.appendRow([new Date(), type, employee, status, approver, comments]);
}

function getOrCreateLogSheet() {
  const ss = SpreadsheetApp.getActiveSpreadsheet();
  let sheet = ss.getSheetByName('Logs');
  if (!sheet) {
    sheet = ss.insertSheet('Logs');
    sheet.appendRow(['Timestamp', 'RequestType', 'Employee', 'StatusChange', 'Approver', 'Comments']);
  }
  return sheet;
}

/**
 * === View Logs Shortcut ===
 */
function viewLogs() {
  const sheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName('Logs');
  if (sheet) SpreadsheetApp.setActiveSheet(sheet);
}


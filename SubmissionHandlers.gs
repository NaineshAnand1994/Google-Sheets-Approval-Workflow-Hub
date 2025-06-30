/**
 * === Interactive In-Sheet Submissions ===
 * Prompts user for fields and writes to tabs
 */

function simplePrompt(question) {
  const ui = SpreadsheetApp.getUi();
  const result = ui.prompt(question);
  if (result.getSelectedButton() !== ui.Button.OK) throw new Error('Cancelled');
  return result.getResponseText();
}

function appendToSheet(sheetName, values) {
  const sheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName(sheetName);
  if (!sheet) throw new Error(`${sheetName} sheet missing!`);
  sheet.appendRow(values);
}

function submitLeaveRequest() {
  const employee = simplePrompt('Your Name');
  const dates = simplePrompt('Leave Dates (e.g. 2024-07-01 to 2024-07-05)');
  const reason = simplePrompt('Reason');
  const approver = getSettingValue('LeaveApproverEmail');

  appendToSheet('LeaveRequests', [employee, dates, reason, 'Pending', approver, '']);
  sendApprovalEmail('Leave Request', employee, approver);
  logAction('Leave Request', employee, 'Submitted', approver, '');
  SpreadsheetApp.getUi().alert('Leave request submitted!');
}

function submitExpenseClaim() {
  const employee = simplePrompt('Your Name');
  const amount = simplePrompt('Amount');
  const description = simplePrompt('Description');
  const approver = getSettingValue('ExpenseApproverEmail');

  appendToSheet('ExpenseClaims', [employee, amount, description, 'Pending', approver, '']);
  sendApprovalEmail('Expense Claim', employee, approver);
  logAction('Expense Claim', employee, 'Submitted', approver, '');
  SpreadsheetApp.getUi().alert('Expense claim submitted!');
}

function submitPurchaseApproval() {
  const employee = simplePrompt('Your Name');
  const item = simplePrompt('Item/Service');
  const amount = simplePrompt('Amount');
  const reason = simplePrompt('Reason');
  const approver = getSettingValue('PurchaseApproverEmail');

  appendToSheet('PurchaseApprovals', [employee, item, amount, reason, 'Pending', approver, '']);
  sendApprovalEmail('Purchase Approval', employee, approver);
  logAction('Purchase Approval', employee, 'Submitted', approver, '');
  SpreadsheetApp.getUi().alert('Purchase approval submitted!');
}

function submitDocumentSignOff() {
  const employee = simplePrompt('Your Name');
  const documentName = simplePrompt('Document Name');
  const reason = simplePrompt('Reason for Sign-off');
  const approver = getSettingValue('DocumentApproverEmail');

  appendToSheet('DocumentSignOffs', [employee, documentName, reason, 'Pending', approver, '']);
  sendApprovalEmail('Document Sign-off', employee, approver);
  logAction('Document Sign-off', employee, 'Submitted', approver, '');
  SpreadsheetApp.getUi().alert('Document sign-off request submitted!');
}

/**
 * === Open Forms (from Settings) ===
 */

function openFormURL(settingKey) {
  const url = getSettingValue(settingKey);
  if (url) {
    const html = HtmlService.createHtmlOutput(`<script>window.open("${url}");google.script.host.close();</script>`);
    SpreadsheetApp.getUi().showModalDialog(html, 'Open Form');
  } else {
    SpreadsheetApp.getUi().alert('Form URL not found in Settings!');
  }
}

function openLeaveRequestForm() { openFormURL('LeaveRequestFormURL'); }
function openExpenseClaimForm() { openFormURL('ExpenseClaimFormURL'); }
function openPurchaseApprovalForm() { openFormURL('PurchaseApprovalFormURL'); }
function openDocumentSignOffForm() { openFormURL('DocumentSignOffFormURL'); }

/**
 * === Logging ===
 */
function getOrCreateLogSheet() {
  const ss = SpreadsheetApp.getActiveSpreadsheet();
  let sheet = ss.getSheetByName('Logs');
  if (!sheet) {
    sheet = ss.insertSheet('Logs');
    sheet.appendRow(['Timestamp', 'RequestType', 'Employee', 'StatusChange', 'Approver', 'Comments']);
  }
  return sheet;
}

function logAction(type, employee, status, approver, comments) {
  const sheet = getOrCreateLogSheet();
  sheet.appendRow([new Date(), type, employee, status, approver, comments]);
}

function viewLogs() {
  const ss = SpreadsheetApp.getActiveSpreadsheet();
  const sheet = ss.getSheetByName('Logs');
  if (sheet) ss.setActiveSheet(sheet);
}


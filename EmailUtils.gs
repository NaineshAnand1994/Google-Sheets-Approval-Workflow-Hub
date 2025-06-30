/**
 * === Email Utilities ===
 * Send approval emails with Approve/Reject links
 */

function sendApprovalEmail(type, employee, approver) {
  const subjectTemplate = getSettingValue('ApprovalEmailSubject') || `Approval Needed: ${type}`;
  const bodyTemplate = getSettingValue('ApprovalEmailBodyTemplate') || 
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


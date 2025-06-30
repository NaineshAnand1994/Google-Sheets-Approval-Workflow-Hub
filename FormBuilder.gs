/**
 * === Form Builder Wizard: Server-side Functions ===
 * Author: [Your Name]
 * License: MIT
 */

/**
 * Opens the Sidebar in the Google Sheet
 */
function openApprovalFormBuilderSidebar() {
  const html = HtmlService.createHtmlOutputFromFile('FormBuilderSidebar')
    .setTitle('Approval Form Builder');
  SpreadsheetApp.getUi().showSidebar(html);
}

/**
 * Receives config from Sidebar and creates the Google Form
 * - Saves URL, Questions JSON, and Folder ID in Settings tab
 */
function createApprovalFormInteractive(formConfig) {
  if (!formConfig) throw new Error('No form configuration received.');

  const approvalType = formConfig.approvalType;
  const formName = formConfig.formName;
  const folderId = formConfig.folderId;
  const questions = formConfig.questions;

  if (!approvalType || !formName || !questions || questions.length === 0) {
    throw new Error('Incomplete form configuration.');
  }

  // === Create Form ===
  let form;
  if (folderId) {
    const folder = DriveApp.getFolderById(folderId);
    form = FormApp.create(formName);
    const file = DriveApp.getFileById(form.getId());
    folder.addFile(file);
    DriveApp.getRootFolder().removeFile(file);
  } else {
    form = FormApp.create(formName);
  }

  // === Add Questions ===
  questions.forEach(q => {
    let item;
    if (q.type === 'ShortAnswer') {
      item = form.addTextItem().setTitle(q.title);
    } else if (q.type === 'Paragraph') {
      item = form.addParagraphTextItem().setTitle(q.title);
    } else if (q.type === 'MultipleChoice') {
      item = form.addMultipleChoiceItem().setTitle(q.title)
                   .setChoiceValues(q.choices || []);
    }
    if (item && q.required) item.setRequired(true);
  });

  const formUrl = form.getPublishedUrl();

  // === Save in Settings ===
  setSettingValue(`${approvalType}FormURL`, formUrl);
  setSettingValue(`${approvalType}FormQuestions`, JSON.stringify(questions));
  if (folderId) setSettingValue(`${approvalType}FormFolderID`, folderId);

  return { success: true, url: formUrl };
}


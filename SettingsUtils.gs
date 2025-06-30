/**
 * === Settings Utilities ===
 * Read/Write from Settings tab
 */

function getSettingsSheet() {
  const ss = SpreadsheetApp.getActiveSpreadsheet();
  const sheet = ss.getSheetByName('Settings');
  if (!sheet) throw new Error('Settings sheet is missing!');
  return sheet;
}

function getSettingValue(key) {
  const data = getSettingsSheet().getDataRange().getValues();
  for (let i = 1; i < data.length; i++) {
    if (data[i][0] === key) return data[i][1];
  }
  return '';
}

function setSettingValue(key, value) {
  const sheet = getSettingsSheet();
  const data = sheet.getDataRange().getValues();
  let found = false;
  for (let i = 1; i < data.length; i++) {
    if (data[i][0] === key) {
      sheet.getRange(i + 1, 2).setValue(value);
      found = true;
      break;
    }
  }
  if (!found) {
    sheet.appendRow([key, value]);
  }
}


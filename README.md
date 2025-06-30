# ✅ Google Sheets Approval Workflow Hub (Google Apps Script)

A Google Apps Script-powered Google Sheets Add-on that automates **multiple types of approval workflows** for any team, all in one place.

⭐ Supports **Leave Requests, Expense Claims, Purchase Approvals, and Document Sign-offs**  
⭐ Lets users submit requests **via Google Forms** OR **via an interactive in-Sheet form**  
⭐ Automatically emails approvers for review  
⭐ Updates approval status in Google Sheets  
⭐ Logs all actions for auditing

---

## 🚀 Features

✅ One-stop approval hub in Google Sheets  
✅ Handles multiple approval types:
- Leave Requests
- Expense Claims
- Purchase Approvals
- Document Sign-offs  

✅ Two submission modes for each type:
- **Google Form Link**: for external/remote users
- **Interactive in-Sheet Form**: for direct spreadsheet use

✅ Auto-assigns approvers based on Settings  
✅ Sends approval request emails with Approve/Reject links  
✅ Updates status in Google Sheets tabs  
✅ Notifies requester of decision  
✅ Maintains a complete Logs tab

---

## ⚙️ How It Works

- User opens the Google Sheet
- Chooses from a custom menu:
  - Submit Leave Request (Interactive)
  - Open Leave Request Form
  - Submit Expense Claim (Interactive)
  - Open Expense Claim Form
  - etc.
- Interactive mode: guided questions in sidebar/dialog
- Form mode: opens the actual Google Form
- All submissions land in structured tabs in the Sheet
- Script emails approver with Approve/Reject options
- Approver's click updates status in Sheet automatically
- Notifies requester of approval decision
- Logs all actions in a Logs tab

---

## 📌 Example Google Sheets Tabs

✅ **Settings**  
Controls all approvers, forms, templates.

✅ **LeaveRequests**  
Stores leave request submissions.

✅ **ExpenseClaims**  
Stores expense claims.

✅ **PurchaseApprovals**  
Stores purchase requests.

✅ **DocumentSignOffs**  
Stores document sign-off requests.

✅ **Logs**  
Tracks all approvals and changes for auditing.

---

## 📌 Example Settings Tab

| Parameter                           | Value                                     |
|--------------------------------------|-------------------------------------------|
| AdminEmail                          | hr@company.com                           |
| LeaveApproverEmail                  | manager1@company.com                     |
| ExpenseApproverEmail                | finance@company.com                      |
| PurchaseApproverEmail               | procurement@company.com                  |
| DocumentApproverEmail               | legal@company.com                        |
| LeaveRequestFormURL                 | https://forms.gle/leaveFormLink          |
| ExpenseClaimFormURL                 | https://forms.gle/expenseFormLink        |
| PurchaseApprovalFormURL             | https://forms.gle/purchaseFormLink       |
| DocumentSignOffFormURL              | https://forms.gle/documentFormLink       |
| ApprovalEmailSubject                | Approval Needed: {{Type}} Request        |
| ApprovalEmailBodyTemplate           | Hello {{Approver}}, please review {{Type}} for {{Employee}}. Click Approve or Reject. |

✅ Editable by HR/admin without touching code.

---

## 📌 Example LeaveRequests Tab

| EmployeeName | Dates         | Reason     | Status   | Approver    | Comments  |
|---------------|---------------|------------|----------|-------------|-----------|
| Alice         | 2024-07-01-05 | Vacation   | Pending  | manager1@company.com | |

✅ Other types have their own tabs with tailored columns.

---

## 🛠️ Setup Instructions

1️⃣ Make a Google Sheet with these tabs:
- Settings
- LeaveRequests
- ExpenseClaims
- PurchaseApprovals
- DocumentSignOffs
- Logs

2️⃣ Fill in the **Settings** tab as shown above.

3️⃣ Add your Google Form links for each type.

4️⃣ Open **Apps Script Editor**:
- Paste the code from `Code.gs`.
- Link it to your Google Sheet.

5️⃣ Save and authorize the script.

6️⃣ Refresh your Google Sheet to see the **Approvals Menu**.

7️⃣ Click any menu item to submit or open forms.

---

## 💡 Example Use Cases

✅ HR leave approvals  
✅ Finance expense approvals  
✅ Procurement purchase requests  
✅ Legal document sign-offs  
✅ Any manager-employee workflow  

---

## 📌 Advanced Ideas for Future

⭐ Multi-level approvals (e.g., HR → Manager)  
⭐ SLA tracking and auto-reminders  
⭐ Custom approval dashboards  
⭐ PDF generation for approved requests  
⭐ Slack or Google Chat notifications

---

## 💻 Code

See [Code.gs](Code.gs) for the complete Google Apps Script implementation.

---

## 🪪 License

MIT License

---

## ❤️ Author

[Your Name or GitHub Profile Link]

# ✅ Google Sheets Approval Workflow Hub (Google Apps Script)

A Google Apps Script-powered Google Sheets Add-on that automates **multiple types of approval workflows** for any team—all in one place.

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
✅ Sends approval request emails with Approve/Reject links (placeholder-ready)  
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
- Interactive mode: guided questions in prompts (upgradable to sidebar)
- Form mode: opens the actual Google Form
- All submissions land in structured tabs in the Sheet
- Script emails approver with Approve/Reject links (placeholder for Web App integration)
- Approver's action updates status in Sheet
- Notifies requester of decision
- Logs all actions in a Logs tab

---

## 🗂️ 📌 Example Google Sheets Tabs

✅ **Settings**  
Controls all approvers, form links, and email templates.

✅ **LeaveRequests**  
Stores leave request submissions.

✅ **ExpenseClaims**  
Stores expense claims.

✅ **PurchaseApprovals**  
Stores purchase requests.

✅ **DocumentSignOffs**  
Stores document sign-off requests.

✅ **Logs**  
Tracks all submissions and approvals for auditing.

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

✅ This tab is fully editable by HR/admin without touching code.

---

## 📌 Required Sheet Columns for Each Request Type

Below are the **required columns** you should create in your Google Sheet for each approval type.  
These match the fields the **interactive prompts** will ask for *and* what you should include in the linked **Google Forms**.  

---

### ✅ **LeaveRequests Tab**

| Column         | Example Value             | Description                                |
|-----------------|--------------------------|--------------------------------------------|
| EmployeeName    | Alice                     | Name of the employee making the request   |
| Dates           | 2024-07-01 to 2024-07-05 | Leave period requested                     |
| Reason          | Vacation                  | Reason for leave                           |
| Status          | Pending                   | Approval status (Pending/Approved/Rejected) |
| Approver        | manager1@company.com      | Email of assigned approver                |
| Comments        |                           | Optional comments by approver             |

---

### ✅ **ExpenseClaims Tab**

| Column         | Example Value             | Description                                |
|-----------------|--------------------------|--------------------------------------------|
| EmployeeName    | Bob                       | Name of the employee making the claim     |
| Amount          | 250                       | Amount being claimed                      |
| Description     | Travel expenses          | Description of the expense                |
| Status          | Pending                   | Approval status                            |
| Approver        | finance@company.com       | Email of assigned approver                |
| Comments        |                           | Optional comments by approver             |

---

### ✅ **PurchaseApprovals Tab**

| Column         | Example Value             | Description                                |
|-----------------|--------------------------|--------------------------------------------|
| EmployeeName    | Carol                     | Name of requester                          |
| Item/Service    | Laptop                    | Item or service to purchase                |
| Amount          | 1200                      | Cost estimate                              |
| Reason          | New hire equipment       | Justification for purchase                 |
| Status          | Pending                   | Approval status                            |
| Approver        | procurement@company.com   | Email of assigned approver                |
| Comments        |                           | Approver's comments                        |

---

### ✅ **DocumentSignOffs Tab**

| Column         | Example Value             | Description                                |
|-----------------|--------------------------|--------------------------------------------|
| EmployeeName    | David                     | Person requesting sign-off                |
| DocumentName    | NDA Agreement            | Name of the document                      |
| Reason          | Vendor onboarding        | Purpose for sign-off                      |
| Status          | Pending                   | Approval status                            |
| Approver        | legal@company.com         | Email of assigned approver                |
| Comments        |                           | Approver's comments                        |

---

✅ **Tip:**  
> Make sure your **Google Forms** ask for these same fields so both submission methods (Forms + Interactive prompts) match perfectly!

---

## 🛠️ Setup Instructions

1️⃣ Make a Google Sheet with these tabs:
- Settings
- LeaveRequests
- ExpenseClaims
- PurchaseApprovals
- DocumentSignOffs
- Logs

2️⃣ Fill in the **Settings** tab exactly as shown above.

3️⃣ Add your Google Form links for each type.

4️⃣ Open **Apps Script Editor**:
- Paste the code from `Code.gs`.
- Link it to your Google Sheet.

5️⃣ Save and authorize the script.

6️⃣ Refresh your Google Sheet to see the **Approvals Menu**.

7️⃣ Click any menu item to submit a request or open a form.

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

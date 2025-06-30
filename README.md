# ✅ Google Sheets Approval Workflow Hub + Dynamic Form Builder (Google Apps Script)

An **advanced Google Apps Script-powered Google Sheets Add-on** that automates **approval workflows** *and* lets you **design your approval Google Forms dynamically, right inside the Sheet**.

⭐ Supports **Leave Requests, Expense Claims, Purchase Approvals, and Document Sign-offs**  
⭐ Admins can **create, customize, and link** Google Forms with an **interactive step-by-step wizard**  
⭐ Auto-emails approvers with Approve/Reject links *(placeholder-ready for web app integration)*  
⭐ Tracks approvals in Google Sheets  
⭐ Logs all actions for auditing  

---

## 🚀 Features

✅ One-stop approval hub in Google Sheets  
✅ Built-in **Approval Form Builder**—no manual Forms setup needed  
✅ Handles multiple approval types:
- Leave Requests
- Expense Claims
- Purchase Approvals
- Document Sign-offs

✅ Two submission modes for each type:
- **Google Form Link** (for remote users)
- **Interactive in-Sheet Form** (for direct spreadsheet use)

✅ Admin-friendly Form Builder wizard:
- Lets HR/managers *create and customize Google Forms* step by step  
- Define form name, storage folder, and questions interactively  
- Stores Form links and questions automatically in the Settings tab  
- Supports regenerating Forms if deleted  

✅ Auto-assigns approvers based on Settings  
✅ Sends approval request emails with Approve/Reject links *(placeholders ready for future web app integration)*  
✅ Updates status in Google Sheets tabs  
✅ Notifies requester of decision  
✅ Maintains a complete Logs tab  

---

## ⚙️ How It Works

1️⃣ Admin clicks **Setup Approval Forms** in the custom menu.  
2️⃣ The **Form Builder Wizard** opens in a sidebar:  
   - Select approval type (Leave / Expense / Purchase / Document)  
   - Enter custom form name  
   - Choose Drive folder to save form (optional)  
   - Add questions one by one (title, type, required)  
   - Review and confirm  

3️⃣ Script creates Google Form via Apps Script:  
   - Adds questions exactly as defined  
   - Saves form in chosen Drive folder  
   - Gets Form URL  

4️⃣ Script automatically writes details to **Settings** tab:
   - Form URL
   - JSON of questions
   - Folder ID  

5️⃣ Employees submit requests via:
   - Google Form (remote-friendly)
   - Interactive in-Sheet form (via menu)  

6️⃣ Script writes submissions to dedicated tabs:
   - LeaveRequests
   - ExpenseClaims
   - PurchaseApprovals
   - DocumentSignOffs

7️⃣ Emails approver with approval request and Approve/Reject links *(future Web App integration possible)*.  
8️⃣ Approver's action updates status in Sheet.  
9️⃣ Requester notified of decision.  
10️⃣ Logs tab tracks all activity.

---

## 🗂️ 📌 Example Google Sheets Tabs

✅ **Settings**  
Stores all approver emails, Google Form links, question definitions, Drive folder IDs, and email templates.

✅ **LeaveRequests**  
Stores leave request submissions.

✅ **ExpenseClaims**  
Stores expense claims.

✅ **PurchaseApprovals**  
Stores purchase approvals.

✅ **DocumentSignOffs**  
Stores document sign-offs.

✅ **Logs**  
Tracks all submissions, approvals, rejections for auditing.

---

## 📌 Example Settings Tab

| Parameter                             | Value                                      |
|----------------------------------------|--------------------------------------------|
| AdminEmail                            | hr@company.com                            |
| LeaveApproverEmail                    | manager1@company.com                      |
| ExpenseApproverEmail                  | finance@company.com                       |
| PurchaseApproverEmail                 | procurement@company.com                   |
| DocumentApproverEmail                 | legal@company.com                         |
| LeaveRequestFormURL                   | https://forms.gle/...                     |
| ExpenseClaimFormURL                   | https://forms.gle/...                     |
| PurchaseApprovalFormURL               | https://forms.gle/...                     |
| DocumentSignOffFormURL                | https://forms.gle/...                     |
| LeaveRequestFormQuestions             | JSON describing questions                 |
| ExpenseClaimFormQuestions             | JSON describing questions                 |
| PurchaseApprovalFormQuestions         | JSON describing questions                 |
| DocumentSignOffFormQuestions          | JSON describing questions                 |
| LeaveRequestFormFolderID              | Drive Folder ID (optional)                |
| ...                                   | (same pattern for other approval types)   |
| ApprovalEmailSubject                  | Approval Needed: {{Type}} Request         |
| ApprovalEmailBodyTemplate             | Hello {{Approver}}, please review {{Type}} for {{Employee}}. Click Approve or Reject. |

✅ All stored and editable in the **Settings** tab.

---

## 📌 Required Sheet Columns for Each Request Type

Below are the **required columns** for each approval type tab.  

These columns will match:
✅ Interactive in-Sheet form prompts  
✅ Dynamically generated Google Form fields

---

### ✅ **LeaveRequests Tab**

| Column         | Description                                |
|-----------------|--------------------------------------------|
| EmployeeName    | Name of the employee making the request   |
| Dates           | Leave period requested                    |
| Reason          | Reason for leave                          |
| Status          | Pending / Approved / Rejected             |
| Approver        | Email of the assigned approver            |
| Comments        | Optional approver comments                |

---

### ✅ **ExpenseClaims Tab**

| Column         | Description                                |
|-----------------|--------------------------------------------|
| EmployeeName    | Name of the employee making the claim     |
| Amount          | Amount being claimed                      |
| Description     | Description of the expense                |
| Status          | Approval status                           |
| Approver        | Email of the assigned approver            |
| Comments        | Optional approver comments                |

---

### ✅ **PurchaseApprovals Tab**

| Column         | Description                                |
|-----------------|--------------------------------------------|
| EmployeeName    | Name of requester                         |
| Item/Service    | Item or service to purchase               |
| Amount          | Cost estimate                             |
| Reason          | Justification for purchase                |
| Status          | Approval status                           |
| Approver        | Email of assigned approver                |
| Comments        | Optional approver comments                |

---

### ✅ **DocumentSignOffs Tab**

| Column         | Description                                |
|-----------------|--------------------------------------------|
| EmployeeName    | Person requesting sign-off                |
| DocumentName    | Name of the document                      |
| Reason          | Purpose for sign-off                      |
| Status          | Approval status                           |
| Approver        | Email of assigned approver                |
| Comments        | Approver's comments                       |

---

✅ **Tip:**  
> The **interactive form builder wizard** ensures your Google Forms always match these columns automatically!

---

## 🛠️ Setup Instructions

1️⃣ Create a Google Sheet with these tabs:
- Settings
- LeaveRequests
- ExpenseClaims
- PurchaseApprovals
- DocumentSignOffs
- Logs

2️⃣ Open **Apps Script Editor**:
- Paste the code from `Code.gs`.
- Link it to your Google Sheet.

3️⃣ Save and authorize the script.

4️⃣ Refresh your Sheet to see the **Approvals Menu**.

5️⃣ Click **Setup Approval Forms** to design and generate Google Forms for each request type, step by step!

6️⃣ Employees can then submit requests via:
- Interactive in-Sheet form
- Google Form links

7️⃣ All approvals and status updates are logged in the **Logs** tab.

---

## 💡 Example Use Cases

✅ HR leave approvals  
✅ Finance expense approvals  
✅ Procurement purchase requests  
✅ Legal document sign-offs  
✅ Any manager-employee workflow with standardized approvals

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

# InternetClouding — Final Website
**Domain:** internetclouding.in | **Email:** samiksha06@internetclouding.in | **Phone:** +91 9915428793

---

## Files

```
internetclouding-final/
├── index.html          ← Homepage            ← EDIT THIS
├── services.html       ← Services page       ← EDIT THIS
├── portfolio.html      ← Portfolio           ← EDIT THIS
├── quote.html          ← Get a Quote         ← EDIT THIS
├── contact.html        ← Contact form        ← EDIT THIS
├── css/style.css       ← All styles          ← EDIT FOR DESIGN
├── js/main.js          ← All JavaScript      ← EDIT FOR FIREBASE
├── images/             ← Add screenshots here
│   └── README.txt      ← Image instructions
└── .htaccess           ← Server config       ← DON'T TOUCH
```

---

## How to edit the website

Open any `.html` file in a text editor (Notepad, VS Code, etc.)

### Change text
Find the text you want to change and type over it.
Example — change the hero headline in index.html:
```html
<!-- Find this: -->
<h1 class="hero-title">We Build <br/><span class="gradient-text">Websites</span><br/>That Work</h1>

<!-- Change to anything: -->
<h1 class="hero-title">We Build <br/><span class="gradient-text">Digital</span><br/>Experiences</h1>
```

### Add a portfolio project
In `portfolio.html`, copy one `<div class="portfolio-card">` block and paste it.
Change the image src, title, description, and tags.

### Change colours
Open `css/style.css`. At the top find `:root { ... }` and change:
```css
--accent:   #2d7a3a;   /* main green — change this */
--accent2:  #52a860;   /* lighter green */
--bg:       #f2f6f0;   /* page background */
```

### Change contact details
Search for `samiksha06@internetclouding.in` and replace with your email.
Search for `9915428793` and replace with your phone.

---

## Setting up Google Sheets database

1. Create a Google Sheet with these columns in Row 1:
   `Timestamp | Name | Email | Phone | Service | Budget | Message | Newsletter | Status | Notes`

2. Go to **Extensions → Apps Script** in your Google Sheet

3. Paste this code and deploy it as a Web App:
```javascript
function doPost(e) {
  var sheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName('enquiries');
  var data  = JSON.parse(e.postData.contents);
  sheet.appendRow([
    new Date(),
    data.name, data.email, data.phone,
    data.service, data.budget, data.message,
    data.newsletter ? 'Yes' : 'No',
    'New', ''
  ]);
  return ContentService.createTextOutput('OK');
}
```

4. Deploy → Execute as: Me → Who has access: Anyone
5. Copy the Web App URL
6. Open `js/main.js` → find `SHEETS_WEBHOOK_URL` → paste your URL

---

## Deploying to Hostinger

1. Upload ALL files to `public_html` via File Manager or FTP
2. Make sure `images/` folder is uploaded too
3. Enable SSL: hPanel → SSL → Let's Encrypt (free)
4. Done — your site is live at internetclouding.in

---

## Adding real portfolio images

1. Screenshot your live project websites
2. Save as JPG, size 800×500px
3. Upload to the `images/` folder
4. In `portfolio.html`, find each Unsplash image URL and replace:
```html
<!-- Before -->
src="https://images.unsplash.com/photo-..."

<!-- After -->
src="images/your-project.jpg"
```

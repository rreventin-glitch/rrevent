# RR Data Management System

A browser-based administration dashboard for RR EVENT. The system provides a polished login screen and a workspace for managing event bookings, customers, payments, teams, packages, media services, reports, and account activity.

## Features

- Admin login with username and password validation
- Password visibility toggle
- Restricted password-reset flow with CEO contact details
- Dashboard with business statistics, revenue overview, upcoming events, and recent bookings
- Responsive sidebar navigation
- New booking form with:
  - Booking, customer, event, pricing, payment, team, service, and attachment sections
  - Automatic GST, grand-total, and balance calculations
  - Draft, quotation, invoice, print, WhatsApp, and email action placeholders
  - Google Sheets submission for saved bookings
- RR EVENT invoice generator with editable client, event, service, payment, bank, terms, and signature sections
- Live invoice totals, Indian currency amount-in-words, add/remove rows, local draft save, JSON export, and print-to-A4 PDF layout
- Date-range selector with:
  - Start and end dates
  - Invalid-range validation
  - Apply, Cancel, close, and outside-click behavior
- Notifications center
- Profile and account statistics
- Security settings and password-strength validation
- Activity logs
- Logout confirmation modal
- Responsive desktop and mobile layouts
- Reduced-motion support for animated login effects

## Project Structure

```text
RR DATA MANAGEMENT SYSTEM/
├── index.html                  Main HTML document and application shell
├── app.js                     Application state, templates, event handlers, and API submission
├── styles.css                 Visual design, responsive layout, and animations
├── ASSETS/
│   ├── backdrop of login page.png
│   └── login page .png
└── README.md                  Project documentation
```

## Running the Application

This is a static browser application. No npm installation or build step is required.

### Option 1: Open directly

Open `index.html` in a modern web browser.

### Option 2: Use a local server

A local server is recommended when testing browser APIs or external requests.

For Python:

```bash
python -m http.server 8000
```

Then open:

```text
http://localhost:8000
```

For VS Code, the Live Server extension can also be used.

## Demo Login

The current front-end validation accepts:

| Field | Value |
|---|---|
| Username | `rrevent` |
| Password | `8877rr` |

These values are stored in client-side JavaScript and are suitable only for a prototype or local demonstration. They must be replaced with server-side authentication before production use.

## Main Workflow

1. Open `index.html`.
2. Enter the demo credentials.
3. Select a workspace area from the sidebar.
4. Use the date button on the dashboard to choose a date range.
5. Select **Bookings** or **Add booking** to open the booking form.
6. Complete the booking fields. Pricing totals update automatically.
7. Select **Save Booking** to submit the booking payload.
8. Select **Generate Invoice** or **Quotes** to create an A4 invoice. Add service/event rows, update payment values, then use **Print / PDF**.
9. Use the profile menu for account pages or logout.

## Data Submission

Saved bookings are sent with a `POST` request to the Google Apps Script endpoint defined by `bookingStoreUrl` in `app.js`.

The request contains:

```json
{
  "username": "rrevent",
  "bookingId": "RR-2026-00126",
  "fields": {
    "field label": "field value"
  }
}
```

The request uses `mode: "no-cors"` and a plain-text content type. The endpoint must be configured to accept the request and write the received data to the intended Google Sheet.

## Pricing Calculation

The booking form calculates totals as follows:

```text
Pricing subtotal = photography + videography + decoration + other charges
Taxable amount = max(0, pricing subtotal - discount)
GST = round(taxable amount * 18%)
Grand total = taxable amount + GST
Balance = max(0, grand total - advance received)
```

## Important Implementation Notes

- View content is rendered dynamically by `renderView()` in `app.js`.
- Most workspace pages are currently interface placeholders with toast feedback.
- The dashboard, booking form, account pages, notifications, and date selector are implemented in the front end.
- Booking persistence depends on the external Google Apps Script endpoint.
- The application does not currently use a database, server session, framework, package manager, or automated test suite.
- Google Fonts are loaded remotely from Google Fonts.
- Login artwork is loaded from the `ASSETS` directory.

## Production Recommendations

Before deploying this application publicly:

1. Move authentication to a secure backend.
2. Never expose credentials in `app.js`.
3. Add authorization checks for every protected action.
4. Validate and sanitize booking data on the server.
5. Protect the Google Apps Script endpoint with authentication and request validation.
6. Add error logging and user-friendly offline handling.
7. Replace placeholder workspace actions with real data services.
8. Add automated tests for authentication, booking totals, date ranges, and form submission.
9. Serve the application over HTTPS.
10. Review external font and asset loading for privacy and availability requirements.

## Browser Support

Use a current version of Chrome, Edge, Firefox, or Safari. JavaScript and CSS must be enabled. Some visual effects use browser features such as `backdrop-filter`, with non-filtered fallbacks provided by the surrounding design.

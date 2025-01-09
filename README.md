
# Nodemailer Email Script

This script demonstrates how to use [Nodemailer](https://nodemailer.com/) with Node.js to send emails. It securely manages sensitive information like email credentials using environment variables through the `dotenv` package.

---

## Features

- Send an email using Gmail as the email provider.
- Secure email credentials using environment variables.
- Simple and lightweight, with minimal dependencies.

---

## Prerequisites

- [Node.js](https://nodejs.org/) installed on your system.
- A Gmail account (or another email provider) for sending emails.

---

## Installation

1. Clone or download the script:
   ```bash
   git clone https://github.com/your-repo/nodemailer-script.git
   cd nodemailer-script
   ```

2. Install the required packages:
   ```bash
   npm install nodemailer dotenv
   ```

3. Create a `.env` file in the root directory to store your email credentials:
   ```env
   EMAIL=your-email@gmail.com
   EMAIL_PASSWORD=your-email-password
   ```

   - Replace `your-email@gmail.com` with your email address.
   - Replace `your-email-password` with your email provider's app password or credentials.

4. Add `.env` to `.gitignore` to prevent it from being committed to version control:
   ```bash
   echo ".env" >> .gitignore
   ```

---

## Usage

1. Open the `index.js` (or the script file you are using) and ensure the email details are correctly specified:
   ```javascript
   var mailOptions = {
       from: 'xyz@gmail.com',  // Sender's email address
       to: 'abc140@gmail.com',  // Recipient's email address
       subject: "Sending Email to Ankush", // Subject of the email
       text: "Welcome to NodeMailer, It's Working", // Body of the email
   };
   ```

2. Run the script:
   ```bash
   node index.js
   ```

3. Check the console for output:
   - Success: `Email Sent: <response from Gmail>`
   - Error: `Error details`

---

## How It Works

1. **Setup Transporter:**  
   The `transporter` is created using `nodemailer.createTransport()`, specifying the email service (`gmail`) and authentication details stored in environment variables.

2. **Email Options:**  
   The `mailOptions` object specifies the sender, recipient, subject, and email body.

3. **Send Email:**  
   The `transporter.sendMail()` method sends the email, and a callback function handles success or error responses.

---

## Example Output

**Success:**  
```
Email Sent: 250 2.0.0 OK 1234567890abcdef123456789 - gsmtp
```

**Error:**  
```
Error: Invalid login: 535-5.7.8 Username and Password not accepted.
```

---

## Notes

- **Gmail App Passwords:** If using Gmail, enable [App Passwords](https://support.google.com/accounts/answer/185833?hl=en). Regular passwords may not work for email-sending apps.
- **Environment Variables:** Use the `dotenv` package to secure sensitive information.
- **Email Services:** To use another email provider, update the `service` and `auth` fields in `createTransport()`.

---

## License

This script is open-source and available under the MIT License.

---

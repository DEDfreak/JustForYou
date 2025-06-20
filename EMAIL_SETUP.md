# Email Setup Guide

## Overview
This application now includes email functionality that sends contact form inquiries to:
- **Primary email:** murarkaravish@gmail.com
- **CC email:** pmurarka1@gmail.com

## Setup Instructions

### 1. Install Dependencies
```bash
npm install
```

### 2. Gmail App Password Setup
To send emails, you need to set up a Gmail App Password:

1. Go to your Google Account settings
2. Enable 2-Factor Authentication if not already enabled
3. Go to Security → App passwords
4. Generate a new app password for "Mail"
5. Copy the generated password

### 3. Environment Configuration
Create a `.env` file in the root directory:
```env
EMAIL_USER=murarkaravish@gmail.com
EMAIL_PASS=your-gmail-app-password-here
PORT=3001
```

### 4. Running the Application

#### Option 1: Run both frontend and backend together
```bash
npm run dev
```
This will start:
- Frontend: http://localhost:5173
- Backend: http://localhost:3001

#### Option 2: Run separately
```bash
# Terminal 1 - Frontend
npm start

# Terminal 2 - Backend
npm run server
```

### 5. Testing the Email Functionality
1. Navigate to http://localhost:5173/home
2. Scroll down to the contact form
3. Fill out the form and submit
4. Check both email addresses for the inquiry

## Email Format
The email will include:
- Customer's name, email, and phone
- Service interest
- Message content
- Professional formatting with HTML

## Troubleshooting
- Make sure the Gmail app password is correct
- Check that both email addresses are valid
- Ensure the backend server is running on port 3001
- Check browser console for any CORS errors

## Security Notes
- Never commit the `.env` file to version control
- Use environment variables for sensitive data
- The app password is more secure than using your regular Gmail password 
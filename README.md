Features
✅ Patient Dashboard

Displays all appointments in three categories:

Scheduled

Completed

Cancelled

Clean and intuitive UI for easy navigation

✅ Appointment Booking

Select doctor, specialization, date, and time

Real-time validation to avoid double booking

✅ Reschedule & Cancel

Modify an existing appointment

Cancel a booking instantly

UI updates dynamically

✅ Authentication (Optional / Based on Backend)

Secure route access

Only logged-in patients can view or manage appointments

✅ Responsive UI

Mobile-friendly

Professional, modern design

🛠️ Tech Stack
Frontend

HTML5

CSS3

JavaScript

(Optional: React / Tailwind depending on your actual code)

Backend

Node.js

Express.js

REST APIs for appointment management

Database

MongoDB (via Mongoose)

Appointment, Doctor, and Patient models

Deployment

Hosted on Vercel

Environment variables for secure database connection

🔗 API Endpoints (Example Structure)
Method	Endpoint	Description
GET	/patient/appointments	Get all patient appointments
POST	/appointments	Book a new appointment
PUT	/appointments/:id	Reschedule an appointment
DELETE	/appointments/:id	Cancel an appointment
📂 Project Structure
/project-root
│
├── backend/
│   ├── controllers/
│   ├── models/
│   ├── routes/
│   └── server.js
│
├── frontend/
│   ├── pages/
│   ├── styles/
│   └── scripts/
│
├── package.json
└── README.md


(Modify according to your actual structure)

📸 Screenshots

Add screenshots of:

Appointment Dashboard

Booking Page

Reschedule Modal

Cancel Confirmation

🧠 What I Learned

This project helped me strengthen:

Full-stack development

REST API design

CRUD operations

Database schema modeling

Authentication & authorization flow

UI/UX best practices

Deployment on Vercel

📈 Future Improvements

Doctor login panel

Real-time appointment availability

SMS/Email reminders

Payment gateway integration

Admin dashboard

Prescription upload & medical history section

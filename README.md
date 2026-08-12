# 🦷 Your Dentist - Appointment Booking System

A full-stack MERN-based dental clinic appointment booking system developed for **Your Dentist Clinic, Malviya Nagar, Jaipur**. The platform allows patients to book appointments online, while the clinic receives appointment details via email and manages patient inquiries efficiently.

## 🚀 Features

### Patient Side

* Online Appointment Booking
* Responsive and Modern UI
* Form Validation
* Contact Information Display
* Mobile Friendly Design
* Fast and User-Friendly Experience

### Admin/Clinic Side

* Receive Appointment Details via Email
* Store Appointment Data in MongoDB
* Secure Backend APIs
* Error Handling and Validation
* Easy Deployment on Render and Vercel

---

## 🛠️ Tech Stack

### Frontend

* React.js
* Vite
* HTML5
* CSS3
* JavaScript (ES6+)

### Backend

* Node.js
* Express.js

### Database

* MongoDB Atlas

### Email Service

* Nodemailer

### Deployment

* Frontend: Vercel
* Backend: Render

---

## 📁 Project Structure

```bash
YOURDEINTISTCOMPLETE/
│
├── backend/
│   ├── config/
│   ├── controllers/
│   ├── middleware/
│   ├── models/
│   ├── routes/
│   ├── services/
│   ├── server.js
│   ├── package.json
│   └── .env
│
├── frontend/
│   ├── public/
│   ├── src/
│   ├── index.html
│   ├── package.json
│   └── .env
│
└── README.md
```

---

## ⚙️ Installation

### 1. Clone Repository

```bash
git clone https://github.com/your-username/yourdeintistcomplete.git
cd yourdeintistcomplete
```

---

### 2. Backend Setup

```bash
cd backend
npm install
```

Create a `.env` file inside the backend folder:

```env
PORT=5000

MONGO_URI=your_mongodb_connection_string

EMAIL_USER=your_email@gmail.com

EMAIL_APP_PASSWORD=your_app_password

CLINIC_EMAIL=your_email@gmail.com
```

Start Backend:

```bash
npm start
```

---

### 3. Frontend Setup

```bash
cd frontend
npm install
npm run dev
```

Frontend will run on:

```text
http://localhost:5173
```

---

## 🌐 API Endpoints

### Create Appointment

```http
POST /api/appointments
```

Request Body:

```json
{
  "name": "John Doe",
  "phone": "9876543210",
  "email": "john@example.com",
  "date": "2026-08-15",
  "message": "Dental Checkup"
}
```

---

## 📧 Email Notifications

Whenever a patient books an appointment:

* Appointment data is stored in MongoDB.
* Clinic receives an email notification instantly.
* Patient information is securely processed.

---

## 🚀 Deployment

### Backend (Render)

Settings:

```text
Root Directory: backend
Build Command: npm install
Start Command: npm start
```

Environment Variables:

```env
PORT=10000
MONGO_URI=your_mongodb_uri
EMAIL_USER=your_email
EMAIL_APP_PASSWORD=your_app_password
CLINIC_EMAIL=your_email
```

---

### Frontend (Vercel)

Settings:

```text
Framework Preset: Vite
Root Directory: frontend
Build Command: npm run build
Output Directory: dist
```

---

## 🔒 Security Notes

Never upload:

```text
.env
node_modules
```

Add them to `.gitignore`:

```gitignore
node_modules
.env
dist
build
```

---

## 📍 Clinic Information

**Your Dentist Clinic**
Dr. Ruby
D-670, Gaurav Tower Marg, Near China Town, Palika Bazar, Malviya Nagar, Jaipur, Rajasthan, India

---

## 👨‍💻 Developer

Developed using the MERN Stack for seamless appointment management and modern healthcare web experiences.

---

## 📄 License

This project is intended for educational and business use. All rights reserved.

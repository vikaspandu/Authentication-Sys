# 🔐 Full-Stack Authentication System

A fully functional **Login/Signup Authentication System** built using **React.js**, **Node.js**, **Express**, and **MySQL**, featuring **JWT-based authentication**, **protected routes**, and **global auth context using React Context API**.

---

## 🚀 Features

- 🔑 User Registration & Login
- 🛡️ JWT Authentication (Secure Token Handling)
- 🔒 Protected Routes (Frontend & Backend)
- 🌐 Persistent Login using Local Storage
- 🧠 React Context API for Global Auth State
- 🗄️ MySQL Database Integration
- 🧼 Clean UI with Tailwind CSS
- 🧾 Toast Notifications for feedback

---

## 🖥️ Tech Stack

### Frontend:
- React.js
- React Router DOM
- Axios
- Tailwind CSS
- React Hook Form
- React Toastify

### Backend:
- Node.js
- Express.js
- MySQL
- JWT (jsonwebtoken)
- bcrypt (for password hashing)
- dotenv

---

## 📁 Project Structure

```bash
.
├── client/                 # React Frontend
│   ├── src/
│   │   ├── context/        # AuthContext (Global Auth State)
│   │   ├── pages/          # Login, Register, Home
│   │   ├── components/     # Reusable Components
│   │   └── App.jsx
│   └── package.json
│
├── server/                 # Node.js Backend
│   ├── controllers/        # authController, userController
│   ├── middleware/         # authMiddleware (JWT verification)
│   ├── routes/             # authRoutes, userRoutes
│   ├── config/             # db.js (MySQL connection)
│   └── index.js            # Server Entry Point
│   └── .env
│
└── README.md

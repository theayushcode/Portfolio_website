# 🚀 Ayush Narayan - Developer Portfolio

A modern, responsive, and high-performance personal portfolio website built with **React (Vite)**, **Tailwind CSS**, and an **Express.js** backend for handling contact inquiries via automated email notifications.

---

## 🌟 Live Demo

- **Frontend (Vercel):** [Live Demo URL](https://your-portfolio.vercel.app)
- **Backend (Render):** [API Endpoint](https://your-backend.onrender.com)

---

## 🛠️ Tech Stack

### **Frontend**
- **Framework:** React.js (Vite)
- **Styling:** Tailwind CSS
- **Animations:** CSS3 Animations & Transitions

### **Backend**
- **Runtime:** Node.js
- **Framework:** Express.js
- **Email Service:** Nodemailer (Gmail SMTP integration)
- **Security & Utilities:** , Dotenv

---

## ✨ Features

- **Hero Section:** Dynamic introduction with quick call-to-action buttons for resume download and social profiles.
- **About Me:** Professional overview highlighting academic background, technical focus, and skills.
- **Featured Projects:** Interactive project cards with live demo and GitHub source code links.
- **Skills Showcase:** Categorized technical stack including Frontend, Backend, Tools, and Databases.
- **Education & Experience:** Comprehensive timeline of academic achievements and internship experience.
- **Certifications:** Showcase of verified credentials and training.
- **Automated Contact Form:** Full-stack contact workflow delivering user messages directly to personal inbox.

---

## 📁 Project Architecture

```text
portfolio-project/
├── client/                 # Frontend React Application
│   ├── public/             # Static Assets (Images, Resume PDF)
│   ├── src/
│   │   ├── components/     # UI Sections (Navbar, Hero, About, Projects, etc.)
│   │   ├── App.jsx         # Root Component
│   │   └── main.jsx        # Entry Point
│   ├── index.html
│   ├── tailwind.config.js
│   └── vite.config.js
│
├── server/                 # Backend Node/Express API
│   ├── server.js           # Express App & Nodemailer Route
│   ├── .env                # Environment Variables (Local)
│   └── package.json
│
├── .gitignore
└── README.md

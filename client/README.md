# 💻 Frontend - Ayush Narayan Portfolio

The client-side single-page application for Ayush Narayan's personal developer portfolio, built with **React (Vite)** and styled using **Tailwind CSS**.

---

## 🛠️ Tech Stack & Libraries

- **Framework:** [React 18](https://react.dev/)
- **Build Tool:** [Vite](https://vitejs.dev/)
- **Styling:** [Tailwind CSS](https://tailwindcss.com/)


---

## 📂 Folder Structure

```text
client/
├── public/                     # Static assets (images, CV PDF)
│   ├── about-anime.png         # About section profile picture
│   ├── profile.png             # Hero section profile picture
│   └── Ayush_Narayan_CV.pdf    # Downloadable resume
├── src/
│   ├── components/
│   │   ├── Navbar.jsx          # Header navigation bar
│   │   ├── Hero.jsx            # Hero banner with intro & actions
│   │   ├── About.jsx           # Bio, highlights & work ethic cards
│   │   ├── Projects.jsx        # Project showcases & GitHub/live links
│   │   ├── Skills.jsx          # Tech stack & tool badges
│   │   ├── Education.jsx       # Academic & internship timelines
│   │   ├── Certificates.jsx    # Verified certifications
│   │   └── Contact.jsx         # Contact form with backend API integration
│   ├── App.jsx                 # Main application layout
│   ├── main.jsx                # Application root rendering
│   └── index.css               # Tailwind directives & base styles
├── index.html                  # HTML template
├── tailwind.config.js          # Tailwind styling configuration
└── vite.config.js              # Vite configuration
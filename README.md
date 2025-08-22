Deployed project link :- https://intern-portal-mern.onrender.com

🏢 Intern Portal

An all-in-one Intern Management System with intern registration, admin login. This portal helps organizations streamline the internship process.

🚀 Features

🔹 Intern Side

Registration with personal, educational, and internship preference details

Internship application tracking (Pending / Shortlisted / Approved)

Dashboard with:

🔹 Admin Side

Secure admin login (with role-based access)

Manage intern applications (Approve / Reject / Shortlist)

🛠️ Tech Stack

Frontend: HTML, CSS, JavaScript,React

Backend: Node.js

Database:MongoDB

📂 Project Structure

Intern-Portal/
│── frontend/           # Client-side code (UI)
│── backend/            # Server-side code (APIs, DB logic)
│── database/           # DB schema & migrations
│── docs/               # Documentation
│── README.md           # Project documentation

⚡ Getting Started

1️⃣ Clone the repo
git clone https://github.com/your-username/intern-portal.git
cd intern-portal

2️⃣ Install dependencies in both folders [frontend and backend] integrated terminals 
npm install   # For Node.js

3️⃣ Setup environment variables

Create a .env file in the backend folder:

PORT=5000
DB_URL=your_database_url

Create a .env file in the frontend folder:

REACT_APP_API_URL=http://localhost:5000/api

4️⃣ Run the app

npm run dev [in backend terminal]
npm start [in frontend terminal]
  
App will run on http://localhost:5000
 🎉

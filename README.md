# 🛒 QuickCart

A minimal and fast e-commerce web app built using the MERN stack with PostgreSQL. Users can submit and view products easily, with an smart search feature for improved product discovery.

---

## 🚀 Live Demo

🔗 [Live Site](https://quickcart-alpha.vercel.app/)

---

## 📦 Features

- 📝 **Product Submission**  
  Submit a new product with name, price, description, and optional image.

- 🗂️ **Product Listing**  
  View submitted products in a clean and responsive card layout.

- 🔄 **Real-time Updates**  
  Products appear instantly on submission without page reload.

- 🔍 **Search Functionality** 
  - Simple keyword-based filtering by name or description.

---

## 🛠️ Tech Stack

- **Frontend**: React.js + Tailwind CSS
- **Backend**: Node.js + Express
- **Database**: PostgreSQL

---

## 🧰 Local Setup Instructions

### ✅ Prerequisites

- Node.js (v14 or higher)
- PostgreSQL
- Git

---

### ⚙️ Installation

1. **Clone the repository**

```bash
git clone https://github.com/kosangyadav/QuickCart.git
cd quickcart

	2.	Install dependencies

npm install

	3.	Configure PostgreSQL

	•	Create a new PostgreSQL database.
	•	Create a .env file in the root directory and add the following environment variables:

DB_HOST=localhost
DB_PORT=5432
DB_USER=your_postgres_username
DB_PASSWORD=your_postgres_password
DB_NAME=quickcart

	4.	Run database migrations (if needed)

npm run migrate

	5.	Start the server

npm start

The app should now be running at:
🔗 http://localhost:3000

⸻

🗃️ Folder Structure

quickcart/
├── backend/
│   ├── controllers/
│   ├── models/
│   ├── routes/
│   └── server.js
├── frontend/
│   ├── components/
│   ├── pages/
│   └── App.js
├── .env
├── package.json
└── README.md

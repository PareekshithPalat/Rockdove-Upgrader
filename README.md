# Rockdove Upgrader Project

A full-stack application consisting of a professional business website and a secure Admin Dashboard for managing submissions (Contacts, RFQs, and Career Applications).

## 🚀 Project Overview

The project is divided into two main parts:
1.  **Main Website**: The public-facing site where users can learn about Rockdove and submit forms.
2.  **Admin Panel**: A secure dashboard located in the `/admin-panel` directory for authorized personnel to view and manage data.

## 📋 Prerequisites

Before you begin, ensure you have the following installed:
*   **Node.js** (v18 or higher)
*   **MySQL Server** (Running locally or accessible via network)
*   **npm** (Comes with Node.js)

## 🛠️ Setup Instructions

### 1. Database Setup
Create a MySQL database and run the schema script:
1.  Open your MySQL client.
2.  Run the contents of `db/schema.sql` to create the necessary tables.

### 2. Environment Configuration
Create a `.env` file in the root directory and add your database credentials:
```env
DB_HOST=127.0.0.1
DB_USER=your_username
DB_PASSWORD=your_password
DB_NAME=rockdove_db
ADMIN_SECRET=your_secure_secret
```
*Note: The `ADMIN_SECRET` is used to log in to the Admin Dashboard.*

### 3. Install Dependencies
Run the following commands to install dependencies for both the main project and the admin panel:

**In the Root Directory:**
```bash
npm install
```

**In the Admin Panel Directory:**
```bash
cd admin-panel
npm install
cd ..
```

## 🏃 Running the Project

To run the full application locally, you need to start the backend and both frontends.

### 1. Start the Backend API (Required)
The backend handles form submissions and admin data requests.
```bash
npm run dev:local
```
*Runs on [http://localhost:3001](http://localhost:3001)*

### 2. Start the Main Website
```bash
npm run dev
```
*Runs on [http://localhost:5173](http://localhost:5173)*

### 3. Start the Admin Dashboard
```bash
npm run dev:admin
```
*Runs on [http://localhost:5174](http://localhost:5174)*

## 📁 Project Structure

*   `/src`: Main website frontend (React + Vite).
*   `/admin-panel`: Admin dashboard frontend (React + Vite).
*   `/api`: Serverless function logic (used by Vercel and local dev server).
*   `/db`: Database schema and SQL scripts.
*   `/scripts`: Local development server implementation.
*   `/public`: Static assets (images, models, etc.).

## 🔐 Admin Login
1.  Navigate to `http://localhost:5174`.
2.  Enter the `ADMIN_SECRET` defined in your `.env` file.
3.  Default secret is `admin123` if not explicitly set in `.env`.

---
*Happy Coding!*

# Task Manager Web App

A full-stack Task Manager built with **ReactJS** (frontend), **Node.js/Express** (backend), and **MySQL** (database).  
Users can add, view, complete, and delete tasks. The app is fully responsive and works great on both desktop and mobile.

## Features

- Add new tasks (title & description)
- View all tasks
- Mark tasks as completed (with strikethrough)
- Delete tasks
- Responsive design for mobile & desktop

## Tech Stack

**Frontend:** ReactJS, Axios, CSS  
**Backend:** Node.js, Express, mysql2, dotenv, cors  
**Database:** MySQL

## Quick Start

### 1. Clone the Repository

```bash
git clone https://github.com/yourusername/task-manager.git
cd task-manager
```

### 2. Set Up the Database

Open MySQL Workbench or your preferred client and run:

```sql
CREATE DATABASE IF NOT EXISTS task_manager;
USE task_manager;

CREATE TABLE IF NOT EXISTS tasks (
  id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
  title VARCHAR(255) NOT NULL,
  description TEXT NULL,
  is_completed TINYINT NOT NULL DEFAULT 0,
  created_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
```

### 3. Backend Setup

```bash
cd backend
npm install
```

Create a `.env` file in the `backend` folder:

```env
DB_HOST=localhost
DB_USER=your_mysql_username
DB_PASSWORD=your_mysql_password
DB_NAME=task_manager
PORT=5000
```

Start the backend server:

```bash
node server.js
```

### 4. Frontend Setup

```bash
cd ../frontend
npm install
npm start
```

The React app will run at [http://localhost:3000](http://localhost:3000).

## API Endpoints

| Method | Endpoint              | Description             |
|--------|-----------------------|-------------------------|
| GET    | /tasks                | Get all tasks           |
| POST   | /tasks                | Add a new task          |
| PUT    | /tasks/:id/complete   | Mark a task as completed|
| DELETE | /tasks/:id           | Delete a task           |

## Extra Features

- **Responsive design:** Looks great on mobile and desktop.
- **Visual indicator:** Completed tasks are shown with a strikethrough.
- **Error handling:** Friendly messages for failed API requests.
- **Clean code:** Modular React components and organized backend.

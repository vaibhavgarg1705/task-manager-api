# Task Manager API

A simple Task Manager application built using **Node.js, Express.js, HTML, CSS, and JavaScript**.

This project allows users to create, view, update, complete, and delete tasks through a simple frontend connected to a REST API.

## Features

- Add new tasks
- View all tasks
- Edit task titles
- Mark tasks as completed
- Undo completed tasks
- Delete tasks
- REST API using Express.js
- Simple and responsive frontend

## Tech Stack

- Node.js
- Express.js
- HTML
- CSS
- JavaScript
- REST API

## Project Structure

```text
task-manager/
├── controllers/
│   └── taskController.js
├── routes/
│   └── taskRoutes.js
├── public/
│   ├── index.html
│   ├── style.css
│   └── script.js
├── .gitignore
├── package.json
├── package-lock.json
├── server.js
└── README.md
```

## Installation and Setup

### 1. Clone the repository

```bash
git clone https://github.com/vaibhavgarg1705/task-manager-api.git
```

### 2. Open the project folder

```bash
cd task-manager-api
```

### 3. Install dependencies

```bash
npm install
```

### 4. Start the server

```bash
node server.js
```

### 5. Open the application

Open this URL in your browser:

http://localhost:3000

## API Endpoints

| Method | Endpoint | Description |
|---|---|---|
| GET | `/tasks` | Get all tasks |
| POST | `/tasks` | Create one or multiple tasks |
| PUT | `/tasks/:id` | Update a task |
| DELETE | `/tasks/:id` | Delete a task |

## Example Request

### Create a task

**POST** `/tasks`

```json
{
  "title": "Practice 30 LeetCode questions"
}
```

### Update a task

**PUT** `/tasks/1`

```json
{
  "title": "Practice 30 LeetCode questions"
}
```

### Mark a task as completed

**PUT** `/tasks/1`

```json
{
  "completed": true
}
```

## Note

Currently, tasks are stored in memory, so they reset when the server restarts. Database integration can be added in a future version.

## Author

**Vaibhav Garg**

GitHub: [@vaibhavgarg1705](https://github.com/vaibhavgarg1705)

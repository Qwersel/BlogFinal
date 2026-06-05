# CMS Blogging Platform - Backend CRUD API

A RESTful API for a Content Management System built with Node.js, Express.js, Sequelize, and PostgreSQL.

## Tech Stack

- **Node.js** - Runtime
- **Express.js** - Web framework
- **PostgreSQL** - Database
- **Sequelize** - ORM

## Project Structure

```
├── config/
│   └── db.js            # Database connection
├── controllers/
│   ├── authorController.js
│   └── articleController.js
├── models/
│   ├── Author.js
│   ├── Article.js
│   └── index.js          # Model associations
├── routes/
│   ├── authorRoutes.js
│   └── articleRoutes.js
├── .env                  # Environment variables
├── index.js              # Entry point
├── package.json
└── README.md
```

## Data Models

### Author
| Field  | Type     | Description             |
|--------|----------|-------------------------|
| id     | INTEGER  | Primary key (auto)      |
| name   | STRING   | Author display name     |
| email  | STRING   | Unique email address    |
| bio    | TEXT     | Short biography         |

### Article
| Field           | Type     | Description                |
|-----------------|----------|----------------------------|
| id              | INTEGER  | Primary key (auto)         |
| title           | STRING   | Article headline           |
| content         | TEXT     | Article body               |
| published_date  | DATE     | Publication timestamp      |
| author_id       | INTEGER  | Foreign key to Author (1:N)|

## Setup

### 1. Install dependencies

```bash
npm install
```

### 2. Configure environment

Create a `.env` file in the project root:

```
PORT=3000
DATABASE_URL=postgres://postgres:YOUR_PASSWORD@localhost:5432/your_database_name
```

### 3. Start the server

```bash
npm start
```

The server will start on `http://localhost:3000`.

## API Endpoints

### Authors

| Method | Endpoint            | Description        |
|--------|---------------------|--------------------|
| POST   | /api/authors        | Create an author   |
| GET    | /api/authors        | Get all authors    |
| GET    | /api/authors/:id    | Get author by ID   |
| PUT    | /api/authors/:id    | Update author      |
| PATCH  | /api/authors/:id    | Update author      |
| DELETE | /api/authors/:id    | Delete author      |

### Articles

| Method | Endpoint            | Description        |
|--------|---------------------|--------------------|
| POST   | /api/articles       | Create an article  |
| GET    | /api/articles       | Get all articles   |
| GET    | /api/articles/:id   | Get article by ID  |
| PUT    | /api/articles/:id   | Update article     |
| PATCH  | /api/articles/:id   | Update article     |
| DELETE | /api/articles/:id   | Delete article     |

## HTTP Status Codes

| Code | Meaning          | When Used                          |
|------|------------------|------------------------------------|
| 200  | OK               | Successful read/update/delete      |
| 201  | Created          | Resource created successfully      |
| 400  | Bad Request      | Missing/invalid fields             |
| 404  | Not Found        | Resource does not exist            |
| 500  | Server Error     | Unexpected server error            |

# CMS Blogging Platform - Backend CRUD API

A RESTful API for a Content Management System built with Node.js, Express.js, Sequelize, and PostgreSQL.

## Tech Stack

- **Node.js** - Runtime
- **Express.js** - Web framework
- **PostgreSQL** - Database (hosted on Supabase)
- **Sequelize** - ORM

## Project Structure

```
├── config/
│   └── db.js            # Sequelize database connection
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
DATABASE_URL=postgres://postgres:[YOUR-PASSWORD]@db.uutfqigkttkvutjsfnyd.supabase.co:5432/postgres
```

Replace `[YOUR-PASSWORD]` with your Supabase database password (found in Supabase Dashboard > Settings > Database).

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
| PUT    | /api/articles/:id  | Update article     |
| PATCH  | /api/articles/:id   | Update article     |
| DELETE | /api/articles/:id   | Delete article     |

## cURL Examples

### Create an Author

```bash
curl -X POST http://localhost:3000/api/authors \
  -H "Content-Type: application/json" \
  -d '{"name": "Jane Doe", "email": "jane@example.com", "bio": "Tech writer"}'
```

### Get All Authors

```bash
curl http://localhost:3000/api/authors
```

### Get Author by ID (includes their articles)

```bash
curl http://localhost:3000/api/authors/1
```

### Update an Author

```bash
curl -X PUT http://localhost:3000/api/authors/1 \
  -H "Content-Type: application/json" \
  -d '{"bio": "Updated biography"}'
```

### Delete an Author

```bash
curl -X DELETE http://localhost:3000/api/authors/1
```

### Create an Article

```bash
curl -X POST http://localhost:3000/api/articles \
  -H "Content-Type: application/json" \
  -d '{"title": "My First Post", "content": "Hello world!", "author_id": 1}'
```

### Get All Articles (includes author name)

```bash
curl http://localhost:3000/api/articles
```

### Get Article by ID

```bash
curl http://localhost:3000/api/articles/1
```

### Update an Article

```bash
curl -X PUT http://localhost:3000/api/articles/1 \
  -H "Content-Type: application/json" \
  -d '{"title": "Updated Title"}'
```

### Delete an Article

```bash
curl -X DELETE http://localhost:3000/api/articles/1
```

## HTTP Status Codes

| Code | Meaning          | When Used                          |
|------|------------------|------------------------------------|
| 200  | OK               | Successful read/update/delete      |
| 201  | Created          | Resource created successfully      |
| 400  | Bad Request      | Missing/invalid fields             |
| 404  | Not Found        | Resource does not exist            |
| 500  | Server Error     | Unexpected server error            |

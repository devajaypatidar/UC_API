# User Management REST API

A simple RESTful API for managing user data, built with Node.js, Express, and MongoDB.

## Table of Contents

- [Introduction](#introduction)
- [Features](#features)
- [Installation](#installation)
- [Usage](#usage)
- [Endpoints](#endpoints)
- [Contributing](#contributing)
- [License](#license)

## Introduction

This project provides a RESTful API for performing CRUD operations on user data. It allows you to create, read, update, and delete user records in a MongoDB database.

## Features

- Create new users with detailed information.
- Retrieve a list of all users or fetch individual user data.
- Update existing user records.
- Delete user records from the database.

## Installation

To run this project locally, follow these steps:

1. Clone the repository:

   ```bash
   git clone https://github.com/yourusername/user-management-api.git

2. Install dependencies:

```bash
cd user-management-api
npm install
```

3. Set up environment variables:

 Create a .env file in the root directory and add the following:
  - CONNECTION_URL=your_mongodb_connection_url_here
4. Start the server:

```
node run dev
```

*Once the server is running, you can send HTTP requests to the provided endpoints to interact with the API. You can use tools like Postman or cURL to test the endpoints.*

## Endpoints
- POST /api/user: Create a new user.
- GET /api/user: Retrieve a list of all users.
- GET /api/user/:id: Retrieve a specific user by ID.
- PUT /api/user/:id: Update an existing user.
- DELETE /api/user/:id: Delete a user by ID.




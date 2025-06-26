# task3
# task3
Book REST API with Node.js & Express
A simple RESTful API built using Node.js and Express to manage a list of books (stored in memory). This project demonstrates basic CRUD operations (Create, Read, Update, Delete) and is ideal for beginners learning backend development.

🚀 Features
✅ Create a book (POST /books)
📖 Retrieve all books (GET /books)
✏️ Update a book (PUT /books/:id)
🗑️ Delete a book (DELETE /books/:id)

🛠️ Technologies Used
Node.js
Express.js
Postman for testing API

book-api/
├── index.js
├── package.json
└── README.md

Installation & Setup

Clone the repository:
bash
git clone https://github.com/your-username/book-api.git
cd book-api

Install dependencies:
bash
npm install
Start the server:

bash
node index.js
API will run at:
http://localhost:3000


| Method | Endpoint     | Description         |
| ------ | ------------ | ------------------- |
| GET    | `/books`     | Get all books       |
| POST   | `/books`     | Add a new book      |
| PUT    | `/books/:id` | Update a book by ID |
| DELETE | `/books/:id` | Delete a book by ID |

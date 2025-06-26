const express = require('express');
const app = express();
const PORT = 3000;

// Middleware to parse JSON
app.use(express.json());

// In-memory array to store books
let books = [];

// GET all books
app.get('/books', (req, res) => {
  res.json(books);
});

// POST new book
app.post('/books', (req, res) => {
  const { id, title, author } = req.body;
  books.push({ id, title, author });
  res.status(201).json({ message: 'Book added', books });
});


// PUT update book by ID
app.put('/books/:id', (req, res) => {
  const bookId = req.params.id;
  const { title, author } = req.body;

  const book = books.find(b => b.id == bookId);
  if (book) {
    book.title = title || book.title;
    book.author = author || book.author;
    res.json({ message: 'Book updated', book });
  } else {
    res.status(404).json({ message: 'Book not found' });
  }
});

// DELETE book by ID
app.delete('/books/:id', (req, res) => {
  const bookId = req.params.id;
  books = books.filter(book => book.id != bookId);
  res.json({ message: 'Book deleted', books });
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});

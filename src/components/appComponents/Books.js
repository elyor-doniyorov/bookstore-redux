import React from 'react';
import BookList from './booksComponents/BookList';
import AddBookForm from './booksComponents/AddBooForm';
import './Books.css';

function Books() {
  return (
    <div>
      <BookList />
      <div className="line" />
      <AddBookForm />
    </div>
  );
}

export default Books;

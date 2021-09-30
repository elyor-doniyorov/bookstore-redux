import React from 'react';
import BookList from './booksComponents/BookList';
import AddBookForm from './booksComponents/AddBooForm';

function Books() {
  return (
    <div>
      <BookList />
      <AddBookForm />
    </div>
  );
}

export default Books;

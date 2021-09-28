import React from 'react';
import { useSelector } from 'react-redux';
import BookItem from './bookListComponents/BookItem';

function BookList() {
  const books = useSelector((state) => state.books);
  return (
    <div className="book-list">
      {books.map((book) => {
        const {
          id, title, author, category, progress,
        } = book;
        return (
          <BookItem
            key={id}
            title={title}
            author={author}
            cat={category}
            prog={progress}
          />
        );
      })}
    </div>
  );
}

export default BookList;

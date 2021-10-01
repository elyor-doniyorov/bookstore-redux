import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addBookAPI } from '../../../redux/books/books';
import Form from './Form';
import './AddBookForm.css';

function AddBookForm() {
  const dispatch = useDispatch();
  const [formState, setFormState] = useState({
    title: '',
    category: 'Category',
  });

  function handleChange(e) {
    setFormState({ ...formState, [e.target.name]: e.target.value });
  }

  function handleSubmit(e) {
    dispatch(addBookAPI(formState));
    e.preventDefault();
    setFormState({
      ...formState,
      title: '',
      category: 'Category',
    });
  }

  return (
    <div>
      <h2 className="Form-title">Add NEW BOOK</h2>
      <Form
        handleChange={(e) => handleChange(e)}
        handleSubmit={(e) => handleSubmit(e)}
        formState={formState}
      />
    </div>
  );
}

export default AddBookForm;

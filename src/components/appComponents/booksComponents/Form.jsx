/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/prop-types */
import React from 'react';
import './Form.css';

const Form = (props) => (
  <div className="form-container">
    <form onSubmit={props.handleSubmit} className="inner-form-container">
      <input
        type="text"
        name="title"
        className="book-input"
        placeholder="Book title"
        value={props.formState.title}
        onChange={props.handleChange}
      />
      <select
        name="category"
        value={props.formState.category}
        onChange={props.handleChange}
        className="cat-input"
      >
        <option value="" hidden>
          Category
        </option>
        <option value="Sci-Fi">Sci-Fi</option>
        <option value="Action">Action</option>
        <option value="Action">Economy</option>
      </select>
      <button type="submit" className="add-btn">
        ADD BOOK
      </button>
    </form>
  </div>
);

export default Form;

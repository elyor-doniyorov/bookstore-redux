/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/prop-types */
import React from 'react';

const Form = (props) => (
  <form onSubmit={props.handleSubmit}>
    <input
      type="text"
      name="title"
      placeholder="Book title"
      value={props.formState.title}
      onChange={props.handleChange}
    />
    <select
      name="category"
      value={props.formState.category}
      onChange={props.handleChange}
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
);

export default Form;

import React from 'react';
import PropTypes from 'prop-types';

const Item = ({
  id, cat, title, author, prog, handleClick,
}) => (
  <div>
    <div className="col">
      <div className="category-name">{cat}</div>
      <div className="book-title">{title}</div>
      <div className="author-name">{author}</div>
      <div>
        <button type="button">Comments</button>
        <button type="button" onClick={handleClick} data-bookid={id}>Remove</button>
        <button type="button">Edit</button>
      </div>
    </div>
    <div className="col">
      <span className="progress-chart" />
      <span>
        {prog}
        %
        <br />
        {' '}
        completed
      </span>
    </div>
    <div className="col">
      <span>CURRENT CHAPTER</span>
      <span>CHAPTER 17</span>
      <button type="button">UPDATE PROGRESS</button>
    </div>
  </div>
);

Item.propTypes = {
  id: PropTypes.number.isRequired,
  cat: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  prog: PropTypes.number.isRequired,
  handleClick: PropTypes.func.isRequired,
};

export default Item;

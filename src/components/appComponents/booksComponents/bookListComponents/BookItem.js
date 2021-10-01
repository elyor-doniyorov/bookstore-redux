import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { removeBookAPI } from '../../../../redux/books/books';
import './BookItem.css';

function BookItem(props) {
  const {
    id, cat, title, author, prog,
  } = props;

  const dispatch = useDispatch();

  function handleClick(e) {
    const payload = Number(e.target.dataset.bookid);
    dispatch(removeBookAPI(payload));
  }

  const progressStyle = {
    position: 'relative',
    backgroundImage: `conic-gradient(from 0deg, #307bbe, #379cf6 ${prog}%, #e8e8e8 ${prog}%, #e8e8e8)`,
    display: 'inline-block',
    width: '4.25rem',
    height: '4.25rem',
    borderRadius: '50%',
  };

  const innerWhite = {
    position: 'absolute',
    backgroundColor: '#fff',
    width: '3.5rem',
    height: '3.5rem',
    borderRadius: '50%',
    top: '50%',
    left: '50%',
    transform: 'translate( -50%, -50%)',
  };

  return (
    <div className="book-item">
      <div className="col book-details-col">
        <div className="category-name">{cat}</div>
        <div className="book-title">{title}</div>
        <div className="book-author">{author}</div>
        <div className="book-btns">
          <button type="button">Comments</button>
          <button type="button" onClick={handleClick} data-bookid={id}>Remove</button>
          <button type="button">Edit</button>
        </div>
      </div>
      <div className="row">
        <span className="progress-chart" style={progressStyle} />
        <div style={innerWhite} />
        <span>
          <div className="progress-percentage">
            {prog}
            %
          </div>
          <div className="completed">completed</div>
        </span>
      </div>
      <div className="vline" />
      <div className="col update-col">
        <span className="current-chapter">CURRENT CHAPTER</span>
        <span className="current-lesson">CHAPTER 17</span>
        <button type="button" className="update-progress-btn">UPDATE PROGRESS</button>
      </div>
    </div>
  );
}

BookItem.propTypes = {
  id: PropTypes.number.isRequired,
  cat: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  prog: PropTypes.number.isRequired,
};

export default BookItem;

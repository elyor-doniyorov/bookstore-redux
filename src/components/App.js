import React, { useEffect } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { loadBooksAPI } from '../redux/books/books';
import Books from './appComponents/Books';
import Categories from './appComponents/Categories';
import Header from './appComponents/Header';
import './App.css';

function App() {
  const dispatch = useDispatch();
  useEffect(() => dispatch(loadBooksAPI()), []);
  return (
    <div className="bookstore">
      <div className="panel-bg">
        <Router>
          <Header />
          <div className="header-line" />
          <Switch>
            <Route exact path="/">
              <Books />
            </Route>
            <Route path="/categories">
              <Categories />
            </Route>
          </Switch>
        </Router>
      </div>
    </div>
  );
}

export default App;

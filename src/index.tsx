import React from 'react';
import ReactDOM from 'react-dom/client';

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Author from "./routes/authors"
import AuthorBookList from "./routes/authorBookList"
import Genres from "./routes/genres"
import Books from "./routes/books"
import Wishlist from "./routes/wishlist"
import BookInfo from "./routes/bookInfo"
import GenreInfo from "./routes/genresInfo"

import './index.css';
import App from './App';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

import { Provider } from 'react-redux';
import store from './store/index';

const root = ReactDOM.createRoot(document.getElementById('root')!);
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<App />} />
          <Route path="/authors" element={<Author />} />
          <Route path="/authors/:authorList" element={<AuthorBookList />} />
          <Route path="/genres" element={<Genres />} />
          <Route path="/genres/:genreInfo" element={<GenreInfo />} />
          <Route path="/books" element={<Books />} />
          <Route path="/books/:bookName" element={<BookInfo />} />
          <Route path="/wishlist" element={<Wishlist />} />
        </Routes>
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
);

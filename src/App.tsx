import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Home from './pages/Home';
import Blog from './pages/Blog';
import Posting from './pages/Posting';
import Posts from './pages/Posts';
import Editing from './pages/Editing';

/* Component Section */

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/posting" element={<Posting />} />
        <Route path="/posts/:id" element={<Posts />} />
        <Route path="/editing/:id" element={<Editing />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;

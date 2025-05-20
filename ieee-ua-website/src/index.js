import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './pages/Layout';
import Home from './pages/Home';
import Board from './pages/Board';
import ContactUs from './pages/ContactUs';
import Gallery from './pages/Gallery';
import Hackathon from './pages/Hackathon';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
    <BrowserRouter>
        <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path = "board" element={<Board />} />
          <Route path = "contact-us" element={<ContactUs />} />
          <Route path = "hackathon" element={<Hackathon />} />
          <Route path = "gallery" element={<Gallery />} />
        </Route>
        </Routes>
    </BrowserRouter>
);

reportWebVitals();
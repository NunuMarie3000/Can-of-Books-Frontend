import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import About from './Components/About'

import { BrowserRouter, Routes, Route } from "react-router-dom";
// import { Auth0Provider } from '@auth0/auth0-react';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // <Auth0Provider>
    <React.StrictMode>
      <BrowserRouter>
        <Routes>
          <Route exact path='/' element={<App />} />
          <Route path='/about' element={<About />} />
        </Routes>
      </BrowserRouter>
    </React.StrictMode>
  /* </Auth0Provider> */
);

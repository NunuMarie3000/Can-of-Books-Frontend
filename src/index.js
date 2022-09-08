import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import About from './Components/About'
import Profile from './Components/routes/Profile'

import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Auth0Provider } from '@auth0/auth0-react';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Auth0Provider
  domain={process.env.REACT_APP_AUTH0_DOMAIN}
    clientId={process.env.REACT_APP_AUTH0_CLIENTID}
    redirectUri={window.location.origin}>
    <React.StrictMode>
      <BrowserRouter>
        <Routes>
          <Route exact path='/' element={<App />} />
          <Route path='/about' element={<About />} />
          <Route path='/profile' element={<Profile/>}/>
        </Routes>
      </BrowserRouter>
    </React.StrictMode>
  </Auth0Provider>
);

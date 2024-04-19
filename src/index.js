import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import { GoogleOAuthProvider } from '@react-oauth/google';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>  
    <GoogleOAuthProvider clientId="608772600176-p1omb76fg0af4vg1du5cfqlf4dhvqfsn.apps.googleusercontent.com">
      
    <App />
      </GoogleOAuthProvider>;
    
    
    </BrowserRouter>

  </React.StrictMode>
);



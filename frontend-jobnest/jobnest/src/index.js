import React from 'react';
import ReactDOM from 'react-dom/client';
import 'normalize.css';
import './index.scss';
import App from './App';
import { AppProvider } from './context/appContext';
import { GoogleOAuthProvider } from '@react-oauth/google';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <AppProvider>
    <GoogleOAuthProvider clientId="770656193849-efo7hcr9rap4b08bi8od15ajo9nbgso7.apps.googleusercontent.com"> 
      <App />
    </GoogleOAuthProvider>
    </AppProvider>
    
  </React.StrictMode>
);

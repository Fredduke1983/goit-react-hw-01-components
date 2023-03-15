import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from 'components/App';
import './index.css';
import { FieldStyle } from './components/profile/profile.styled';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <FieldStyle>
      <App />
    </FieldStyle>
  </React.StrictMode>
);

import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from 'components/App';
import './index.css';
import { MainStyle } from './components/Profile/profile.styled';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <MainStyle>
      <App />
    </MainStyle>
  </React.StrictMode>
);

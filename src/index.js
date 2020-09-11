import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import 'animate.css/animate.min.css';
import App from './App';

import{ init } from 'emailjs-com';
init("user_x5NtJXggciETqvUWOMbTu");

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
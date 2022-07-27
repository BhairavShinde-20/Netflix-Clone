import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { BrowserRouter } from 'react-router-dom';
import Routing from './Routing';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <BrowserRouter>
      <Routing />
    </BrowserRouter>
);


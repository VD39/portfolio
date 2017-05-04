/* React */
import React from 'react';
import ReactDOM from 'react-dom';

/* Stylesheet */
import 'bootstrap/dist/css/bootstrap.css';
import './styles/style.scss';

/* My components */
import Root from './routes';

const dom = document.getElementById('root');

ReactDOM.render(
  <Root />,
  dom
);

// Import dependencies.
import React from 'react';
import ReactDOM from 'react-dom';

// Import components.
import Routes from './Routes';

// Import data.
import { portfolio } from './data/portfolio';

// Get root element.
const root = document.getElementById('root');

// Render React app.
ReactDOM.render(<Routes {...portfolio} />, root);

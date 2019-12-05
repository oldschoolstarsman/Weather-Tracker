// == Import : npm
import React from 'react';
import { render } from 'react-dom';


// == Import : local
import App from 'src/components/App';

// == Render
const rootComponent = (
  <App />
);

// Le rendu de React => DOM
render(rootComponent, document.getElementById('root'));

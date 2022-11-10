
import React, { StrictMode } from 'react';
import * as ReactDOM from 'react-dom/client';
import { App } from './App';
import { AppContext } from './context/AppContext';

import '@fontsource/nunito/400.css'
import '@fontsource/nunito/500.css'
import '@fontsource/nunito/600.css'
import '@fontsource/nunito/700.css'
import '@fontsource/nunito/900.css'

const container = document.getElementById('root');
const root = ReactDOM.createRoot(container);

root.render(
  <StrictMode>
    <AppContext>
      <App />
    </AppContext>
  </StrictMode>
);

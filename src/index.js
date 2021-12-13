import React from 'react';
import ReactDOM from 'react-dom';
import './Index.css'
import App from './App';
import {BrowserRouter} from 'react-router-dom';
import { FavoritesContextProvider } from './Context/Favorites-Context';


ReactDOM.render(
  <FavoritesContextProvider>
         <BrowserRouter>
       <App />
    </BrowserRouter>
  </FavoritesContextProvider>,
  document.getElementById('root')
);


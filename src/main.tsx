import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import Callback from './Callback'
import AlbumDetail from './pages/AlbumDetail'
import AlbumMostListened from './pages/AlbumMostListened'
import './index.css'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { store } from './store/store'
import { Provider } from 'react-redux'
import 'primereact/resources/themes/lara-light-indigo/theme.css';
//core
import "primereact/resources/primereact.min.css";

import 'primeicons/primeicons.css';

const router = createBrowserRouter([
  {
    path: "/callback",
    element: <Callback/>,
  },
  {
    path: "/album/:id",
    element: <AlbumDetail/>,
  },  
  {
    path: "/mostListened",
    element: <AlbumMostListened/>,
  },
  {
    path: "/",
    element: <App/>,
  }
]);

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
      <Provider store={store}>
        <RouterProvider router={router} />
      </Provider>
  </React.StrictMode>
)

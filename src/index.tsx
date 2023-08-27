import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import reportWebVitals from './reportWebVitals';
import Layout from './Layout';
import { APP_ROUTES } from './configs/configs';
import 'bootstrap/dist/css/bootstrap.min.css';
import { ErrorPage } from './pages/ErrorPage';
import { SongsPage } from './pages/SongsPage';
import { SongPage } from './pages/SongPage';
import { fetchSongs } from './services/fetchSongs';


const router = createBrowserRouter([
  {
    path: APP_ROUTES.main,
    element: <>404</>
  },
  {
    path: APP_ROUTES.songs,
    element: <Layout />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <SongsPage />,
        loader: fetchSongs,
      }, 
      {
        path: APP_ROUTES.song(),
        element: <SongPage />,
        loader: fetchSongs,
      }
    ]
  }
])

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import ReactDOM from 'react-dom/client';
import { RouterProvider, createHashRouter } from 'react-router-dom';
import { APP_ROUTES } from './configs/configs';
import './index.css';
import { ErrorPage } from './pages/ErrorPage';
import { SongPage } from './pages/SongPage';
import { SongsPage } from './pages/SongsPage';
import reportWebVitals from './reportWebVitals';
import { fetchSong as songLoader, fetchSongs as songsLoader } from './services/fetchSongs';


const router = createHashRouter([
    {
        path: APP_ROUTES.main,
        element: <>404</>,
        errorElement: <ErrorPage />,
    },
    {
        path: APP_ROUTES.songs,
        element: <SongsPage />,
        loader: songsLoader,
        children: [
            {
                path: APP_ROUTES.song(),
                element: <SongPage />,
                loader: songLoader,
            }
        ],
    },
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

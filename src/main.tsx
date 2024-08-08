import React from 'react';
import ReactDOM from 'react-dom/client';
import { createHashRouter, RouterProvider } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle';
import './styles.css'
import './header.css'
import About from './components/About';
import Resume from './components/Resume';
import Skills from './components/Skills';
import Contact from './components/Contact';
import Projects from './components/Projects';

const router = createHashRouter([
    {
        path: "/",
        element: <About />,
    },
    {  path: "/about",
        element: <About />,
    },
    {
        path: "/resume",
        element: <Resume />,
    },
    {
        path: "/skills",
        element: <Skills />,
    },
    {
        path: "/projects",
        element: <Projects />,
    },
    {
        path: "/contact",
        element: <Contact />,
    }
]);

const rootElement = document.getElementById('root');

if (rootElement) {
    const root = ReactDOM.createRoot(rootElement);
    root.render(
        <React.StrictMode>
            <RouterProvider router={router} />
        </React.StrictMode>
    );
} else {
    console.error("Root element not found");
}

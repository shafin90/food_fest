import React from 'react'
import ReactDOM from 'react-dom/client'
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import './index.css'
import Layout from './components/Layout/Layout';
import Home from './components/Home/Home';
import Blog from './components/Blog/Blog';
import ChefPage from './components/ChefPage/ChefPage';
import LoginPage from './components/LoginPage/LoginPage';
import AuthProvider from './components/AuthProvider/AuthProvider';
import RegistrationForm from './components/RegistrationForm/RegistrationForm';


const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout></Layout>,
    children: [
      {
        path: '/',
        element: <Home></Home>
      },
      {
        path: '/blog',
        element: <Blog></Blog>
      },
      {
        path: '/:id',
        element: <ChefPage></ChefPage>,
        loader: ({ params }) => fetch(`http://localhost:5000/all_info/${params.id}`)

      },
      {
        path: '/login',
        element: <LoginPage></LoginPage>
      },
      {
        path:'/registration',
        element:<RegistrationForm></RegistrationForm>
      }
    ]
  },
]);




ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </React.StrictMode>
);
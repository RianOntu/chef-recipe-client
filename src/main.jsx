import React from 'react'
import ReactDOM from 'react-dom/client'

import './index.css'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Main from './components/main/Main.jsx';
import Home from './components/Home/Home.jsx';
import ChefDetails from './components/ChefDetails/ChefDetails';
import Login from './components/Login/Login';
import Register from './components/Register/Register';
import AuthenticationProvider from './components/Providers/AuthenticationProvider';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';
import NotFound from './components/NotFound/NotFound';

const router=createBrowserRouter([
  {
    path:"/",
    element:<Main></Main>,
    children:[
      {
        path:'/',
        element:<Home></Home>,
        loader:()=>fetch('http://localhost:5000/chefs')
      },
      {
        path:'chefs/:id',
        element:<PrivateRoute><ChefDetails></ChefDetails></PrivateRoute>,
        loader:({params})=>fetch(`http://localhost:5000/chefs/${params.id}`)
      },
      {
        path:"/login",
        element:<Login></Login>
      },
      {
        path:'/register',
        element:<Register></Register>
      }
    ],
    
  },
  {
    path:"*",
    element:<NotFound></NotFound>
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   <AuthenticationProvider>
   <RouterProvider router={router} />
   </AuthenticationProvider>
  </React.StrictMode>,
)

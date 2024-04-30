import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import AddCoffe from './components/AddCoffe.jsx';
import UpdateCoffe from './components/UpdateCoffe.jsx';
import Home from './components/Home.jsx';
import View from './components/View.jsx';
import UserProvider from './context/DataContext.jsx';


const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/addCoffe",
        element: <AddCoffe />,
      },
      {
        path: "/updateCoffe/:id",
        element: <UpdateCoffe />,
        loader: ({ params }) => fetch(`https://coffee-server-pink.vercel.app/user/${params.id}`)
      },
      {
        path: "/view/:id",
        element: <View />,
        loader: ({ params }) => fetch(`https://coffee-server-pink.vercel.app/user/${params.id}`)
      },
    ]
  },

]);
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <UserProvider>
      <RouterProvider router={router} />
    </UserProvider>
  </React.StrictMode>,
)

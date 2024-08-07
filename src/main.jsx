import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import HomePage from './routes/homePage/HomePage.jsx';
import DashBoard from './routes/dashboardPage/DashboardPage.jsx';
import ChatPage from './routes/chatPage/ChatPage.jsx';
import RootLayOut from './layouts/rootLayout/RootLayOut.jsx';
import DashBoardLayout from './layouts/dashboardLayout/DashBoardLayout.jsx';
import SignInPage from './routes/signInPage/SignInPage.jsx';
import SignUpPage from './routes/signUpPage/SignUpPage.jsx';

const router = createBrowserRouter([
  {
   element: <RootLayOut />,
    children: [
      {
        path: '/',
        element: <HomePage />,
      },
      {
        path: '/sign-in/*',
        element: <SignInPage />,
      },
      {
        path: '/sign-up/*',
        element: <SignUpPage />,
      },
      {
        element: <DashBoardLayout />,
        children: [
          {
            path: '/dashboard',
            element: <DashBoard />,
          },
          {
            path: '/dashboard/chats/:id',
            element: <ChatPage />,
          }
        ]
      },
    ] 
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

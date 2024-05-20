import React from 'react';
import ReactDOM from 'react-dom/client';
import { RouterProvider, createBrowserRouter,BrowserRouter } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import App from './App';
import About from './About'
import Home from './Home'

const queryClient = new QueryClient();

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: '/',
        element: <Home/>
        
      },
      {
        path: 'about',
        element:<About/>
        
      },
     
    ]
  }
]);

const root = ReactDOM.createRoot(document.getElementById('root')!);

root.render(
  <React.StrictMode>
      <BrowserRouter>
      <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} /> 
    </QueryClientProvider>
      </BrowserRouter>
  </React.StrictMode>
      
   
  
);

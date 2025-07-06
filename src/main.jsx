import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import store from './ReduxToolkit/Appstore.jsx';
import { ApiProvider } from '@reduxjs/toolkit/query/react';
import { Provider } from 'react-redux';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

const newClient =new QueryClient

createRoot(document.getElementById('root')).render(
  <QueryClientProvider client={newClient}>      
    <Provider store={store}>
        <StrictMode>
              <App />
        </StrictMode>,
      </Provider>
  </QueryClientProvider>
)

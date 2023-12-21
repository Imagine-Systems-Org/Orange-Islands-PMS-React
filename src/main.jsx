import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { AuthProvider } from './api/AuthProvider'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './index.css'
import { AccountProvider } from './api/AccountProvider.jsx'


ReactDOM.createRoot(document.getElementById('root')).render(
    <BrowserRouter>
    <AuthProvider>
      <AccountProvider>
      <Routes>
        <Route path="/*" element={<App />} />
      </Routes>
      </AccountProvider>
    </AuthProvider>
    </BrowserRouter>
)

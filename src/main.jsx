import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { AuthProvider } from './api/AuthProvider'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './index.css'


ReactDOM.createRoot(document.getElementById('root')).render(
    <BrowserRouter>
    <AuthProvider>
      <Routes>
        <Route path="/*" element={<App />} />
      </Routes>
    </AuthProvider>
    </BrowserRouter>
)

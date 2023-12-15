import { useState } from 'react'
import './App.css'
import Register from './pages/Register';
import NavBar from './components/NavBar';
import { BrowserRouter, Routes, Route } from 'react-router-dom'

function App() {

  return (
    <BrowserRouter>
    <NavBar />
      <Routes>
        <Route path="/register" element={<Register />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App

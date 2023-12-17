import './App.css'
import Layout from './components/Layout'
import Login from './pages/Login';
import Register from './pages/Register';
import Dashboard from './pages/Dashboard';
import RequireAuth from './components/RequireAuth';
import { Routes, Route } from 'react-router-dom'
import NavBar from './components/NavBar';


function App() {

  return (
      <Routes>
        <Route path="/" element={<Layout />}>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />

        <Route element={<RequireAuth />}>
        <Route element={<NavBar />}>
          <Route path="/dashboard" element={<Dashboard />} />
        </Route>
        </Route>
        </Route>
      </Routes>
  )
}

export default App

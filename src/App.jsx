import './App.css'
import Layout from './components/Layout'
import Login from './pages/Login';
import Register from './pages/Register';
import Dashboard from './pages/Dashboard';
import SearchPage from './pages/SearchPage';
import RequireAuth from './components/RequireAuth';
import { Routes, Route } from 'react-router-dom'
import PatientRecords from './pages/PatientRecords';
import NewPatient from './pages/NewPatientForm';
import Logout from './components/Logout';
import Account from './pages/Account';



const App = () => {
  return (
    <body>
        <Routes>
          <Route path="/" element={<Layout />}>
          <Route path="/" element={<Login />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />


          <Route element={<RequireAuth />}>
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/account" element={<Account />} />
            <Route path="/search" element={<SearchPage />} />
            <Route path="/search/:patientid" element={<PatientRecords />} />
            <Route path="/newpatient" element={<NewPatient />} />
            <Route path="/logout" element={<Logout />} />

          </Route>
          </Route>
        </Routes>
      </body>
  )
}

export default App

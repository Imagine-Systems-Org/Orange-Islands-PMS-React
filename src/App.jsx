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



const App = () => {
  return (
        <Routes>
          <Route path="/" element={<Layout />}>
          <Route path="/" element={<Login />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/search" element={<SearchPage />} />
          <Route path="/search/:patientid" element={<PatientRecords />} />
          <Route path="/newpatient" element={<NewPatient />} />

          <Route element={<RequireAuth />}>
            <Route path="/dashboard" element={<Dashboard />} />

          </Route>
          </Route>
        </Routes>
  )
}

export default App

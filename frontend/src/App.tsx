import './App.css'
import Home from "./pages/landingpage/AxionLanding"
import Signup from "./pages/authPages/Signup.tsx"
import Login from "./pages/authPages/Login.tsx"
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import ProtectedRoute from './components/layout/ProtectedRoute.tsx'
// import { BookDashed } from 'lucide-react'
// import { LogIn } from 'lucide-react'

import Dashboard from './pages/dashboard/Dashboard.tsx'

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/signup" element={<Signup />} />
          <Route path='/login' element={<Login/>}/>

           <Route path="/app" element={
               <ProtectedRoute>
                  <Dashboard/>
               </ProtectedRoute>
           }/>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App


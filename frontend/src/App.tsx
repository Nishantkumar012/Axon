import './App.css'
import Home from "./pages/landingpage/AxionLanding"
import Signup from "./pages/authPages/Signup.tsx"
import Login from "./pages/authPages/Login.tsx"
import { BrowserRouter, Routes, Route } from 'react-router-dom'
// import { LogIn } from 'lucide-react'

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/signup" element={<Signup />} />
          <Route path='/login' element={<Login/>}/>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App


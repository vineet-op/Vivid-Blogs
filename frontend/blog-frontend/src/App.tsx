import './App.css'
import { Signup } from './pages/Signup'
import { BrowserRouter, Routes, Route } from "react-router-dom"
import { Signin } from './pages/Signin'
import { Hero } from "./pages/Hero"
import { Blogs } from './pages/Blogs'

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Hero />} />
          <Route path='/signup' element={<Signup />} />
          <Route path='/signin' element={<Signin />} />
          <Route path='/blogs' element={<Blogs />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App

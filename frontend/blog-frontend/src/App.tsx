import './App.css'
import { Signup } from './pages/Signup'
import { BrowserRouter, Routes, Route } from "react-router-dom"
import { Signin } from './pages/Signin'
import { Hero } from "./pages/Hero"
import { Blogs } from './pages/Blogs'
import { Blog } from './pages/Blog'
import { Publish } from './pages/Publish'
import { ToastContainer } from 'react-toastify'
import { Error } from './pages/Error'

function App() {
  return (
    <>
      <ToastContainer />
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Hero />} />
          <Route path='/signup' element={<Signup />} />
          <Route path='/signin' element={<Signin />} />
          <Route path='/blogs' element={<Blogs />} />
          <Route path='/blog/:id' element={<Blog />} />
          <Route path='/publish' element={<Publish />} />
          <Route path='*' element={<Error />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App

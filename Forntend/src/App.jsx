import { useState } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Header from './Components/HomePage/Header'
import Section1 from './Components/HomePage/Section1'
import Layout from './Components/HomePage/Layout/Layout'
import Sing_In from './Components/SingIn/Sing_In'
import Sing_Up from './Components/SingUp/Sing_Up'
import Registraton from './Components/Registration/Registraton'


function App() {
  const [count, setCount] = useState(0)

  return (
    <BrowserRouter  future={{ v7_startTransition: true }} >
    <Routes >
        <Route path='/*' element={<Layout/>}>
          {/* home and other stuff goes here */}
        </Route>
        <Route path='/Registraton' element={<Registraton/>}/>
        <Route path='/SingIn' element={<Sing_In/>}/>
        <Route path='/SingUp' element={<Sing_Up/>}/>
    </Routes>
  </BrowserRouter>
  )
}

export default App

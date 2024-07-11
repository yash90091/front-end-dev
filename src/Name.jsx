import React from 'react'
import {Routes, Route} from 'react-router-dom'
import Home from './Home.jsx'
import About from './About.jsx'
import Products from './Products.jsx'
import Contact from './Contact.jsx'


const Main = () => {
  return (
    <div className='bg-white flex flex-col min-h-screen'>
      <Routes>
              <Route path='/' Component={Home} />
              <Route path='/about' Component={About} />
              <Route path='/product' Component={Products} />
              <Route path='/contact' Component={Contact} />
      </Routes>
    </div>
  )
}

export default Main

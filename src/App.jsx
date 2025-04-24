import { useState } from 'react'
import journeys from './data/journeys'
import JourneyList from './components/JourneyList'
import PaddingWrapper from './components/PaddingWrapper'
import Header from './components/Header'
import { Routes, Route } from 'react-router-dom'
import Home from '../pages/Home'
import Footer from './components/Footer'
import JourneyPage from '../pages/JourneyPage'


function App() {




  return (
    <>
      <PaddingWrapper>

        <Header />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/journey/:id' element={<JourneyPage />} />

        </Routes>
        <Footer />
      </PaddingWrapper>
    </>
  )
}

export default App

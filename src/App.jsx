import { useState } from 'react'
import journeys from './data/journeys'
import JourneyList from './components/journeyList/JourneyList'
import PaddingWrapper from './components/PaddingWrapper'
import Header from './components/Header'
import { Routes, Route } from 'react-router-dom'
import Home from '../pages/Home'
import Footer from './components/Footer'
import JourneyPage from '../pages/JourneyPage'
import AddJourney from '../pages/AddJourney'
import LoginPage from '../pages/LoginPage'
import { AuthProvider } from '../contexts/authContext'


function App() {




  return (
    <>
      <AuthProvider>

        <PaddingWrapper>

          <Header />
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/journey/:id' element={<JourneyPage />} />
            <Route path='/add-journey' element={<AddJourney />} />
            <Route path='/login' element={<LoginPage />} />

          </Routes>
          <Footer />
        </PaddingWrapper>
      </AuthProvider>
    </>
  )
}

export default App

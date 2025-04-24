import { useState } from 'react'
import journeys from './data/journeys'
import JourneyList from './components/JourneyList'
import PaddingWrapper from './components/PaddingWrapper'
import Header from './components/Header'


function App() {




  return (
    <>
      <PaddingWrapper>
        <Header />

        <JourneyList />
      </PaddingWrapper>
    </>
  )
}

export default App

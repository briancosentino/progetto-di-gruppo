import React from 'react'
import PaddingWrapper from '../src/components/PaddingWrapper'
import Header from '../src/components/Header'
import JourneyList from '../src/components/journeyList/JourneyList'
import { Link } from 'react-router-dom'
import { useAuth } from '../contexts/authContext'

const Home = () => {
    const { role } = useAuth()



    return (
        <>
            {role === 'admin' && (<button>Admin</button>)}



            <JourneyList />

        </>
    )
}

export default Home

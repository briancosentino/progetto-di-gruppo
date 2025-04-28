import React from 'react'
import PaddingWrapper from '../src/components/PaddingWrapper'
import Header from '../src/components/Header'
import JourneyList from '../src/components/JourneyList'
import { Link } from 'react-router-dom'

const Home = () => {
    return (
        <>


            <div className='text-end'>

                <button className="btn btn-primary my-3">
                    <Link className='text-white' to={'/add-journey'}>
                        <i className='fa-regular fa-plus'></i>
                    </Link>


                </button>
            </div>
            <JourneyList />

        </>
    )
}

export default Home

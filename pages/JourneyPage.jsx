import React from 'react'
import { useParams } from 'react-router-dom'
import journeys from '../src/data/journeys';

const JourneyPage = () => {
    const { id } = useParams();
    const thisJourney = journeys.find(journey => journey.id == id)
    console.log(thisJourney);

    return (
        <div>
            <h1 className="display-3 text-center">{thisJourney.destination}</h1>

        </div>
    )
}

export default JourneyPage

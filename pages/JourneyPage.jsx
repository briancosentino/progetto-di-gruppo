import React from 'react'
import { useParams } from 'react-router-dom'
import journeys from '../src/data/journeys';
import { useState } from 'react';

const JourneyPage = () => {
    const { id } = useParams();
    const thisJourney = journeys.find(journey => journey.id == id)
    console.log(thisJourney);
    const partecipants = thisJourney.people
    console.log(partecipants);
    const [dropdownOpen, setDropdownOpen] = useState(true)
    const toggleDropdown = () => setDropdownOpen(!dropdownOpen);

    return (
        <div>
            <h1 className="display-3 text-center">{thisJourney.destination}</h1>
            <h2 className='mb-5'>Partecipanti</h2>
            <div className="row flex-wrap g-3  ">

                {partecipants.map(partecipant => (
                    <div key={partecipant.codiceFiscale} className="col-3">

                        <div className=" border border-primary rounded-3 p-3 ">
                            <div className="">

                                <div className="card-title position-relative text-center h5 fw-semibold">{partecipant.name} {partecipant.surname} <span className='position-absolute end-0 top-50 h6 text-primary' style={{ transform: 'translate(-50%, -50%)' }}><i className='fa-solid fa-chevron-down'></i></span></div>

                            </div>
                        </div>
                    </div>

                ))}
            </div>


        </div>
    )
}

export default JourneyPage

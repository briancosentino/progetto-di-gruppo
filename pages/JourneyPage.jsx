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
        <>
            <div>
                <h1 className="display-3 text-center">{thisJourney.destination}</h1>
                <h2 className='mb-5'>Partecipanti</h2>
                <div className="row flex-wrap g-3  ">

                    {partecipants.map(partecipant => (
                        <div key={`accordion-${partecipant.name}-${partecipant.codiceFiscale}`} className="accordion" id={`accordion-${partecipant.name}-${partecipant.id}`}>
                            <div className="accordion-item">
                                <h2 className="accordion-header">
                                    <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target={`collapse-${partecipant.name}-${partecipant.id}`} aria-expanded="true" aria-controls="collapseOne">
                                        {partecipant.name} {partecipant.surname}
                                    </button>
                                </h2>
                                <div id={`collapse-${partecipant.name}-${partecipant.id}`} className="accordion-collapse collapse show" data-bs-parent={`accordion-${partecipant.name}-${partecipant.id}`}>
                                    <div className="accordion-body">
                                        <strong>This is the first item's accordion body.</strong> It is shown by default, until the collapse plugin adds the appropriate classNamees that we use to style each element. These classNamees control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
                                    </div>
                                </div>
                            </div>

                        </div>

                    ))}

                </div>


            </div>

        </>
    )
}

export default JourneyPage

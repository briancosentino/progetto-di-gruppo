import React from 'react'
import { useParams } from 'react-router-dom'
import journeys from '../src/data/journeys';
import { useState } from 'react';
import SearchBar from '../src/components/SearchBar';

const JourneyPage = () => {
    const { id } = useParams();
    const thisJourney = journeys.find(journey => journey.id == id)
    console.log(thisJourney);
    const [partecipants, setPartecipants] = useState(thisJourney.people)
    const [searchedPartecipants, setSearchedPartecipants] = useState(partecipants)
    console.log(partecipants);
    const [dropdownOpen, setDropdownOpen] = useState(true)
    const toggleDropdown = () => setDropdownOpen(!dropdownOpen);

    return (
        <>
            <div>
                <h1 className="display-3 text-center">{thisJourney.destination}</h1>
                <div className='d-flex justify-content-between align-items-center'>

                    <h2 className='mb-5'>Partecipanti</h2>
                    <SearchBar setSearchedPartecipants={setSearchedPartecipants} partecipants={partecipants} />
                </div>
                <div className="row flex-wrap g-3  ">

                    {searchedPartecipants.map(partecipant => (
                        <div key={partecipant.codiceFiscale} className="accordion " id={`accordion-${partecipant.codiceFiscale}`}>
                            <div className="accordion-item">
                                <h2 className="accordion-header">
                                    <button className="accordion-button collapsed bg-white " type="button" data-bs-toggle="collapse" data-bs-target={`#collapseOne-${partecipant.codiceFiscale}`} aria-expanded="true" aria-controls={`collapseOne-${partecipant.codiceFiscale}`}>
                                        {partecipant.name} {partecipant.surname}
                                    </button>
                                </h2>
                                <div id={`collapseOne-${partecipant.codiceFiscale}`} className="accordion-collapse collapse " data-bs-parent={`#accordion-${partecipant.codiceFiscale}`}>
                                    <div className="accordion-body">
                                        <ul className="list-">
                                            <li className='list-group-item' ><strong>Numero di telefono: </strong>{partecipant.phoneNumber}</li>
                                            <li className='list-group-item' ><strong>Email: </strong>{partecipant.email}</li>
                                            <li className='list-group-item'><strong>Codice fiscale: </strong>{partecipant.codiceFiscale}</li>
                                            <li className='list-group-item' ><strong>Contatto di emergenza: </strong>{partecipant.emergencyContactPhone}</li>


                                        </ul>
                                    </div>
                                </div>
                            </div>

                        </div>

                    ))}

                </div>
                {/* To do: aggiungere immagini per singolo partecipante */}

            </div>

        </>
    )
}

export default JourneyPage

import React from 'react'
import { useParams } from 'react-router-dom'
import journeys from '../src/data/journeys';
import { useState } from 'react';
import SearchBar from '../src/components/SearchBar';
import AddPersonForm from '../src/components/AddPersonForm';

const JourneyPage = () => {
    const { id } = useParams();
    const thisJourney = journeys.find(journey => journey.id == id)
    console.log(thisJourney);
    const [partecipants, setPartecipants] = useState(thisJourney.people || null)
    const [searchedPartecipants, setSearchedPartecipants] = useState(partecipants)
    console.log(partecipants);
    const [isFormOpen, setIsFormOpen] = useState(false)
    const [isOpen, setIsOpen] = useState(false)


    return (
        <>
            <div>
                <h1 className="display-3 text-center text-primary">{thisJourney.destination}</h1>
                <div className='d-flex justify-content-between align-items-center mb-3'>

                    {!isOpen && (<h2 className=' dashboard-title'>Partecipanti</h2>)}
                    <div className='d-flex align-items-stretch'>
                        <button onClick={() => setIsFormOpen(true)} className='btn border border-secondary rounded-4 me-2'><i className='fa-solid fa-plus'></i></button>
                        {isFormOpen && (<AddPersonForm setIsFormOpen={setIsFormOpen} partecipants={partecipants} />)}
                        <button className={`btn ${isOpen ? 'd-none' : ''} border border-secondary rounded-4`} onClick={() => setIsOpen(true)}><i className="fa-solid fa-magnifying-glass"></i></button>

                        {isOpen && (<SearchBar setFilteredArray={setSearchedPartecipants} originalArray={partecipants} searchBy={'partecipanti'} />)}

                    </div>
                </div>
                <div className="row flex-wrap g-3  ">

                    {searchedPartecipants && searchedPartecipants.map(partecipant => (
                        <div key={partecipant.codiceFiscale} className="accordion " id={`accordion-${partecipant.codiceFiscale}`}>
                            <div className="accordion-item">
                                <h2 className="accordion-header">
                                    <button className="accordion-button collapsed bg-white d-flex jou " type="button" data-bs-toggle="collapse" data-bs-target={`#collapseOne-${partecipant.codiceFiscale}`} aria-expanded="true" aria-controls={`collapseOne-${partecipant.codiceFiscale}`}>
                                        <div className='profile-image'>
                                            <img className='' src={`https://i.pravatar.cc/300?u=${partecipant.codiceFiscale}`} alt="" />

                                        </div>
                                        <div className='h2 d-flex align-items-center m-0 ps-3'>

                                            {partecipant.name} {partecipant.surname}
                                        </div>
                                    </button>
                                </h2>
                                <div id={`collapseOne-${partecipant.codiceFiscale}`} className="accordion-collapse collapse " data-bs-parent={`#accordion-${partecipant.codiceFiscale}`}>
                                    <div className="accordion-body">
                                        <ul className="list-">
                                            <li className='list-group-item h5' ><strong>Numero di telefono: </strong>{partecipant.phoneNumber}</li>
                                            <li className='list-group-item h5' ><strong>Email: </strong>{partecipant.email}</li>
                                            <li className='list-group-item h5'><strong>Codice fiscale: </strong>{partecipant.codiceFiscale}</li>
                                            <li className='list-group-item h5' ><strong>Contatto di emergenza: </strong>{partecipant.emergencyContactPhone}</li>


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

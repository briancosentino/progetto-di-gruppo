import journeys from "../../data/journeys"
import { Link } from "react-router-dom"
import { useState } from "react"
import './journeyList.css'
import SearchBar from "../SearchBar"

const JourneyList = () => {
    const [searchedJourneys, setSearchedJourneys] = useState(journeys)
    const [isOpen, setIsOpen] = useState(false)
    return (
        <div className="journey-dashboard p-4">
            <div className="d-flex justify-content-between align-items-center  gap-2 mb-4">
                {!isOpen && (<h1 className="dashboard-title  mb-0">Gestione Viaggi</h1>)}
                <div className='d-flex justify-content-end'>

                    <button className="btn btn-primary rounded-4 me-2">
                        <Link className='text-white' to={'/add-journey'}>
                            <i className='fa-regular fa-plus'></i>
                        </Link>



                    </button>
                    <button className={`btn ${isOpen ? 'd-none' : ''} border border-secondary rounded-4`} onClick={() => setIsOpen(true)}><i className="fa-solid fa-magnifying-glass"></i></button>

                    {isOpen && (<SearchBar setFilteredArray={setSearchedJourneys} originalArray={journeys} searchBy={'viaggi'} />)}
                </div>
            </div>
            <div className="journey-grid">
                {searchedJourneys.map(journey => (
                    <Link
                        className="journey-card text-decoration-none"
                        to={`/journey/${journey.id}`}
                        key={`journey-${journey.id}`}
                    >
                        <div className="card h-100 border-0">
                            <div className=" w-100 mx-auto  img-banner"><img
                                className="img-fluid " src={journey.imageUrl || "https://placehold.co/600x400?text=No+Image"} alt={journey.destination} /></div>
                            <div className="card-body d-flex flex-column justify-content-between">
                                <div>
                                    <div className="d-flex justify-content-between align-items-center mb-3">
                                        <h4 className="card-title mb-0">{journey.destination}</h4>
                                        <span className="journey-id">#{journey.id}</span>
                                    </div>
                                    <div className="dates-container">
                                        <p className="card-text mb-2">
                                            <i className="fas fa-calendar-alt me-2"></i>
                                            <span className="date-label">Inizio:</span> {journey.begin}
                                        </p>
                                        <p className="card-text">
                                            <i className="fas fa-calendar-check me-2"></i>
                                            <span className="date-label">Fine:</span> {journey.end}
                                        </p>
                                    </div>
                                </div>
                                <div className="participants-count mt-3">
                                    <i className="fas fa-users me-2"></i>
                                    {journey.people ? journey.people.length : '0'} partecipanti
                                </div>
                            </div>
                        </div>
                    </Link>
                ))}
            </div>
        </div>
    )
}

export default JourneyList

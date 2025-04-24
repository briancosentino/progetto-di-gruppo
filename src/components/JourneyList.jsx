import journeys from "../data/journeys"
import { Link } from "react-router-dom"

const JourneyList = () => {
    return (
        <div>
            <div className=" d-flex flex-wrap">

                {journeys.map(journey => (
                    <Link className="text-decoration-none card col-12" to={`/journey/${journey.id}`} key={`journey-${journey.id}`}>
                        <div className=" ">
                            <div className="card-body">
                                <h4 className="card-title">{journey.destination}</h4>
                                <p className="card-text">{journey.begin}, {journey.end} </p>
                            </div>
                        </div>
                    </Link>


                ))}
            </div>

        </div>
    )
}

export default JourneyList

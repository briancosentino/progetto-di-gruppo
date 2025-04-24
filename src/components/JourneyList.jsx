import journeys from "../data/journeys"

const JourneyList = () => {
    return (
        <div>
            <div className=" d-flex flex-wrap">

                {journeys.map(journey => (

                    <div key={`journey-${journey.id}`} className=" card col-12">
                        <div className="card-body">
                            <h4 className="card-title">{journey.destination}</h4>
                            <p className="card-text">{journey.begin}, {journey.end} </p>
                        </div>
                    </div>

                ))}
            </div>

        </div>
    )
}

export default JourneyList

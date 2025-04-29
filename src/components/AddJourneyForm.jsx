import { useState } from "react"
import journeys from "../data/journeys";

const AddJourneyForm = () => {
    /* const [destination, setDestination] = useState(null)
    const [begin, setBegin] = useState(null)
    const [end, setEnd] = useState(null) */
    const [formData, setFormData] = useState({ id: journeys.length + 1, people: [] })
    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value }) /* use input name as proprierty of the object to save the value */

    }
    console.log(formData);
    const handleSubmit = (e) => {
        e.preventDefault()
        journeys.push(formData)
    }


    return (
        <form onSubmit={handleSubmit} className="mx-auto col-10 col-md-6 ">
            <div className="my-3">
                <label className="mb-2" htmlFor="destination">Destinazione</label>

                <input onChange={handleChange} className="p-2 w-100 ps-3 pe-5 border border-secondary rounded-4 d-block" type="text" name="destination" id="destination" placeholder="Inserisci la destinazione..." />
            </div>
            <div className="my-3">
                <label className="mb-2" htmlFor="begin">Data di inizio</label>

                <input onChange={handleChange} className="p-2 w-100 ps-3 pe-5 border border-secondary rounded-4 d-block" type="date" name="begin" id="begin" />
            </div>
            <div className="my-3">
                <label className="mb-2" htmlFor="end">Data di fine</label>
                <input onChange={handleChange} className="p-2 w-100 ps-3 pe-5 border border-secondary rounded-4 d-block" type="date" name="end" id="end" />
            </div>
            <button className="btn btn-primary w-100 rounded-4" type="submit">Aggiungi</button>
        </form>
    )
}

export default AddJourneyForm

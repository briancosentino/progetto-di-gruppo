import React from 'react'
import AddJourneyForm from './AddJourneyForm'
import { useState } from 'react'
import journeys from '../data/journeys'

const AddPersonForm = ({ setIsFormOpen, partecipants }) => {
    /*  "name": "Marco",
                 "surname": "Grigi",
                 "phoneNumber": "3466182339",
                 "codiceFiscale": "GRIMAR96A01H501X",
                 "email": "marco.grigi@example.com",
                 "emergencyContactPhone": "3224352487" */

    const [formData, setFormData] = useState({})
    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value }) /* use input name as proprierty of the object to save the value */

    }
    const handleSubmit = (e) => {
        e.preventDefault()
        partecipants.push(formData)
        setIsFormOpen(false)


    }
    return (
        <>
            <div className='position-fixed top-0 end-0 start-0 bottom-0 bg-dark opacity-75 overlay'>

            </div>
            <div className='position-fixed top-0 end-0 start-0 bottom-0  form-overlay d-flex align-items-center justify-content-center '>
                <form onSubmit={handleSubmit} className="col-10 col-md-6 bg-white rounded-4 p-3">
                    <div className='w-100 text-danger '><i onClick={() => setIsFormOpen(false)} className='fa-solid fa-xmark'></i></div>

                    <div className='my-3'>

                        <label className='mb-2' htmlFor="name">Nome</label>
                        <input onChange={handleChange} className='w-100 border border-secondary rounded-4 p-2 ps-3' type="text" name="name" id="name" placeholder='Inserisci il nome...' />
                    </div>
                    <div className='my-3'>

                        <label className='mb-2' htmlFor="surname">Cognome</label>
                        <input onChange={handleChange} className='w-100 border border-secondary rounded-4 p-2 ps-3' type="text" name="surname" id="surname" placeholder='Inserisci il cognome...' />
                    </div>
                    <div className='my-3'>

                        <label className='mb-2' htmlFor="phoneNumber">Numero di telefono</label>
                        <input onChange={handleChange} className='w-100 border border-secondary rounded-4 p-2 ps-3' type="number" name="phoneNumber" id="phoneNumber" placeholder='Inserisci il numero di telefono...' />
                    </div>
                    <div className='my-3'>

                        <label className='mb-2' htmlFor="codiceFiscale">Codice fiscale</label>
                        <input onChange={handleChange} className='w-100 border border-secondary rounded-4 p-2 ps-3' type="text" name="codiceFiscale" id="codiceFiscale" placeholder='Inserisci il codice fiscale...' />
                    </div>
                    <div className='my-3'>

                        <label className='mb-2' htmlFor="email">Email</label>
                        <input onChange={handleChange} className='w-100 border border-secondary rounded-4 p-2 ps-3' type="email" name="email" id="email" placeholder='Inserisci la mail...' />
                    </div>
                    <div className='my-3'>

                        <label className='mb-2' htmlFor="emergencyContactPhone">Contatto di emergenza</label>
                        <input onChange={handleChange} className='w-100 border border-secondary rounded-4 p-2 ps-3' type='number' name="emergencyContactPhone" id="emergencyContactPhone" placeholder='Inserisci il numero di emergenza...' />
                    </div>
                    <button className='w-100 btn btn-primary rounded-4 p-2' type='submit'>Aggiungi</button>

                </form>

            </div>
        </>
    )
}

export default AddPersonForm

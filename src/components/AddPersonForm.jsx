import React from 'react'
import AddJourneyForm from './AddJourneyForm'

const AddPersonForm = () => {
    /*  "name": "Marco",
                 "surname": "Grigi",
                 "phoneNumber": "3466182339",
                 "codiceFiscale": "GRIMAR96A01H501X",
                 "email": "marco.grigi@example.com",
                 "emergencyContactPhone": "3224352487" */
    return (
        <>
            <div className='position-fixed top-0 end-0 start-0 bottom-0 bg-dark opacity-75 z-2'>

            </div>
            <div className='position-fixed top-0 end-0 start-0 bottom-0  z-3 d-flex align-items-center justify-content-center '>
                <form className="w-50  bg-white rounded-4 p-3">
                    <div className='my-3'>

                        <label className='mb-2' htmlFor="name">Nome</label>
                        <input className='w-100 border border-secondary rounded-4 p-2 ps-3' type="text" name="name" id="name" placeholder='Inserisci il nome...' />
                    </div>
                    <div className='my-3'>

                        <label className='mb-2' htmlFor="surname">Cognome</label>
                        <input className='w-100 border border-secondary rounded-4 p-2 ps-3' type="text" name="surname" id="surname" placeholder='Inserisci il cognome...' />
                    </div>
                    <div className='my-3'>

                        <label className='mb-2' htmlFor="phoneNumber">Numero di telefono</label>
                        <input className='w-100 border border-secondary rounded-4 p-2 ps-3' type="number" name="phoneNumber" id="phoneNumber" placeholder='Inserisci il numero di telefono...' />
                    </div>
                    <div className='my-3'>

                        <label className='mb-2' htmlFor="codiceFiscale">Codice fiscale</label>
                        <input className='w-100 border border-secondary rounded-4 p-2 ps-3' type="text" name="codiceFiscale" id="codiceFiscale" placeholder='Inserisci il codice fiscale...' />
                    </div>
                    <div className='my-3'>

                        <label className='mb-2' htmlFor="email">Email</label>
                        <input className='w-100 border border-secondary rounded-4 p-2 ps-3' type="email" name="email" id="email" placeholder='Inserisci la mail...' />
                    </div>
                    <div className='my-3'>

                        <label className='mb-2' htmlFor="emergencyContactPhone">Contatto di emergenza</label>
                        <input className='w-100 border border-secondary rounded-4 p-2 ps-3' type='number' name="emergencyContactPhone" id="emergencyContactPhone" placeholder='Inserisci il numero di emergenza...' />
                    </div>
                    <button className='w-100 btn btn-primary rounded-4 p-2' type='submit'>Aggiungi</button>

                </form>

            </div>
        </>
    )
}

export default AddPersonForm

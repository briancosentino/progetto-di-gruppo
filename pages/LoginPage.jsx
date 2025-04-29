import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const LoginPage = () => {
    const credentials = [{
        email: "admin@email.com",
        password: "admin"

    }, {
        email: 'coordinatore@email.com',
        password: 'coordinatore'
    }]

    const [formData, setFormData] = useState({})
    const [error, setError] = useState(false)

    const navigate = useNavigate()
    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value })
    }
    console.log(formData);


    const handleSubmit = (e) => {
        e.preventDefault()
        credentials.map((credential, idx) => {
            if (formData.email === credential.email && formData.password === credential.password) {
                if (formData.password === 'admin') {
                    localStorage.setItem('user', JSON.stringify({
                        email: credential.email,
                        role: 'admin'
                    }))
                } else {
                    localStorage.setItem('user', JSON.stringify({
                        email: credential.email,
                        role: 'coordinatore'
                    }))
                }
                navigate('/')

                return
            } else if (credentials[idx + 1] && formData.email !== credential.email && formData.password !== credential.password) {
                setError(true)


            }
        })






    }
    return (
        <div className='login-wrapper d-flex justify-content-center align-items-center'>
            <form onSubmit={handleSubmit} className='rounded-4 bg-white p-4'>
                <div className='mb-3'>

                    <label className='mb-2' htmlFor="email">Email</label>
                    <input onChange={handleChange} className='p-2 pe-5 ps-3 rounded-4 border border-secondary d-block ' type="email" name="email" id="email" placeholder="Inserisci l' username" />

                </div>
                <div className='mb-3'>

                    <label className='mb-2' htmlFor="password">Password</label>
                    <input onChange={handleChange} className='p-2 pe-5 ps-3 rounded-4 border border-secondary d-block ' type="password" name="password" id="password" placeholder='Inserisci la password' />
                </div>
                <button className='w-100 btn btn-primary rounded-4 p-2' type="submit">Accedi</button>
                {error && (<p className='text-danger'>Credenziali non corrette riprova</p>)}
            </form>


        </div>
    )
}

export default LoginPage

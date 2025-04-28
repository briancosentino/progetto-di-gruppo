import { useEffect, useState } from "react"
import journeys from "../data/journeys"


const SearchBar = ({ partecipants, setSearchedPartecipants }) => {
    const [isOpen, setIsOpen] = useState(false)
    const [searched, setSearched] = useState(' ')


    const handleChanges = useEffect(() => {
        if (searched !== ' ') {

            setSearchedPartecipants(partecipants.filter(partecipant => partecipant.name.toLowerCase().includes(searched.toLowerCase())))
        } else {
            console.log('la ricerca è nulla ');


            setSearchedPartecipants(partecipants)
        }


    }, [searched])

    const handleChange = (e) => {
        setSearched(e.target.value)


    }
    console.log(searched.length);
    console.log(partecipants);




    return (
        <>
            <button className={`btn ${isOpen ? 'd-none' : ''} border border-secondary rounded-4`} onClick={() => setIsOpen(true)}><i className="fa-solid fa-magnifying-glass"></i></button>
            {isOpen && (
                <>
                    <input onChange={handleChange} className="p-2 rounded-4 border border-secondary ps-3 pe-5" type="search" name="filter" id="filter" placeholder="Cerca partecipanti..." />
                </>
            )}
        </>

    )
}

export default SearchBar

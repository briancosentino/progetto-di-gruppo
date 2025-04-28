import { useEffect, useState } from "react"
import journeys from "../data/journeys"
import { useParams } from "react-router-dom"


const SearchBar = ({ originalArray, setFilteredArray, searchBy }) => {

    const [searched, setSearched] = useState(' ')





    const handleChanges = useEffect(() => {
        if (searched !== ' ') {

            setFilteredArray(originalArray.filter(element => element.name?.toLowerCase().startsWith(searched.toLowerCase()) || element.surname?.toLowerCase().startsWith(searched.toLowerCase()) || element.destination?.toLowerCase().startsWith(searched.toLowerCase())))
        } else {
            console.log('la ricerca è nulla ');


            setFilteredArray(originalArray)
        }


    }, [searched])

    const handleChange = (e) => {
        setSearched(e.target.value)


    }
    console.log(searched.length);





    return (


        <input onChange={handleChange} className="p-2 rounded-4 border border-secondary ps-3 pe-5 searchbar" type="search" name="filter" id="filter" placeholder={`Cerca ${searchBy}...`} />



    )
}

export default SearchBar

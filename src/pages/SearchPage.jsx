import { getPatients } from '../api/getPatients'
import { useState, useEffect } from 'react'
import PatientList from '../components/PatientList'
import SearchBar from "../components/SearchBar"


function SearchPage() {

    const [patients, setPatients] = useState([])
    const [trainer, setTrainer] = useState([])
    const [searchResults, setSearchResults] = useState([])


    useEffect(() => {
    getPatients().then(json => {
        setPatients(json)
        setTrainer(json)
        setSearchResults(json)
    })
    }, [])

    return (
        <>
        <SearchBar patients={patients} trainer={trainer} setSearchResults={setSearchResults} />
        <PatientList searchResults={searchResults} />
        </>
    )

}

export default SearchPage
import { getPatients } from '../api/getPatients'
import { useState, useEffect } from 'react'
import PatientList from '../components/PatientList'
import SearchBar from "../components/SearchBar"
import NavBar from '../components/NavBar'


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
        <NavBar />
        <section className='form-section mt-40'>
        <SearchBar patients={patients} trainer={trainer} setSearchResults={setSearchResults} />
        <PatientList searchResults={searchResults} />
        </section>
        </>
    )

}

export default SearchPage
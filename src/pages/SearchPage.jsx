import { getPatients } from '../api/getPatients'
import { useState, useEffect } from 'react'
import PatientList from '../components/PatientList'
import SearchBar from "../components/SearchBar"
import NavBar from '../components/NavBar'
import BackgroundImage from '../components/BackgroundImage'


function SearchPage() {

    const [patients, setPatients] = useState([])
    const [searchResults, setSearchResults] = useState([])


    useEffect(() => {
    getPatients().then(json => {
        setPatients(json)
        setSearchResults(json)
    })
    }, [])
    return (
        <>
        <NavBar />
        <BackgroundImage />
        <section className='form-section mt-40 min-h-screen align-top justify-start'>
        <SearchBar patients={patients} setSearchResults={setSearchResults} />
        <PatientList searchResults={searchResults} />
        </section>
        <footer className="w-screen h-[5vh] bg-Selective sticky bottom-0" />
        </>
    )

}

export default SearchPage
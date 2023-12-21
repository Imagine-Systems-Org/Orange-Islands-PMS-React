import { CiSearch } from "react-icons/ci";
import { useNavigate } from "react-router-dom";

const SearchBar = ({ patients, setSearchResults }) => {
    const handleSubmit = (e) => e.preventDefault()
    const navigate = useNavigate();

    const handleSearchChange = (e) => {
        if (!e.target.value) return setSearchResults(patients)

        const resultsArray = patients.filter(patient => patient.name.includes(e.target.value) || patient.trainerName.includes(e.target.value))

        setSearchResults(resultsArray)
    }

    return (
        <section className="flex flex-row">
            <form className="relative" onSubmit={handleSubmit}>
                <input
                    className="input-form w-[36vw] pl-10"
                    type="text"
                    id="search"
                    onChange={handleSearchChange}
                />
                <button className="absolute left-2 top-3.5">
                    <CiSearch size="30" />
                </button>
            </form>
            <button onClick={() => (navigate("/newpatient"))} className="new-patient-button">+ New Patient</button>
        </section>
    )
}
export default SearchBar
import NameOptions from "./NameOptions";

const OptionsMapper = ({ options }) => {

    const results = options.map(option => <NameOptions key={option._id} options={option}/>)
    return ( 
        <select className="input-form">
            <option />
            {results}
        </select>
     );
}
 
export default OptionsMapper;
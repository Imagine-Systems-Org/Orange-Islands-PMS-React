const OptionsMapper = ({ options, setParameter }) => {
    return ( 
        <select 
        onChange={e => {
            setParameter(e.target.value)
        }}
        onBlur={(e) => {
            setParameter(e.target.value);
          }}
        className="input-form">
        required
            <option />
            {options.map(option => (
                <option 
                key={option._id} value={option._id}>{option.lastName}</option>
            ))}
        </select>
     );
}
 
export default OptionsMapper;
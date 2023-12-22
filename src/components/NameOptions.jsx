const NameOptions = ({ options }) => {
    return ( 
        <option>{options.lastName} | {options.employeeID}</option>
     );
}
 
export default NameOptions;
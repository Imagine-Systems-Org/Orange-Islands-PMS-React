import { FaFileCircleQuestion } from "react-icons/fa6";

const DoctorNurseBed = ({ doctor, nurse, bed }) => {
    return ( 
        <div className="inline-flex flex-col 
            items-center min-w-[200px]
             font-Zilla justify-between
            text-3xl">
            <span className="flex flex-col items-center p-4">
                <h1>Doctor</h1>
                <h2 className="bg-Persian w-[200px] text-gray-300 p-1 px-3 rounded-xl">{doctor.lastName}</h2>
            </span>
            <span className="flex flex-col items-center p-4">
                <h1>Nurse</h1>
                <h2 className="bg-Persian w-[200px] text-gray-300 p-1 px-3 rounded-xl">{nurse.lastName}</h2>
            </span>
            <span className="flex flex-col items-center p-4">
                <h1>Bed</h1>
                <h2 className="bg-Persian w-[200px] text-gray-300 p-1 px-3 rounded-xl">{bed}</h2>
            </span>
            <button className="confirm-button">
                <FaFileCircleQuestion className="self-center mr-2" size="30"/> 
                Edit Patient
            </button>
        </div>
     );
}
 
export default DoctorNurseBed;
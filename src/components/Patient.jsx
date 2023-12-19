import { Link } from "react-router-dom"
import { FaCircle } from "react-icons/fa";
import { BsCaretRightFill } from "react-icons/bs";

const Patient = ({ patient }) => {
    return (
        <Link to={patient._id} state={{ patient }}>
        <article className="patientarticle group">
            <h2 className="flex flex-col col-start-2 justify-center">
                <span className="text-xl">Pokemon</span>
                <span className="text-3xl">{patient.name}</span>
            </h2>
            <FaCircle size="30" className="col-start-4" />
            <h2 className="flex flex-col col-start-5">
                <span className="text-xl">Trainer</span>
                <span className="text-3xl">{patient.trainerName}</span>
            </h2>
            <BsCaretRightFill className="sticky col-start-8 col-end-8 right-0 group-hover:animate-pulse" size="100" />
        </article>
        </Link>
    )
}
export default Patient
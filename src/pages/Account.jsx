import useAccount from "../api/useAccount";
import NavBar from "../components/NavBar";
import { IoArrowUndo } from "react-icons/io5";
import { Link } from "react-router-dom";

const Account = () => {
    const { account } = useAccount();
    return ( 
        <>
        <NavBar />
        <img className="object-contain fixed z-[-1] top-0" src="src/assets/Background.png"></img>
        <section className="min-h-screen flex flex-row align-middle justify-center">
            <div className="inline-grid mt-36">
            <Link className="self-start p-10 inline-grid" to="/dashboard"><IoArrowUndo size="80" /></Link>
            </div>
            <section className="mt-36 items-center grid grid-cols-3 grid-rows-6">
                <h1 className="font-MajorMono text-4xl col-start-1 col-span-2">aCCount detAils</h1>
                <h1 className="font-Nova text-4xl col-start-2 col-span-2">{account.firstName} {account.lastName}</h1>
                <h1 className="font-Zilla text-3xl col-start-1 col-span-2 flex flex-col">
                    <span className="font-bold">
                    Profession
                    </span>
                    <span className="ml-5 pt-1">
                    {account.profession}
                    </span>
                </h1>
                <h1 className="font-Zilla text-3xl col-start-1 col-span-2 flex flex-col">
                    <span className="font-bold">
                    Employee ID
                    </span>
                    <span className="ml-5 pt-1">
                    {account.employeeID}
                    </span>
                </h1>
                <h1 className="font-Zilla text-3xl col-start-1 col-span-2 flex flex-col">
                    <span className="font-bold">
                    Email
                    </span>
                    <span className="ml-5 pt-1">
                    {account.email}
                    </span>
                </h1>
                <h1 className="font-Zilla text-3xl col-start-1 col-span-2 flex flex-col">
                    <span className="font-bold">
                    Phone
                    </span>
                    <span className="ml-5 pt-1">
                    {account.phone}
                    </span>
                </h1>
            </section>
        </section>
        <footer className="w-screen h-[5vh] bg-Selective sticky bottom-0" />
        </>
     );
}
 
export default Account;
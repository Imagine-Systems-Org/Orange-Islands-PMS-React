import NavBarIcon from "./NavBarIcon";
import { CgProfile } from "react-icons/cg";

const FooterDashboard = () => {
    return ( 
            <footer className="footer w-screen h-[15vh] bg-Selective sticky bottom-0 px-20 flex flex-row justify-end items-center">
                <NavBarIcon icon={<CgProfile size="52" />} text="Account" link="/account" />
            </footer>
     );
}
 
export default FooterDashboard;
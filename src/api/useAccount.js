import { useContext } from "react";
import AccountContext from './AccountProvider';

const useAccount = () => {
    return useContext(AccountContext);
}

export default useAccount;
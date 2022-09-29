import { useSelector } from "react-redux";
import { RootState } from "../../store/store";
import { logoutUser } from "../../store/userSlice";
// makes no sense not using this.
export const useLogoutUserSelector = () => {
    const user = logoutUser();
    return user

}
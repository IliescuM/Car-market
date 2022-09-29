import { IUser } from './../../types/userTypes/IUser';
import { useSelector } from "react-redux"
import { RootState } from "../../store/store"

export const useUserSelector = () => {
    const cars = useSelector((state: RootState) => state.user.user);
    return cars as IUser;
};
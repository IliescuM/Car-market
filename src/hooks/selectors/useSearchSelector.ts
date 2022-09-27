import { ICar } from './../../types/ICar';
import { useSelector } from "react-redux"
import { RootState } from "../../store/store"

export const useSearchSelector = () => {
    const search = useSelector((state: RootState) => state.cars.search);
    return search as string;
};
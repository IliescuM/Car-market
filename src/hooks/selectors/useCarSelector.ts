import { useSelector } from "react-redux"
import { RootState } from "../../store/store"

export const useCarSelector = () => {
    const cars = useSelector((state: RootState) => state.cars.cars);
    return cars;
};
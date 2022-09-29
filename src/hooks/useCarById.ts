import { ICar } from '../types/carTypes/ICar';
import { RootState } from './../store/store';
import { useSelector } from './../../node_modules/react-redux/src/hooks/useSelector';
export const useCarById = (uuid: String) => {
    const car = useSelector((state: RootState) =>
        state.cars.cars.
            filter((car: ICar) => car._uuid === uuid));
    return car;
};
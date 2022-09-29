import { ICar } from '../../types/carTypes/ICar';
import { RootState } from '../../store/store';
import { useSelector } from 'react-redux';
export const useCarFilterByNameSelector = () => {
    const cars = useSelector(
        (state: RootState) => state.cars.cars.filter(
            (car: ICar) => car.name.toLowerCase().includes(state.cars.search.toLowerCase())));
    return cars as ICar[];
}
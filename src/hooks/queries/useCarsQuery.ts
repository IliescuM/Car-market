import { useDispatch } from "react-redux"
import { carKeyBuilder } from '../../keyBuilders/carKeyBuilder';
import { useQuery } from "@tanstack/react-query"
import { getCars } from "../../service/carService"
import { setCars } from "../../store/carsSlice";

export const useCarsQuery = () => {
    const dispatch = useDispatch();

    return useQuery(carKeyBuilder.cars(), getCars, {
        onSuccess: (data) => {
            dispatch(setCars(data))
        }
    })
}
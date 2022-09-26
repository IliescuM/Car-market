import { setCars } from './../../store/carsActionCreators';
import { useDispatch } from "react-redux"
import { keyBuilder } from '../../keyBuilder';
import { useQuery } from "@tanstack/react-query"
import { getCars } from "../../service/carService"

export const useCarsQuery = () => {
    const dispatch = useDispatch();
    return useQuery(keyBuilder.cars(), getCars, {
        onSuccess: (data) => {
            dispatch(setCars(data))
        }
    })
}
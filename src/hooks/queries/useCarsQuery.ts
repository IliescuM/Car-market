import { keyBuilder } from '../../keyBuilder';
import { useQuery } from "@tanstack/react-query"
import { getCars } from "../../service/carService"

export const useCarsQuery = () => {
    return useQuery(keyBuilder.cars(), getCars)
}
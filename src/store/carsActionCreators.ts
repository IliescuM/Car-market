import { ICar } from './../types/ICar';
import * as carsActionTypes from "./carsActionTypes"
export const setCars = (cars: ICar[]) => ({

    type: carsActionTypes.SET_CARS,
    payload: {
        cars,
    },
})
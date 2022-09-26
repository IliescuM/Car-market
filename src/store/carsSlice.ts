import { AnyAction } from "redux";
import * as carsActionTypes from "./carsActionTypes"
const initialState = {
    cars: [],
};



export const carsReducer = (state = initialState, action: AnyAction) => {
    const { payload, type } = action;

    switch (type) {
        case carsActionTypes.SET_CARS:
            return { ...state, cars: payload.cars };
        default:
            return state;
    }

};
import { carsReducer } from './carsSlice';
import { combineReducers } from "redux";
import { counterReducer } from "./counterSlice";


export const reducer = combineReducers({
    counter: counterReducer,
    cars: carsReducer,
});



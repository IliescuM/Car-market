import carsReducer from './carsSlice';
import { combineReducers } from "redux";
import counterReducer from "./counterSlice";
import userReducer from "./userSlice"


export const reducer = combineReducers({
    counter: counterReducer,
    cars: carsReducer,
    user: userReducer,
});



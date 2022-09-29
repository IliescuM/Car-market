import counterReducer from './counterSlice';
import { configureStore } from "@reduxjs/toolkit"
import carsReducer from './carsSlice';
import userReducer from './userSlice';


export const store = configureStore({
    reducer: {
        counter: counterReducer,
        cars: carsReducer,
        user: userReducer,
    }

});
export type RootState = ReturnType<typeof store.getState>
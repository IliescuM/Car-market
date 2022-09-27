import counterReducer from './counterSlice';
import { configureStore } from "@reduxjs/toolkit"
import carsReducer from './carsSlice';

export const store = configureStore({
    reducer: {
        counter: counterReducer,
        cars: carsReducer,
    }

});
export type RootState = ReturnType<typeof store.getState>
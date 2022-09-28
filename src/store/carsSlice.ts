import { createSlice } from "@reduxjs/toolkit";
const initialState = {
    cars: [],
    search: '',
};

const carsSlice = createSlice({
    name: "cars",
    initialState: initialState,
    reducers: {
        setCars(state, action) {
            state.cars = action.payload;
        },
        setSearchByName(state, action) {
            state.search = action.payload
        }
    }
});
export const { setCars, setSearchByName } = carsSlice.actions;
export default carsSlice.reducer;


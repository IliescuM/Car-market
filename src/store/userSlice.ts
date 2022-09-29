import { createSlice } from "@reduxjs/toolkit";
const initialState = {
    user: {},

};

const userSlice = createSlice({
    name: "user",
    initialState: initialState,
    reducers: {
        setUser(state, action) {
            state.user = action.payload;
        },
        logoutUser(state) {
            state.user = initialState;
        }

    }
});
export const { setUser, logoutUser } = userSlice.actions;
export default userSlice.reducer;


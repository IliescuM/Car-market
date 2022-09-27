import { createSlice } from "@reduxjs/toolkit";
const initialState = {
    count: 0,
};

const counterSlice = createSlice({
    name: "counter",
    initialState: initialState,
    reducers: {
        increment(state) {
            state.count++;
            console.log("increment");
        },
        decrement(state) {
            state.count--;
            console.log("decremenet");

        },
        incrementByValue(state, action) {
            state.count += action.payload;
        },
    },
});
export const { increment, decrement, incrementByValue } = counterSlice.actions;
export default counterSlice.reducer;

// (state = initialState, action: AnyAction) => {
//     const { count } = state;
//     const { payload, type } = action;

//     switch (type) {
//         case counterActionTypes.INCREMENT:
//             return { ...state, count: state.count + 1 };
//         case counterActionTypes.DECREMENT:
//             return { ...state, count: state.count - 1 };
//         case counterActionTypes.INCREMENT_BY_VALUE:
//             return { ...state, count: state.count + action.payload.number };
//         default:
//             return state;
//     }

// };
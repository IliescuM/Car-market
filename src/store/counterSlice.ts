import { AnyAction } from "redux";
import * as counterActionTypes from "./counterActionTypes"
const initialState = {
    count: 0,
};


export const counterReducer = (state = initialState, action: AnyAction) => {
    const { count } = state;
    const { payload, type } = action;

    switch (type) {
        case counterActionTypes.INCREMENT:
            return { ...state, count: state.count + 1 };
        case counterActionTypes.DECREMENT:
            return { ...state, count: state.count - 1 };
        case counterActionTypes.INCREMENT_BY_VALUE:
            return { ...state, count: state.count + action.payload.number };
        default:
            return state;
    }

};
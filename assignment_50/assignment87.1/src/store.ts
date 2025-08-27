
import { Action, createStore } from "redux";

export type State = {
    sadCount: number,
    happyCount: number
}

const initialState = {
    sadCount: 0,
    happyCount: 0
};

function reducer(currentState: State=initialState, action: Action): State {
    if (action.type === "Happy Clicked") {
        return {
            ...currentState,
            happyCount: currentState.happyCount + 1
        }
    } else if (action.type === "Sad Clicked") {
        return {
            ...currentState,
            sadCount: currentState.sadCount + 1
        }
    } else {
        return currentState;
    }
}

const store = createStore(reducer);

export default store;
import {State} from "./store";

export const happySelector = (state: State) => state.happyCount;
export const sadSelector = (state: State) => state.sadCount;
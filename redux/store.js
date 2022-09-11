import { createStore } from 'redux';
import reducer from "./reducers/index";

export default function combineReducers(initialState) {
    return createStore(reducer, initialState);
}
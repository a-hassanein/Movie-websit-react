import {createStore } from "redux";
import MovieReducer  from "../store/reducer";




const store  = createStore(MovieReducer)

export default store;

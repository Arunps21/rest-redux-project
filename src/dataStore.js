import { applyMiddleware, combineReducers, createStore } from "redux";
import { thunk } from "redux-thunk";
import { restReducer } from "./reducer/restReducer";

//create reducer
const reducer = combineReducers({
    reducer1:restReducer
})

//create middlware
const middlware = [thunk]

//create store
//                        reducer, middleware
const store = createStore(reducer,applyMiddleware(...middlware))

export default store
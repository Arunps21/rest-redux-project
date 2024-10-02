import { applyMiddleware, combineReducers, createStore } from "redux";
import { thunk } from "redux-thunk";

//create reducer
const reducer = combineReducers({

})

//create middlware
const middlware = [thunk]

//create store
//                        reducer, middleware
const store = createStore(reducer,applyMiddleware(...middlware))

export default store
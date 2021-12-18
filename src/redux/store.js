//first argument of createStore is a reducer -- which in fact can be a list of mini reducers - but it's better to combine them in the rootreducer
//second argument is composeWithDevTools - lets us connect our devtools with it.
//thunk lets you create async actions

//the store is connected to react by the provider in the index.js

import { createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import { applyMiddleware } from "redux";
import thunk from "redux-thunk";
import RootReducer from "./reducers/RootReducer"

const Store = createStore(RootReducer, composeWithDevTools(applyMiddleware(thunk)));

export default Store

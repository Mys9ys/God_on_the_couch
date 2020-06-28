import {applyMiddleware, combineReducers, createStore} from "redux";
import thunkMiddleware from "redux-thunk";
import mapReducer from "./map.reducer";


let reducers = combineReducers({
    map:mapReducer
    // profilePage: profileReducer,
    // dialogsPage: dialogReducer,
    // usersPage: usersReducer,
    // auth: authReducer,
    // form: formReducer,
    // app: appReducer
});

// const store = createStore(reducers, composeEnhancers(applyMiddleware(thunkMiddleware)));

let store = createStore(reducers, applyMiddleware(thunkMiddleware));
window.store = store;
export default store;
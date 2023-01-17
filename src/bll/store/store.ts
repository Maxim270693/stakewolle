import {applyMiddleware, combineReducers, compose, legacy_createStore as createStore} from 'redux'
import {SignUpReducer} from "../reducers/signUpReducer";
import {RootStateType} from "../../types/types";
import thunk from "redux-thunk";

export const rootReducer = combineReducers({
    signUp: SignUpReducer
})

function saveToLocalStorage(store: RootStateType) {
    try {
        const serializedStore = JSON.stringify(store);
        window.localStorage.setItem("store", serializedStore);
    } catch (e) {
        console.log(e);
    }
}

function loadFromLocalStorage() {
    try {
        const serializedStore = window.localStorage.getItem("store");
        if (serializedStore === null) return undefined;
        return JSON.parse(serializedStore);
    } catch (e) {
        console.log(e);
        return undefined;
    }
}

//@ts-ignore
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const persistedState = loadFromLocalStorage();

export const store = createStore(
    rootReducer,
    persistedState,

    composeEnhancers(applyMiddleware(thunk))
);

store.subscribe(() => saveToLocalStorage(store.getState()));

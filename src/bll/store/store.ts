import {combineReducers, legacy_createStore as createStore} from 'redux'
import {SignUpReducer} from "../reducers/signUpReducer";

export const rootReducer = combineReducers({
    signUp: SignUpReducer
})

export const store = createStore(rootReducer)
import {ActionsType, InitialStateSignUpType} from "../../types/types";
import {GET_EMAIL, GET_PASSWORD, GET_USERNAME} from "../../constants/constants";

export const initialStateSignUp = {
    username: '',
    email: '',
    password: '',
    isLoading: false,
}

export const SignUpReducer = (state = initialStateSignUp, action: ActionsType): InitialStateSignUpType => {
    switch (action.type) {
        case GET_USERNAME:
            return {...state, username: action.payload}
        case GET_EMAIL:
            return {...state, email: action.payload}
        case GET_PASSWORD:
            return {...state, password: action.payload}
        default:
            return state
    }
}
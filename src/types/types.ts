import {rootReducer} from "../bll/store/store";
import {initialStateSignUp} from "../bll/reducers/signUpReducer";
import {
    getEmail,
    getName,
    getPassword,
    isRegisterAC
} from "../bll/actions/signUpActions";

export type OnjType = {
    name: string,
    order: number
    checked: boolean
}

export type RootStateType = ReturnType<typeof rootReducer>

export type InitialStateSignUpType = typeof initialStateSignUp

type GetNameActionType = ReturnType<typeof getName>
type GetEmailActionType = ReturnType<typeof getEmail>
type GetPasswordActionType = ReturnType<typeof getPassword>
type IsRegisterActionType = ReturnType<typeof isRegisterAC>

export type ActionsType =
    GetNameActionType
    | GetEmailActionType
    | GetPasswordActionType
    | IsRegisterActionType
import {GET_EMAIL, GET_PASSWORD, GET_USERNAME, IS_REGISTER} from "../../constants/constants";

export const getName = (payload: string) => ({type: GET_USERNAME, payload} as const)
export const getEmail = (payload: string) => ({type: GET_EMAIL, payload} as const)
export const getPassword = (payload: string) => ({type: GET_PASSWORD, payload} as const)
export const isRegisterAC = (payload: boolean) => ({type: IS_REGISTER, payload} as const)
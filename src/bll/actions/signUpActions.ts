import {GET_EMAIL, GET_PASSWORD, GET_USERNAME} from "../../constants/constants";

export const getName = (payload: string) => ({type: GET_USERNAME, payload})
export const getEmail = (payload: string) => ({type: GET_EMAIL, payload})
export const getPassword = (payload: string) => ({type: GET_PASSWORD, payload})
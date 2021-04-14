import axios from "axios";
import setAuthToken from "../utils/setAuthToken"


import {
    GET_PROFILE,
GET_ERRORS} from "./types"

    export const getProfileById = userId => async dispatch =>{
        axios
        .get(`/profile/user/id`,userId)
        .then(res => {
            dispatch({
                type: GET_PROFILE,
                payload: res.data
              })
    })
    .catch(err => dispatch({
        type: GET_ERRORS,
        payload: err.res.data
    })
    );}
    
    
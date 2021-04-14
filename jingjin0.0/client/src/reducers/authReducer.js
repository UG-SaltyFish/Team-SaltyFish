import {
    SET_CURRENT_USER,
    SHOW_ERROR
} from "../actions/types";
const isEmpty = require("is-empty");
const initialState = {
    isAuthenticated: false,
    user: {},
    errors: {}
};

export default function(state = initialState, action) {
    
    switch (action.type) {
        case SET_CURRENT_USER:
            return {
                ...state,
                isAuthenticated: !isEmpty(action.payload),
                user: action.payload
            };
        case SHOW_ERROR:
            return {
                ...state,
   
                errors: action.payload
            }              

            default:
                return state;
        }}

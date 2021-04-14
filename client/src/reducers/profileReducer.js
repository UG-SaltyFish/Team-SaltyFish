import {
    GET_PROFILE
} from "../actions/types";

const initialState = {
    profile: null,
    profiles: [],
    experience: '',
    education: '',
    loading: true,
    error: {}
  };
  export default function(state = initialState, action) {
    switch (action.type){
        case GET_PROFILE:
      case UPDATE_PROFILE:
        return {
          ...state,
          profile: payload,
          experience: null,
          education: null,
          loading: false
        };
        default:
        return state;

    }}
    




import { combineReducers } from "redux";
import authReducer from "./authReducer";


export default combineReducers({
    // This what the state object is whenever you call mapStateToProps. When you connect these
    // get linked to that component
    auth: authReducer
});
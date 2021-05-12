// This file contains the logic for how authorisation will work in our app. 
// It uses axios to make HTTPrequests within a certain action and then dispatches them to our reducers

import axios from "axios";

import setAuthToken from "../utils/setAuthToken"

import {
    SHOW_ERROR,
    SET_CURRENT_USER,
    USER_LOADING,
    USER_NOT_LOADING
} from "./types"

//Regular login
export const loginUser = user => dispatch => {
    axios
    .post('/login', user)
      .then(res => {
        const token=res.data;
        console.log(token._id);
        localStorage.setItem("jwtToken", token._id);
        setAuthToken(token._id);
        const decoded = token._id;
        // Set the current user
        dispatch(setCurrentUser(decoded));

        
      })
      .catch(err => dispatch({
        type: SHOW_ERROR,
        payload: err.response.data
    })
    );
  };

//Google login
export const gooLoginUser = user => dispatch => {
    axios
    .post('/goologin', user)
      .then(res => {
        const token=res.data;
        console.log(token._id);
        localStorage.setItem("jwtToken", token._id);
        setAuthToken(token._id);
        const decoded = token._id;
        // Set the current user
        dispatch(setCurrentUser(decoded));

        
      })
      .catch(err => dispatch({
        type: SHOW_ERROR,
        payload: err.response.data
    })
    );
  };
  


export const refreshTokenSetup = (res) =>{
    //Timing to renew access token
    let refreshTiming = (res.tokenObj.expires_in || 3600 - 5 * 60) * 1000;
    
    const refreshToken = async () => {
        const newAuthRes = await res.reloadAuthResponse();
        refreshTiming = (newAuthRes.expires_in || 3600 - 5 * 60) * 1000;
        console.log('newAuthRes:', newAuthRes);
        
        console.log('new auth Token', newAuthRes.id_token);
        //Setup the other timer after the first one
        setTimeout(refreshToken, refreshTiming);
    };
    //Setup first refreshtimer
    setTimeout(refreshToken, refreshTiming);
};


//   //fb login  
//   export const fbLoginUser = user => dispatch => {
//     console.log("000");
//     axios
//     .post('/fblogin', user)
//       .then(res => {
//         const token=res.data;
//         console.log(token._id);
//         localStorage.setItem("jwtToken", token._id);
//         setAuthToken(token._id);
//         const decoded = token._id;
//         // Set the current user
//         dispatch(setCurrentUser(decoded));
//       })
//       .catch(err => dispatch({
//         type: SHOW_ERROR,
//         payload: err.response.data
//     })
//     );
//     console.log("111");
//   };


// export const fbrefreshTokenSetup = (res) =>{
//   //Timing to renew access token
//   let refreshTiming = (res.expiresIn || 3600 - 5 * 60) * 1000;
  
//   const refreshToken = async () => {
//       const newAuthRes = await res.reloadAuthResponse();
//       refreshTiming = (newAuthRes.expiresIn || 3600 - 5 * 60) * 1000;
//       console.log('newAuthRes:', newAuthRes);
      
//       console.log('new auth Token', newAuthRes.id_token);
//       //Setup the other timer after the first one
//       setTimeout(refreshToken, refreshTiming);
//   };
//   //Setup first refreshtimer
//   setTimeout(refreshToken, refreshTiming);
//   console.log("222");
// };



export const setCurrentUser = decoded => {
    return {
        type: SET_CURRENT_USER,
        payload: decoded
    };
};
export const setUserLoading = () => {
    return {
        type: USER_LOADING
    };
};

// User isn't loading
export const setUserNotLoading = () => {
    return {
        type: USER_NOT_LOADING
    };
};
export const logoutUser = () => dispatch => {
    // Remove the token from localstorage
    localStorage.removeItem("jwtToken");
    // Remove the auth header from future requests
    setAuthToken(false);
    // Set the current user to empty object {} which will set isAuthenticated to false
    dispatch(setCurrentUser({}));
};
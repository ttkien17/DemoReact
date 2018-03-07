const axios = require('axios')
export const Types = {
  AUTH_LOGIN_REQUEST: "AUTH_LOGIN_REQUEST",
  AUTH_LOGIN_SUCCESS: "AUTH_LOGIN_SUCCESS",
  AUTH_LOGIN_FAILURE: "AUTH_LOGIN_FAILURE",

  AUTH_SET_PROFILE: 'AUTH_SET_PROFILE',
  AUTH_LOGOUT: "AUTH_LOGOUT",

};

export function loginRequest(userName, passWord) {
  return (dispatch, getState) => {
    const action = {
      type: Types.AUTH_LOGIN_REQUEST
    };
    dispatch(action);
    setTimeout(() => {
      dispatch(fetchLogin(userName, passWord));
    }, 300);
  };
}
function getCookie(cname) {
  var name = cname + "=";
  var decodedCookie = decodeURIComponent(document.cookie);
  var ca = decodedCookie.split(';');
  for (var i = 0; i < ca.length; i++) {
    var c = ca[i];
    while (c.charAt(0) === ' ') {
      c = c.substring(1);
    }
    if (c.indexOf(name) === 0) {
      return c.substring(name.length, c.length);
    }
  }
  return "";
}

export function initAuth() {
  return (dispatch, getState) => {
    dispatch({type: Types.AUTH_SET_PROFILE, profile: localStorage.getItem("profile")})
  };
}

function fetchLogin(userName, passWord) {
  return dispatch => {
    axios.post('http://10.20.33.127:4000/auth/login', { userName, passWord }, {
      headers: {
        'Content-Type': 'application/json;charset=UTF-8',
        // 'Access-Control-Allow-Origin': '*',
        'chanel': 'web',
        'token': null
      },
      // withCredentials: true
    })
      .then(response => {
        console.log(response)
        return response.data.message;
      })
      .then(result => {
        const {token} = result
        localStorage.setItem("profile", JSON.stringify(result));
        dispatch(setToken(token));
        dispatch({ type: Types.AUTH_LOGIN_SUCCESS, token });
        dispatch({type: Types.AUTH_SET_PROFILE, profile: result})
        document.location = '/'
      })
      .catch(error => {
        console.error(error);
        dispatch({ type: Types.AUTH_LOGIN_FAILURE, error });
      });
  };
}
function setToken(token) {
  return dispatch => {
    localStorage.setItem("token", token);
  };
}

export function logout() {
  return dispatch => {
    dispatch(removeToken());
    dispatch({ type: Types.AUTH_LOGOUT });
     document.location = '/'
  };
}

function removeToken() {
  return dispatch => {
    localStorage.removeItem("token");
  };
}
import { Types } from "../action/UserAction";

const initialState = {
  isAuthed: localStorage.getItem("accessToken") ? true : false,
  accessToken: localStorage.getItem("accessToken"),
  isFetching: false,
  error: null,
};

export default function authencation(state = initialState, action) {
  switch (action.type) {
    case Types.AUTH_LOGIN_REQUEST:
      return Object.assign({}, state, { isFetching: true });

    case Types.AUTH_LOGIN_SUCCESS:
      return Object.assign({}, state, {
        isAuthed: true,
        isFetching: false,
        accessToken: action.token,
        error: null
      });

    case Types.AUTH_LOGIN_FAILURE:
      return Object.assign({}, state, {
        isAuthed: false,
        isFetching: false,
        error: action.error
      });

    case Types.AUTH_REGISTER_REQUEST:
      return Object.assign({}, state, { isFetching: true });

    case Types.AUTH_REGISTER_SUCCESS:
      return Object.assign({}, state, {
        isAuthed: true,
        isFetching: false,
        accessToken: action.token,
        error: null
      });

    case Types.AUTH_REGISTER_FAILURE:
      return Object.assign({}, state, {
        isAuthed: false,
        isFetching: false,
        error: action.error
      });

    case Types.AUTH_LOGOUT:
      return Object.assign({}, initialState, {
        isAuthed: false
      });

    case Types.AUTH_SET_PROFILE:
      return Object.assign({}, state, { profile: action.profile });

    case Types.AUTH_ME_REQUEST:
      return Object.assign({}, state, { isFetching: true });

    case Types.AUTH_ME_SUCCESS:
      return Object.assign({}, state, {
        isFetching: false
      });

    case Types.AUTH_ME_FAILURE:
      return Object.assign({}, state, {
        isFetching: false
      });

    default:
      return state;
  }
}
import { AUTH_USER, SIGN_OUT } from "./../actions/types";

const INITIAL_USER_STATE = {
  data: {
    email: null,
    role: null,
    _id: null,
  },
  auth: null,
};

export default function usersReducer(state = INITIAL_USER_STATE, action: any) {
  switch (action.type) {
    case AUTH_USER:
      return {
        ...state,
        data: { ...state.data, ...action.payload.data },
        auth: action.payload.auth,
      };
    case SIGN_OUT:
      return { ...state, data: { ...INITIAL_USER_STATE.data }, auth: false };
    default:
      return state;
  }
}

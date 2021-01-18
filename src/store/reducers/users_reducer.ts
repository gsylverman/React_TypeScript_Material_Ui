import { AUTH_USER } from "./../actions/types";
const INITIAL_USER_STATE = {
  data: {
    email: null,
    role: null,
    _id: null,
  },
  auth: null,
};

export default function usersReducer(state = INITIAL_USER_STATE, action: any) {
  console.log(action.payload);
  switch (action.type) {
    case AUTH_USER:
      return {
        ...state,
        data: { ...state.data, ...action.payload.data },
        auth: action.payload.auth,
      };
    default:
      return state;
  }
}

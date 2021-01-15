import {
  ERROR_GLOBAL,
  GlobalDispatchErrorSucces,
  SUCCES_GLOBAL,
  CLEAR_NOTIFICATIONS,
} from "./../actions/types";

interface NotificationState {
  error: boolean;
  msg: string;
  succes: boolean;
}

const initialNotification = {
  error: false,
  msg: "",
  succes: false,
};

export default function notificationReducer(
  state: NotificationState = initialNotification,
  action: GlobalDispatchErrorSucces
) {
  switch (action.type) {
    case ERROR_GLOBAL:
      return {
        ...state,
        error: true,
        msg: action.payload,
      };
    case SUCCES_GLOBAL:
      return {
        ...state,
        succes: true,
        msg: action.payload,
      };
    case CLEAR_NOTIFICATIONS:
      return {
        ...initialNotification,
      };
    default:
      return state;
  }
}

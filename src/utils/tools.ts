import { toast } from "react-toastify";
import cookie from "react-cookies";

export const showToast = (type: string, message: string) => {
  switch (type) {
    case "SUCCES":
      toast.success(message, {
        position: toast.POSITION.BOTTOM_RIGHT,
      });
      break;
    case "ERROR":
      toast.error(message, {
        position: toast.POSITION.BOTTOM_RIGHT,
      });
      break;

    default:
      return false;
  }
};

export const getTokenCookie = () => cookie.load("x-access-token");
export const removeTokenCookie = () => cookie.remove("x-access-token");
export const getAuthHeaders = () => {
  return {
    headers: { "x-access-token": getTokenCookie() },
  };
};

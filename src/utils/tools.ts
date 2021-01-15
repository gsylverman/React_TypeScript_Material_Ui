import { toast } from "react-toastify";

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

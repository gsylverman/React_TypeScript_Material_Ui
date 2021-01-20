import { FC, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootStore } from "../store";
import {
  errorNotificationGlobal,
  clearNotificationGlobal,
} from "../store/actions";

export default function check(ComposedComponent: FC, roleCheck = false) {
  const AuthenticationCheck = (props: any) => {
    const [isAuth, setIsAuth] = useState(false);
    const users = useSelector((state: RootStore) => state.users);
    const dispatch = useDispatch();

    useEffect(() => {
      if (users && users.auth) {
        setIsAuth(true);
      } else {
        const notify = async () => {
          await dispatch(errorNotificationGlobal("You are not logged in!"));
          dispatch(clearNotificationGlobal());
        };
        notify();
        props.history.push("/");
      }
    }, [users, props.history, dispatch]);

    if (!isAuth) {
      return <div>Not allowed</div>;
    } else {
      return <ComposedComponent {...props} />;
    }
  };
  return AuthenticationCheck;
}

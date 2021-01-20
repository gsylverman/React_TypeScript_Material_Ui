import { FC, useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { RootStore } from "../store";

export default function check(ComposedComponent: FC, roleCheck = false) {
  const AuthenticationCheck = (props: any) => {
    const [isAuth, setIsAuth] = useState(false);
    const users = useSelector((state: RootStore) => state.users);

    useEffect(() => {
      if (users && users.auth) {
        setIsAuth(true);
      } else {
        setIsAuth(false);
      }
    }, [users]);

    if (!isAuth) {
      return <div>Not allowed</div>;
    } else {
      return <ComposedComponent {...props} />;
    }
  };
  return AuthenticationCheck;
}

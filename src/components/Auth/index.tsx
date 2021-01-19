import { FormikErrors, FormikTouched, useFormik } from "formik";
import * as Yup from "yup";
import { TextField, Grid, Button } from "@material-ui/core";
import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { registerUser, signInUser } from "../../store/actions/users_actions";
import { RootStore } from "../../store";
import { RouteComponentProps } from "react-router-dom";

interface Values {
  email: string;
  password: string;
}

const SignupSchema = Yup.object().shape({
  email: Yup.string()
    .required("The email is required!")
    .email("This is not a valid email"),
  password: Yup.string()
    .required("The email is required!")
    .min(4, "Too Short!"),
});

export interface AuthProps {
  location: RouteComponentProps["location"];
  history: RouteComponentProps["history"];
  match: RouteComponentProps["match"];
}

const Auth: React.FC<AuthProps> = (props) => {
  const [register, setRegister] = useState<boolean>(false);
  const dispatch = useDispatch();
  const notifications = useSelector((state: RootStore) => state.notifications);
  useEffect(() => {
    if (notifications && notifications.succes) {
      props.history.push("/");
    }
  }, [notifications, props.history]);

  const formik = useFormik({
    initialValues: { email: "", password: "" },
    validationSchema: SignupSchema,
    onSubmit: (values, { resetForm }) => {
      handleSubmit(values);
    },
  });

  const handleSubmit = (values: Values) => {
    if (register) {
      dispatch(registerUser(values));
    } else {
      dispatch(signInUser(values));
    }
  };

  const errorHelper = (
    formikError: FormikErrors<any>,
    formikTouched: FormikTouched<any>,
    value: any
  ) => ({
    error: formikError[value] && formikTouched[value] ? true : false,
    helperText:
      formikError[value] && formikTouched[value] ? formikError[value] : null,
  });

  return (
    <Grid container item style={{ marginTop: "60px" }}>
      <Grid container item md={4} xs={1} />
      <Grid item xs={10} md={4}>
        <h1>{register ? "Register" : "Login"}</h1>
        <form onSubmit={formik.handleSubmit} noValidate autoComplete="off">
          <TextField
            fullWidth
            id="email"
            label="Enter your email"
            {...formik.getFieldProps("email")}
            {...errorHelper(formik.errors, formik.touched, "email")}
          />
          <TextField
            fullWidth
            id="password"
            label="Enter your password"
            type="password"
            {...formik.getFieldProps("password")}
            {...errorHelper(formik.errors, formik.touched, "password")}
          />

          <div style={{ marginTop: "30px" }}>
            <Button
              fullWidth
              type="submit"
              variant="contained"
              color="primary"
              size="large"
            >
              {register ? "Register" : "Login"}
            </Button>
          </div>

          <div style={{ marginTop: "10px" }}>
            <Button
              onClick={() => setRegister(!register)}
              fullWidth
              variant="contained"
              size="large"
            >
              Whant to {register ? "Login" : "Register"}
            </Button>
          </div>
        </form>
      </Grid>
      <Grid container item xs={1} md={4} />
    </Grid>
  );
};

export default Auth;

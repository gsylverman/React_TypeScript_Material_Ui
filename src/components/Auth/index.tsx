import { FormikErrors, FormikTouched, useFormik } from "formik";
import * as Yup from "yup";
import {
  TextField,
  Grid,
  Button,
  Typography,
  FormControl,
  InputLabel,
  Input,
  FormHelperText,
} from "@material-ui/core";
import Container from "@material-ui/core/Container";
import React, { useState } from "react";

interface Values {
  name: string;
  email: string;
}

const SignupSchema = Yup.object().shape({
  email: Yup.string()
    .required("The email is required!")
    .email("This is not a valid email"),
  password: Yup.string()
    .required("The email is required!")
    .min(4, "Too Short!"),
});

export interface AuthProps {}

const Auth: React.FC<AuthProps> = (props) => {
  const [register, setRegister] = useState<boolean>(false);

  const formik = useFormik({
    initialValues: { email: "", password: "" },
    validationSchema: SignupSchema,
    onSubmit: (values, { resetForm }) => {
      console.log(values);
    },
  });

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
    <Grid container item>
      <Grid container item xs={3} />
      <Grid item xs={6}>
        <h1>{register ? "Register" : "Login"}</h1>
        <form onSubmit={formik.handleSubmit} noValidate autoComplete="off">
          <TextField
            fullWidth
            id="standard-basic"
            label="Enter your email"
            {...formik.getFieldProps("email")}
            {...errorHelper(formik.errors, formik.touched, "email")}
          />
          <TextField
            fullWidth
            id="standard-basic"
            label="Enter your password"
            type="password"
            {...formik.getFieldProps("password")}
            {...errorHelper(formik.errors, formik.touched, "password")}
          />

          <div style={{ marginTop: "10px" }}>
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
              type="submit"
              variant="contained"
              color="primary"
              size="large"
            >
              Whant to {register ? "Login" : "Register"}
            </Button>
          </div>
        </form>
      </Grid>
      <Grid container item xs={3} />
    </Grid>
  );
};

export default Auth;

import React from "react";
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";
import "../App.css";
import Typography from "@mui/material/Typography";
import AddIcon from "@mui/icons-material/Add";
import Divider from "@mui/material/Divider";

class RightSideForm extends React.Component {
  render() {
    return (
      <Formik
        initialValues={{
          firstName: "",
          lastName: "",
          email: "",
          password: "",
          confirmPassword: "",
        }}
        validationSchema={Yup.object().shape({
          firstName: Yup.string().required("First Name is required"),
          lastName: Yup.string().required("Last Name is required"),
          email: Yup.string()
            .email("Email is invalid")
            .required("Email is required"),
          password: Yup.string()
            .min(6, "Password must be at least 6 characters")
            .required("Password is required"),
          confirmPassword: Yup.string()
            .oneOf([Yup.ref("password"), null], "Passwords must match")
            .required("Confirm Password is required"),
        })}
        onSubmit={(fields) => {
          alert("SUCCESS!! :-)\n\n" + JSON.stringify(fields, null, 4));
        }}
        render={({ errors, status, touched }) => (
          <Form>
            {/* <div className="form-group">
              <Typography>Dry Room (Phase)</Typography>
              <Field
                name="firstName"
                type="text"
                className={
                  "form-control" +
                  (errors.firstName && touched.firstName ? " is-invalid" : "")
                }
              />
              <ErrorMessage
                name="firstName"
                component="div"
                className="invalid-feedback"
              />
            </div>
            <div className="form-group">
              <Field
                name="lastName"
                type="text"
                className={
                  "form-control" +
                  (errors.lastName && touched.lastName ? " is-invalid" : "")
                }
              />
              <ErrorMessage
                name="lastName"
                component="div"
                className="invalid-feedback"
              />
            </div>
            <div className="form-group">
              <Field
                name="email"
                type="text"
                className={
                  "form-control" +
                  (errors.email && touched.email ? " is-invalid" : "")
                }
              />
              <ErrorMessage
                name="email"
                component="div"
                className="invalid-feedback"
              />
            </div>
            <div className="form-group">
              <Field
                name="password"
                type="password"
                className={
                  "form-control" +
                  (errors.password && touched.password ? " is-invalid" : "")
                }
              />
              <ErrorMessage
                name="password"
                component="div"
                className="invalid-feedback"
              />
            </div>
            <div className="form-group">
              <Field
                name="confirmPassword"
                type="password"
                className={
                  "form-control" +
                  (errors.confirmPassword && touched.confirmPassword
                    ? " is-invalid"
                    : "")
                }
              />
              <ErrorMessage
                name="confirmPassword"
                component="div"
                className="invalid-feedback"
              />
            </div>
            <div className="form-group">
              <button type="submit" className="btn btn-primary mr-2">
                Submit
              </button>
            </div> */}
            <Typography style={{ marginBottom: 15 }}>Waste</Typography>
            <Divider style={{ marginBottom: 15 }} />
            <div style={{ marginBottom: 15 }}>
              <label htmlFor>Lost Buds</label>
              <input type="text" />
            </div>
            <div style={{ marginBottom: 15 }}>
              <label htmlFor>Dry Waste</label>
              <input type="text" />
            </div>
            <Divider style={{ marginBottom: 15 }} />
            <div>
              <label htmlFor>Speed Settings</label>
              <input type="text" />
            </div>
          </Form>
        )}
      />
    );
  }
}

export { RightSideForm };

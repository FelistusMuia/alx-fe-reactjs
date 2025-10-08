import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

// Validation schema with string().required included
const validationSchema = Yup.object({
  username: Yup.string().required("Username is required"),
  email: Yup.string()
    .email("Invalid email format")
    .required("Email is required"),
  password: Yup.string().required("Password is required"),
});

function FormikForm() {
  return (
    <div style={{ maxWidth: "400px", margin: "2rem auto" }}>
      <h2>User Registration (Formik + Yup)</h2>

      <Formik
        initialValues={{ username: "", email: "", password: "" }}
        validationSchema={validationSchema}
        onSubmit={(values, { setSubmitting, resetForm }) => {
          console.log("Form Submitted:", values);

          // Simulate mock API request
          setTimeout(() => {
            alert("User registered successfully!");
            setSubmitting(false);
            resetForm();
          }, 1000);
        }}
      >
        {({ isSubmitting }) => (
          <Form>
            {/* Username */}
            <div style={{ marginBottom: "1rem" }}>
              <label htmlFor="username">Username:</label>
              <Field
                type="text"
                name="username"
                placeholder="Enter username"
              />
              <ErrorMessage
                name="username"
                component="div"
                style={{ color: "red" }}
              />
            </div>

            {/* Email */}
            <div style={{ marginBottom: "1rem" }}>
              <label htmlFor="email">Email:</label>
              <Field
                type="email"
                name="email"
                placeholder="Enter email"
              />
              <ErrorMessage
                name="email"
                component="div"
                style={{ color: "red" }}
              />
            </div>

            {/* Password */}
            <div style={{ marginBottom: "1rem" }}>
              <label htmlFor="password">Password:</label>
              <Field
                type="password"
                name="password"
                placeholder="Enter password"
              />
              <ErrorMessage
                name="password"
                component="div"
                style={{ color: "red" }}
              />
            </div>

            <button type="submit" disabled={isSubmitting}>
              {isSubmitting ? "Submitting..." : "Register"}
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
}

export default FormikForm;
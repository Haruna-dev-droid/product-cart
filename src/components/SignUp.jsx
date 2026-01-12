import React, { useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { useNavigate } from "react-router-dom";

export default function SignUp() {
  const navigate = useNavigate();
  return (
    <>
      <div>SignUp Component</div>
      <Formik
        initialValues={{
          firstName: "",
          lastName: "",
          email: "",
          password: "",
          confirmPassword: "",
        }}
        validate={(values) => {
          const errors = {};
          if (!values.email && !values.firstName && !values.lastName) {
            errors.email = "Required";
            errors.firstName = "Required";
            errors.lastName = "Required";
          } else if (
            !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
          ) {
            errors.email = "Invalid email address";
          }
          // } else if (!values.firstName && !values.lastName) {
          //   errors.firstName = "First Name Required";
          //   errors.lastName = "Last Name Required";
          // }
          return errors;
        }}
        onSubmit={(values, { setSubmitting }) => {
          setTimeout(() => {
            console.log(JSON.stringify(values, null, 2));

            // Redirect to profile page after successful sign-up
            navigate("/Profile", {
              state: {
                userDate: {
                  firstName: values.firstName,
                  lastName: values.lastName,
                  email: values.email,
                },
              },
            });
            setSubmitting(false);
          }, 400);
        }}
      >
        {({ isSubmitting }) => (
          <Form className="flex flex-col ">
            <label htmlFor="firstName">First Name</label>
            <Field name="firstName" id="firstName" />
            <ErrorMessage name="firstName" component="div" />
            <label htmlFor="lastName">Last Name</label>
            <Field name="lastName" id="lastName" />
            <ErrorMessage name="lastName" component="div" />
            <label htmlFor="email">Email</label>
            <Field type="email" name="email" />
            <ErrorMessage name="email" component="div" />
            <label htmlFor="password">Password</label>
            <Field type="password" name="password" />
            <ErrorMessage name="password" component="div" />
            <label htmlFor="confirmPassword">Confirm Password</label>
            <Field name="confirmPassword" id="confirmPassword" />
            <ErrorMessage name="confirmPassword" component="div" />
            <button type="submit" disabled={isSubmitting}>
              Submit
            </button>
          </Form>
        )}
      </Formik>
    </>
  );
}

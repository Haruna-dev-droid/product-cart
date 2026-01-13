import React, { useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { useNavigate } from "react-router-dom";

export default function SignUp() {
  const navigate = useNavigate();
  return (
    <>
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
          } else if (values.password !== values.confirmPassword) {
            errors.confirmPassword = "Passwords must match";
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
                userData: {
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
          <Form className=" bg-black text-white gap-4 p-4 min-h-screen">
            <div className="text-center mt-10 text-3xl font-semibold">
              Welcome, Sign Up
            </div>
            <div className="flex flex-col gap-4 max-w-md mx-auto bg-white/10 p-6 rounded-lg mt-6">
              <label htmlFor="firstName" className="text-sm">
                First Name
              </label>
              <Field
                name="firstName"
                id="firstName"
                className="bg-white/20 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-white/50"
              />
              <ErrorMessage name="firstName" component="div" />
              <label htmlFor="lastName" className="text-sm">
                Last Name
              </label>
              <Field
                name="lastName"
                id="lastName"
                className="bg-white/20 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-white/50"
              />
              <ErrorMessage name="lastName" component="div" />
              <label htmlFor="email" className="text-sm">
                Email
              </label>
              <Field
                type="email"
                name="email"
                className="bg-white/20 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-white/50"
              />
              <ErrorMessage name="email" component="div" />
              <label htmlFor="password" className="text-sm">
                Password
              </label>
              <Field
                type="password"
                name="password"
                className="bg-white/20 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-white/50"
              />
              <ErrorMessage name="password" component="div" />
              <label htmlFor="confirmPassword" className="text-sm">
                Confirm Password
              </label>
              <Field
                type="password"
                name="confirmPassword"
                id="confirmPassword"
                className="bg-white/20 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-white/50"
              />
              <ErrorMessage name="confirmPassword" component="div" />
              <button
                type="submit"
                disabled={isSubmitting}
                className="bg-white/90 hover:bg-white text-black  font-semibold py-2 px-4 rounded-lg mt-4"
              >
                Sign Up
              </button>
            </div>
          </Form>
        )}
      </Formik>
    </>
  );
}

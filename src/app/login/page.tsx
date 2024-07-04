import Head from "next/head";
import React from "react";
import LoginForm from "../components/LoginForm/LoginForm";

const Login = () => {
  return (
    <>
      <Head>
        <title>Login</title>
      </Head>
      <LoginForm />
    </>
  );
};

export default Login;

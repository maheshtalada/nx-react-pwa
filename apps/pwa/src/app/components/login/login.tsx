import React, { useRef, useEffect, useContext, useState } from "react";
import { useLocation } from "wouter";
import classes from "./login.module.css";
import usernameIcon from "../../../assets/akar-icons_person.svg";
import passwordIcon from "../../../assets/carbon_password.svg";
//import ValidUserContext from "../authCheck";

let isInitial = true;

function Login() {
  const [location, setLocation] = useLocation();
  //check if index db holds
  //const validUserContext = useContext(ValidUserContext);
  const [ isLoading, setIsLoading ] = useState(false);
  const emailInputRef = useRef<any>("");
  const passwordInputRef = useRef<any>("");

  useEffect(() => {
    // if (isInitial) {
    //   validUserContext.localAuthCheck();
    //   isInitial = false;
    // }
  }, []);

  const submitHandler = (event:any) => {
    event.preventDefault();
    setLocation("/shop")
    // store in indexDB
    // validUserContext.apiAuthCheck(
    //   emailInputRef.current.value,
    //   passwordInputRef.current.value
    // );
  };

  return (
    <div className={classes["login-wrapper"]}>
    <form onSubmit={submitHandler} className={classes.form}>
    <div>
      {/* <title className={classes.loginTitle}>Login</title>
      <div>Please enter you Login and your Password</div> */}
    </div>
      <div>
        <img
          className={classes.icon}
          src={usernameIcon}
          alt="Username icon"
        ></img>
        <input
          className={classes.input}
          type="email"
          id="user-name"
          name="user-name"
          autoComplete="on"
          placeholder="Username or E-mail"
          ref={emailInputRef}
          required={true}
        ></input>
      </div>

      <div>
        <img
          className={classes.icon}
          src={passwordIcon}
          alt="Password icon"
        ></img>
        <input
          className={classes.input}
          type="password"
          id="user-password"
          name="user-password"
          autoComplete="off"
          placeholder="Password"
          ref={passwordInputRef}
          required={true}
        ></input>
      </div>
      <button
        className={classes.loginBtn}
        disabled={ isLoading ? true : false }
      >
        { isLoading ? "loading" : "Login"}
      </button>
    </form>
    </div>
  );
}

export default Login;

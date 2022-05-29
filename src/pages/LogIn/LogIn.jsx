import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { Validation } from "./Validation.js";
import { logInSuccess } from "./actions";
import "./logIn-styles.css";

const LogIn = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [userCredentials, setCredentials] = useState({
    email: "",
    password: "",
  });

  const [errorMassage, setErrorMassage] = useState({});

  const { email, password } = userCredentials;
  const isLogInSuccess = () => {
    dispatch(logInSuccess(email));
    navigate("/home");
  };
  const handleLogIn = async (e) => {
    e.preventDefault();
    let error = Validation(email, password);
    Object.keys(error).length ? setErrorMassage(error) : isLogInSuccess();
  };

  const handleChange = (event) => {
    const { value, name } = event.target;
    setCredentials({ ...userCredentials, [name]: value });
  };

  return (
    <div className="loginContainer">
      <div className="form">
        <h2>Log In</h2>
        <p>{errorMassage.emailError}</p>
        <input
          type="text"
          name="email"
          placeholder="email"
          onChange={handleChange}
        />
        <p>{errorMassage.passwordError}</p>
        <input
          type="text"
          name="password"
          placeholder="password"
          onChange={handleChange}
        />
        <button onClick={handleLogIn}>Log in</button>
        <Link to="/home">Continue without log in</Link>
      </div>
    </div>
  );
};

export default LogIn;

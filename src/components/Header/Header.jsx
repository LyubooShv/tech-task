import React from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { logOutSuccess } from "../../pages/LogIn/actions";
import "./header-styles.css";

const Header = () => {
  const navigate = useNavigate();
  const { currentUser } = useSelector((state) => state.currentUser);
  const dispatch = useDispatch();
  const logOut = () => {
    navigate("/login");
    dispatch(logOutSuccess());
  };

  return (
    <div className="header">
      <h1>Dogs</h1>
      <h3>Welcome {currentUser}</h3>
      <p onClick={logOut}>Log out</p>
    </div>
  );
};

export default Header;

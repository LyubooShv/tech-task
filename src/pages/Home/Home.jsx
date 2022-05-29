import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { getDogRequest } from "./actions";
import "./home-styles.css";

const Home = () => {
  const dispatch = useDispatch();
  const dogUrl = useSelector((state) => state.dog.dog.data);
  return (
    <div className="homePage">
      <div>
        {" "}
        <button onClick={() => dispatch(getDogRequest())}>New Dog</button>
      </div>
      <div>
        {" "}
        <img src={dogUrl.message} alt="dog" />
      </div>
    </div>
  );
};

export default Home;

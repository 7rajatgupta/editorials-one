import React from "react";
import { Link } from "react-router-dom";
import errorImg from "../static/img/not-found.png";
const Error = () => {
  return (
    <div>
      <div className="error-container container mt-5">
        <img className="error-img" src={errorImg} alt="404" />
      </div>
      <div className=" error-container container mt-5">
        <Link to="/">
          <button className="btn btn-secondary">Guide me Home</button>
        </Link>
      </div>
    </div>
  );
};

export default Error;

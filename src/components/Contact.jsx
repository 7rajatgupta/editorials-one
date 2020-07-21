import React from "react";

const Contact = () => {
  return (
    <div className="container">
      <h1 className="text-primary mt-5">Contact</h1>
      <div className="jumbotron mt-5 mb-5 description">
        <h2 className="mb-5">Shubham Roy</h2>
        <h4>Email Address - shubhamroy4395@gmail.com</h4>{" "}
        <p>
          {" "}
          I'm currently staying in Bangalore, India. <br />
          I'm an Engineering Graduate in Computer Science {"&"} Engineering.
          I've graduated in the year 2018. <br />I work as an Associate
          Developer at Accenture Pvt Ltd.
        </p>{" "}
        <h5>Please check out my Blogs...</h5>
        <h5>
          <a
            className="btn btn-success"
            href="https://www.medium.com/the-motorcycle-journals/"
          >
            Blogs...
          </a>
        </h5>
      </div>
    </div>
  );
};

export default Contact;

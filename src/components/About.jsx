import React from "react";

const About = () => {
  return (
    <div className="container">
      <h1 className="text-primary mt-5">About</h1>
      <div className="jumbotron mt-5 mb-5 description">
        <h3 className="mb-5">Hey There, I'm Shubham Roy</h3>
        <p>
          Editorials One is a webapp designed for CAT Enthusiasts... <br /> It
          has all the latest featured articles from the best sources filtered
          and handpicked specially for the people who are preparing for CAT.
        </p>{" "}
        <p>
          {" "}
          I always wanted to create a platform specifically for the CAT
          Enthusiasts to help them filter out and have the best content from
          across major new source providers.
        </p>{" "}
        <p>
          {" "}
          Hope you enjoy your time on this app. <br /> Also, This app is
          beautifully designed by My good friend Rajat Gupta, who works as a
          Product Engineer at Greyamp.
        </p>
        <h5>
          {" "}
          <a
            className="mt-5 btn btn-primary"
            href="https://www.instagram.com/the_word_smith/"
          >
            My Instagram...
          </a>
        </h5>
      </div>
    </div>
  );
};

export default About;

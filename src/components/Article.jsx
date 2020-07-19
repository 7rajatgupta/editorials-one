import React from "react";
import articleLogo from "../static/img/article-detail-header.png";
import loadingSpinner from "../static/img/loading-spinner.gif";
const Article = (props) => {
  const { detail } = props.location.state;
  return (
    <>
      <div className="container article-detail">
        <img className="detail-header" src={articleLogo} alt="" />
      </div>
      {detail.title ? (
        <div className="container mb-5">
          <div className="container jumbotron mb-5">
            <h2 className="text text-primary mb-5"> {detail.title} </h2>
            <h4 className="long-text"> {detail.article} </h4>
          </div>
          <div className="container">
            <div className="extra-details">
              <p>
                {" "}
                {"Updated on : "} {detail.publishDate.substr(0, 16)}{" "}
              </p>
              <p>
                {" "}
                {"Source : "} {detail.newspaperName}{" "}
              </p>
            </div>
          </div>
        </div>
      ) : (
        <div className="container loading-container">
          <img className="loading-spinner" src={loadingSpinner} alt="" />
        </div>
      )}
    </>
  );
};

export default Article;

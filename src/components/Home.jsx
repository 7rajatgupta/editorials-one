import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import articleLogo from "../static/img/article-logo.jpg";
import loadingSpinner from "../static/img/loading-spinner.gif";
const Home = () => {
  const [articles, setArticles] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const apiEndpoint = "https://my-hindu-editorial.herokuapp.com/hindu";
  const getArticles = async () => {
    setIsLoading(true);
    const response = await axios.get(apiEndpoint);
    setArticles(response.data.editorials);
    setIsLoading(false);
  };
  useEffect(() => {
    getArticles();
  }, []);

  return (
    <>
      <h1 className="heading text-primary"> EDITORIALS ONE </h1>
      <h4 className="heading text-muted mb-5">
        Latest Featured Articles for CAT Enthusiasts...
      </h4>
      {isLoading ? (
        <div className="container loading-container">
          <img className="loading-spinner" src={loadingSpinner} alt="" />
        </div>
      ) : (
        articles.map((article, idx) => (
          <div class="card mb-5" key={idx}>
            <h5 class="card-header">Featured</h5>
            <div class="card-body">
              <img className="article-logo" src={articleLogo} alt="" />
              <h5 class="card-title">{article.title}</h5>
              <p class="card-text">
                {" "}
                {article.article.substr(0, 100)} {"..."}{" "}
              </p>
              <Link to={{ pathname: "/detail", state: { detail: article } }}>
                <p class="btn btn-primary">Read Article</p>
              </Link>
            </div>
          </div>
        ))
      )}
      <div className=" footer container mt-15">
        <p>
          {" "}
          <span>&#169;</span> Editorials One
        </p>
      </div>
    </>
  );
};

export default Home;

import React from "react";
import { Link } from "react-router-dom";
//Styles
import "./GithubUser.styles.css";

const GithubUser = (props) => {
  const {
    avatar,
    github,
    github_name,
    name,
    repos,
    followers,
    following,
    public_repos,
  } = props;

  return (
    <div className="w-1/4 m-auto">
      <div className="card-header flex justify-between items-center p-10">
        <img src={avatar} alt={github} className="w-24 h-24" />
        <h2>{github_name}</h2>
      </div>

      <div className="card-body flex justify-between items-center">
        <h1>
          <Link to={`/repositorio/${github_name}`}>
            <span className="text-yellow text-xl	font-bold	">
              {" "}
              Repos: {public_repos}{" "}
            </span>{" "}
            {repos}
          </Link>
        </h1>
        <p>
          <Link to={`/followers/${github_name}`}>
            <span className="text-yellow text-xl	font-bold	"> Followers: </span>{" "}
            {followers}
          </Link>
        </p>
        <p>
          <Link to={`/following/${github_name}`}>
            <span className="text-yellow text-xl	font-bold	"> Following: </span>{" "}
            {following}
          </Link>
        </p>
      </div>
    </div>
  );
};

export default GithubUser;

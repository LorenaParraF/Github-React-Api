import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  // faLink,
  // faMapMarkerAlt,
  faUserFriends,
  faCode,
} from "@fortawesome/free-solid-svg-icons";
// import { faTwitter } from "@fortawesome/free-brands-svg-icons";
//Styles
import "./GithubUser.styles.css";

const GithubUser = (props) => {
  const { avatar, github_url, github_name, repos, followers, following } =
    props;

  return (
    <div className="w-8/12 rounded-xl m-auto table-auto  p-14 mt-4 bg-gradient-to-r from-Fuchsia-700 via-Red-500 to-Pink-500">
      <div className="card-header flex justify-between items-center p-12">
        <img src={avatar} alt={github_url} className="w-5/12  mt-2" />

        <figcaption className="font-medium  md:text-left mr-40">
          <div className="text-Gray-50 p-2 text-5xl">{github_name}</div>
          {/* <div className="text-Gray-50">
            <FontAwesomeIcon icon={faTwitter} />
          </div>
          <div className="text-Gray-50 p-2">
            <FontAwesomeIcon icon={faLink} />
          </div>
          <div className="text-Gray-50 p-2">
            <FontAwesomeIcon icon={faMapMarkerAlt} />
          </div>
          <blockquote>
            <h2 className="text-Pink-100">
              <FontAwesomeIcon icon={faCode} />
              <span> &nbsp;&nbsp; Sobre Mi:&nbsp;&nbsp;{starred}</span>
            </h2>
          </blockquote> */}
        </figcaption>
      </div>

      <div className="card-body flex justify-between items-center">
        <p>
          <span className="text-Gray-50	font-bold">
            {" "}
            <FontAwesomeIcon icon={faCode} /> Repositorio{" "}
          </span>{" "}
          {repos}
        </p>
        <p>
          <Link to={`/followers/${github_name}`}>
            <span className="text-Gray-50	font-bold">
              {" "}
              <FontAwesomeIcon icon={faUserFriends} /> Followers{" "}
            </span>{" "}
            {followers}
          </Link>
        </p>
        <p>
          <Link to={`/following/${github_name}`}>
            <span className="text-Gray-50	font-bold"> Following </span>{" "}
            {following}
          </Link>
        </p>
      </div>
    </div>
  );
};

export default GithubUser;

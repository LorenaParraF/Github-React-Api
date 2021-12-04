import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import GithubUser from "../../Custom/GithubUser/GithubUser";
import Loader from "../../Custom/Loader/Loader";

const Repos = () => {
  const { user } = useParams();
  //State
  const [repos, setRepos] = useState([]);
  const [loader, setLoader] = useState(false);

  useEffect(() => {
    setRepos([]);
    setLoader(true);
    const handleUserRepos = async () => {
      const response = await fetch(
        `https://api.github.com/users/${user}/repos`
      );
      const result = await response.json();
      setRepos(result);
      console.log(result);
    };

    handleUserRepos();
    setLoader(false);
  }, [user]);

  return (
    <div className="bg-gray-800">
      <h2>Repositorios</h2>

      {repos && repos.length > 0 && !loader ? (
        repos.map((user) => (
          <GithubUser
            key={user.id}
            avatar={user.avatar_url ? user.avatar_url : null}
            github={user.html_url}
            github_name={user.login}
            repos={repos}
          />
        ))
      ) : (
        <Loader />
      )}
    </div>
  );
};

export default Repos;

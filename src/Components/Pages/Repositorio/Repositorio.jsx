import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import GithubUser from "../../Custom/GithubUser/GithubUser";
import Loader from "../../Custom/Loader/Loader";

const Repositorio = () => {
  const { user } = useParams();
  //State
  const [reposit, setReposit] = useState([]);
  const [loader, setLoader] = useState(false);

  useEffect(() => {
    setReposit([]);
    setLoader(true);
    const handleUserRepos = async () => {
      const response = await fetch(
        `https://api.github.com/users/${user}/repos`
      );
      const result = await response.json();
      setReposit(result);
      console.log(result);
    };

    handleUserRepos();
    setLoader(false);
  }, [user]);

  return (
    <div className="bg-gray-800">
      <h2>Repositorios</h2>

      {reposit && reposit.length > 0 && !loader ? (
        reposit.map((user) => (
          <GithubUser
            key={user.id}
            avatar={user.avatar_url ? user.avatar_url : null}
            github={user.html_url}
            github_name={user.login}
            reposit={reposit}
          />
        ))
      ) : (
        <Loader />
      )}
    </div>
  );
};

export default Repositorio;

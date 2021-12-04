import React, { useState } from "react";

//Components
import UserForm from "../../Home/Form/UserForm";
import GithubUser from "../../Custom/GithubUser/GithubUser";
import Loader from "../../Custom/Loader/Loader";

const Home = () => {
  //State
  const [userName, setUserName] = useState("");
  const [userInformation, setUserInformation] = useState(null);
  const [loader, setLoader] = useState(false);

  //Funciones
  const handleUserName = ({ value }) => {
    setUserName(value);
  };

  const handleSearchUser = async (e) => {
    e.preventDefault();
    setUserInformation(null);
    setLoader(true);
    const API = `https://api.github.com/users/${userName}`;

    const response = await fetch(API);
    const result = await response.json();
    console.log(result);
    setUserInformation(result);
    setLoader(false);
  };

  return (
    <div className="">
      <UserForm
        handleUserName={handleUserName}
        handleSearchUser={handleSearchUser}
      />
      <div className="text-center">
        {userInformation ? (
          <GithubUser
            avatar={userInformation?.avatar_url}
            github_url={userInformation?.html_url}
            url={userInformation?.url}
            github_name={userInformation?.login}
            starred={userInformation?.starred_url}
            subscriptions={userInformation?.subscriptions_url}
            organizations={userInformation?.organizations_url}
            repos={userInformation?.public_repos}
            name={userInformation?.name}
            followers={userInformation?.followers}
            following={userInformation?.following}
          />
        ) : null}
      </div>

      {loader && <Loader />}
    </div>
  );
};

export default Home;

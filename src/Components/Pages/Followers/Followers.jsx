import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

//Components
import GithubUser from "../../Custom/GithubUser/GithubUser"
import Loader from "../../Custom/Loader/Loader"
// import UserForm from "../../Home/Form/UserForm.jsx"

const Followers = () => {
  //Hooks
  const { user } = useParams();
  //State
  const [followers, setFollowers] = useState([]);
  const [loader, setLoader] = useState(false);

  useEffect(() => {
    setFollowers([]);
    setLoader(true);
    const handleUserFollowers = async () => {
      const response = await fetch(
        `https://api.github.com/users/${user}/followers`
      );
      const result = await response.json();
      setFollowers(result);
      console.log(result);
    };
    handleUserFollowers();
    setLoader(false);
  }, [user]);

  return (
    <div className="bg-gray-800">
 
      <h2>Followers</h2>
      
      {followers && followers.length > 0 && !loader ? (
        followers.map(user => (
          <GithubUser
            avatar={user.avatar_url ? user.avatar_url : null}
            github={user.html_url}
            github_name={user.login}
          />
        ))
      ) : (
        <Loader />
      )}
    </div>
  );
};

export default Followers;

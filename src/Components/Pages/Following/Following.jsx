import React, { useEffect, useState } from "react";
import GithubUser from "../../Custom/GithubUser/GithubUser";
import Loader from "../../Custom/Loader/Loader";
import { useParams } from "react-router-dom";

const Following = () => {
  const { user } = useParams();
  //State
  const [followings, setFollowings] = useState([]);
  const [loader, setLoader] = useState(false);

  useEffect(() => {
    setFollowings([]);
    setLoader(true);
    const handleUserFollowings = async () => {
      const response = await fetch(
        `https://api.github.com/users/${user}/following`
      );
      const result = await response.json();
      setFollowings(result);
      console.log(result);
    };
    handleUserFollowings();
    setLoader(false);
  }, [user]);

  return (
    <div className="bg-gray-800">
      <h2>Followings</h2>

      {followings && followings.length > 0 && !loader ? (
        followings.map((user) => (
          <GithubUser
            key={user.id}
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

export default Following;

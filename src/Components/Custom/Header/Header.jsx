import React from "react";

//Styles
import "./Header.styles.css";

const Header = () => {
  return (
    <header className="bg-yellow flex justify-between items-center mi-clase mt-4">
      <h2 className="ml-10 text-2xl tablet:text-3xl	text-white">
        Github API LorenaParraF{" "}
      </h2>
    </header>
  );
};

export default Header;

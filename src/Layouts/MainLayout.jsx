import React from "react";

//Components
import Header from "../Components/Custom/Header/Header";
// import UserForm from "../Components/Home/Form/UserForm.jsx";
const MainLayout = (props) => {
  return (
    <div>
      <Header />
      {props.children}
      {/* <UserForm />{props.children} */}
    </div>
  );
};

export default MainLayout;

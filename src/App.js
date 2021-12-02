import React from "react";
import "./App.css";

import { BrowserRouter, Switch, Route } from "react-router-dom";

//Views
import Home from "./Components/Pages/Home/Home";
import Followers from "./Components/Pages/Followers/Followers";

//Layous
import MainLayout from "./Layouts/MainLayout";
import Notfound from "./Components/Custom/Notfound/Notfound";

function App() {
  //JSX

  return (
    <BrowserRouter>
      <Switch>
        <MainLayout>
          <Route path="/" exact>
            <Home />
          </Route>

          <Route path="/followers/:user" exact>
            <Followers />
          </Route>
        </MainLayout>
      </Switch>
    </BrowserRouter>
  );
}

export default App;

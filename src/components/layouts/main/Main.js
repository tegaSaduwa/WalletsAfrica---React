import React from "react";
import { Route, Switch } from "react-router-dom";
import Cards from "../../pages/cards/Cards";
import Home from "../../pages/home/Home";
import Navbar from "../navbar/Navbar";
import "./Main.css";

const Main = () => {
  return (
    <div className="main">
      <Navbar />

      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/cards" component={Cards} />
      </Switch>
    </div>
  );
};

export default Main;

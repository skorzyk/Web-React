import React from "react";
import "../styles/Header.css";
import { Route, Switch } from "react-router-dom";
import img1 from "../images/sport1.jpg";
import img2 from "../images/sport2.jpg";
import img3 from "../images/sport3.jpg";
import img4 from "../images/sport4.jpg";
const Header = () => {
  return (
    <>
      <Switch>
        <Route path="/" exact render={() => <img src={img4} alt="sport4" />} />
        <Route path="/advices" render={() => <img src={img1} alt="sport1" />} />
        <Route path="/contact" render={() => <img src={img2} alt="sport2" />} />
        <Route path="/admin" render={() => <img src={img3} alt="sport3" />} />
        <Route render={() => <img src={img4} alt="sport4" />} />
      </Switch>
    </>
  );
};

export default Header;

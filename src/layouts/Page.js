import React from "react";
import HomePage from "../pages/HomePage.js";
import AdvicesPage from "../pages/AdvicesPage.js";
import AdvicesListPage from "../pages/AdvicesListPage.js";
import ContactPage from "../pages/ContactPage.js";
import AdminPage from "../pages/AdminPage.js";
import ErrorPage from "../pages/ErrorPage.js";
import LoginPage from "../pages/LoginPage.js";
import { Route, Switch } from "react-router-dom";

const Page = () => {
  return (
    <Switch>
      <Route path="/" exact component={HomePage} />
      <Route path="/advice/:id" component={AdvicesPage} />

      <Route path="/advices" component={AdvicesListPage} />
      <Route path="/contact" component={ContactPage} />
      <Route path="/admin" component={AdminPage} />
      <Route path="/login" component={LoginPage} />
      <Route component={ErrorPage} />
    </Switch>
  );
};

export default Page;

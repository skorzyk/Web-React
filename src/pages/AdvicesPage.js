import React from "react";
import { Link } from "react-router-dom";
import Advice from "../components/Advice";
import "../styles/AdvicesPage.css";

const AdvicesPage = ({ match }) => {
  return (
    <>
      <Advice id={match.params.id} />
      <Link to="/advices">Powrót do porad</Link>
    </>
  );
};

export default AdvicesPage;

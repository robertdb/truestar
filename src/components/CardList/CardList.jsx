import React from "react";
import { Loader } from "../common";
import { Card } from "../Card";
import "./listCard.css";

const CardList = () => {
  return (
    <div className="list-card-container">
      <div className="list-card-section">
        <Card />
      </div>
      <div className="list-card-section">
        <Card />
      </div>
      <div className="list-card-section">
        <Card />
      </div>
    </div>
  );
};

export { CardList };

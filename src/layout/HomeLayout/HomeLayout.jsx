import React, { Fragment } from "react";
import { CardList, Header } from "../../components";

import "./home.css";

const HomeLayout = () => {
  return (
    <Fragment>
      <Header />
      <div className="layout">
        <CardList />
      </div>
    </Fragment>
  );
};

export { HomeLayout };

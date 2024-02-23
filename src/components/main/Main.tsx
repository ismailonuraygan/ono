import React from "react";
import classes from "./Main.module.scss";
import FilterBar from "./components/FilterBar";

const Main = () => {
  return (
    <main className={classes.container}>
      <FilterBar />
    </main>
  );
};

export default Main;

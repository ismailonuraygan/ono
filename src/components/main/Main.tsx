import React from "react";
import classes from "./Main.module.scss";
import FilterBar from "./components/FilterBar";
import AudienceList from "./components/audience-list/AudienceList";

const Main = () => {
  return (
    <main className={classes.container}>
      <FilterBar />
      <AudienceList />
    </main>
  );
};

export default Main;

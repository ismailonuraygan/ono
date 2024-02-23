import React from "react";
import classes from "./Main.module.scss";
import FilterBar from "./components/FilterBar";
import AudienceList from "./components/audience-list/AudienceList";
import DataGridFilterContextContainer from "./contexts/DataGridFilterContextContainer";

const Main = () => {
  return (
    <DataGridFilterContextContainer>
      <main className={classes.container}>
        <FilterBar />
        <AudienceList />
      </main>
    </DataGridFilterContextContainer>
  );
};

export default Main;

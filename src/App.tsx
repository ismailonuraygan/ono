import React from "react";
import classes from "./App.module.scss";
import Sidebar from "./components/sidebar/Sidebar";
import Main from "./components/main/Main";
import Header from "./components/header/Header";

function App() {
  return (
    <div className={classes.app}>
      <Sidebar />
      <div className={classes.mainWrapper}>
        <Header />
        <Main />
      </div>
    </div>
  );
}

export default App;

import React from "react";
import classes from "./App.module.scss";
import Sidebar from "./components/sidebar/Sidebar";
import Main from "./components/main/Main";
import Header from "./components/header/Header";
import { QueryClient, QueryClientProvider } from "react-query";

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <div className={classes.app}>
        <Sidebar />
        <div className={classes.mainWrapper}>
          <Header />
          <Main />
        </div>
      </div>
    </QueryClientProvider>
  );
}

export default App;

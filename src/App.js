import React from "react";
import JobList from "./components/JobList";
import JobDetails from "./components/JobDetails";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";

const App = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <JobList />
        </Route>
        <Route path="/:id">
          <JobDetails />
        </Route>
      </Switch>
    </Router>
  );
};

export default App;

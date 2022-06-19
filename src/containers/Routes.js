import React from "react";
import { Routes as Switch, Route } from "react-router-dom";

import HomePage from "./Home/HomePage";
import GamePage from "./Game/GamePage";

const Routes = () => (
  <Switch>
    <Route path="/" element={<HomePage />} />
    <Route path="/game" element={<GamePage />} />
  </Switch>
);

export default Routes;

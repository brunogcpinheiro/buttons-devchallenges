import React from "react";
import { Switch, Route } from "react-router-dom";

import Main from "../pages/Main";
import Colors from "../pages/Colors";
import Typography from "../pages/Typography";
import Spaces from "../pages/Spaces";
import Buttons from "../pages/Buttons";
import Inputs from "../pages/Inputs";
import Grid from "../pages/Grid";

const Routes: React.FC = () => (
  <Switch>
    <Route exact path="/" component={Main} />
    <Route path="/colors" component={Colors} />
    <Route path="/typography" component={Typography} />
    <Route path="/spaces" component={Spaces} />
    <Route path="/buttons" component={Buttons} />
    <Route path="/inputs" component={Inputs} />
    <Route path="/grid" component={Grid} />
  </Switch>
);

export default Routes;

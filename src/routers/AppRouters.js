
import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route
  } from "react-router-dom";

// import { LoginScreen } from "../componentes/auth/LoginScreen";
import { DashboardRouters } from "./DashboardRouters";

import { AuthRouter } from './AuthRouter';



export const AppRouters = () => {
    return (
      <Router>
         <div>
            <Switch>
              <Route exact path ="/auth" component={ AuthRouter } />

              <Route path ="/" component={ DashboardRouters } />


             </Switch>
          </div>
      </Router>
    )
}

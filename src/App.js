import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { ROUTES } from "./routes";

import LandingPage from "./pages/LandingPage";
import { CurrencyInfoPage } from "./pages/CurrencyInfo";

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Route exact path={ROUTES.Root} component={LandingPage} />
          <Route path={ROUTES.CurrencyDetail} component={CurrencyInfoPage} />
        </div>
      </Router>
    );
  }
}

export default App;

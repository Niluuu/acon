import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import IndexPage from "../src/page/indexPage";
import Header from "../src/components/common/header";
import Footer from "./components/common/footer";

function App() {
  return (
    <div>
      <Header />
      <Router>
        <div>
          <Switch>
            <Route path="/" exact>
              <IndexPage />
            </Route>
          </Switch>
        </div>
      </Router>
      <Footer />
    </div>
  );
}

export default App;

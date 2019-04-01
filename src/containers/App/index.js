import React, { PureComponent } from "react";
import { Router, Route } from "react-router-dom";
import { connect } from "react-redux";
import history from "../../utils/history";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import LunchPage from "../LunchPage";
import InterestsPage from "../InterestPage";
import "./styles.scss";

class App extends PureComponent {
  render() {
    const iOS = !!navigator.platform && /iPad|iPhone|iPod/.test(navigator.platform);
    return (
      <>
        <Router history={history}>
          <div className={`app ${iOS ? "iOS" : ""}`}>
            <Header />
            <Route exact path="/" component={LunchPage} />
            <Route path="/interests/" component={InterestsPage} />
            <Footer />
          </div>
        </Router>
      </>
    );
  }
}

export default connect()(App);

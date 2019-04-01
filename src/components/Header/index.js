import React from "react";
import { connect } from "react-redux";
import history from "../../utils/history";
import "./styles.scss";

class Header extends React.Component {
  constructor(props) {
    super(props);
    this.onBackClick = this.onBackClick.bind(this);
    this.onMapClick = this.onMapClick.bind(this);
  }

  onBackClick() {
    history.goBack();
  }

  onMapClick() {}

  render() {
    return (
      <header className="header">
        <img className="header__back" src="/img/ic_webBack@2x.png" onClick={this.onBackClick} alt="" />
        <h1>Lunch Tyme</h1>
        <img className="header__map" src="/img/icon_map@2x.png" onClick={this.onMapClick} alt="" />
      </header>
    );
  }
}

const mapStateToProps = state => ({
  app: state
});

const mapDispatchToProps = {};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Header);

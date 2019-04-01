import React from "react";
import { Link } from "react-router-dom";
import "./styles.scss";

class Footer extends React.Component {
  render() {
    return (
      <footer className="footer">
        <div className="footer__item ">
          <Link
            to={{
              pathname: "/",
              state: { fromFooter: true }
            }}>
            <img alt="" className="footer__icon" src="/img/tab_lunch@2x.png" />
            <span className="footer__link">lunch</span>
          </Link>
        </div>
        <div className="footer__item">
          <Link
            to={{
              pathname: "/interests",
              state: { fromFooter: true }
            }}>
            <img alt="" className="footer__icon" src="/img/tab_internets@2x.png" />
            <span className="footer__link">internets</span>
          </Link>
        </div>
      </footer>
    );
  }
}

export default Footer;

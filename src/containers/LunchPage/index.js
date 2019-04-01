import React from "react";
import { connect } from "react-redux";
import QueryString from "query-string";
import ListView from "../ListView";
import MapView from "../MapView";
import "./styles.scss";

const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);

export class LunchPage extends React.PureComponent {
  render() {
    const { list, location } = this.props;
    const search = QueryString.parse(location.search);
    const selected = search.restaurant ? list.items.filter(item => item.name.toLowerCase() === search.restaurant.toLowerCase()) : (isMobile ? []: list.items);
    return (
      <div className={`lunch-page ${selected.length ? "selected" : ""}`}>
        <ListView />
        <MapView item={selected[0]} />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  list: state.list
});

export default connect(mapStateToProps)(LunchPage);

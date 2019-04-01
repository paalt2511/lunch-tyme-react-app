import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

import "./styles.scss";

class RestaurantItem extends React.Component {
  constructor(props) {
    super(props);
    this.onClick = this.onClick.bind(this);
  }
  onClick() {
    this.props.onClick(this.props.item);
  }
  render() {
    const { item } = this.props;
    return (
      <Link
        to={{
          pathname: "/",
          search: `restaurant=${item.name}`,
          state: { fromFooter: true }
        }}>
        <div className="list-item">
          <div className="list-item__bg" style={{ backgroundImage: `url('${item.backgroundImageURL}')` }} />
          <div className="list-item__info">
            <h3 className="list-item__name">{item.name}</h3>
            <span className="list-item__category">{item.category}</span>
          </div>
        </div>
      </Link>
    );
  }
}

RestaurantItem.propTypes = {
  item: PropTypes.object.isRequired,
  onClick: PropTypes.func,
};

export default RestaurantItem;

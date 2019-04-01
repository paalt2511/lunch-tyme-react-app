import React from "react";
import PropTypes from "prop-types";
import RestaurantItem from "../RestaurantItem";

class List extends React.Component {
  render() {
    const { items, onItemClick } = this.props;
    return (
      <div className="list-view">
        {items.map(item => (
          <RestaurantItem key={item.name} item={item} onClick={onItemClick} />
        ))}
      </div>
    );
  }
}

List.propTypes = {
  items: PropTypes.array,
  onItemClick: PropTypes.func
};

export default List;

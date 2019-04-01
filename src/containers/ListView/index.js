import React from "react";
import { connect } from "react-redux";
import List from "../../components/List";
import { loadRestaurants } from "../../actions/listView.actions";

export class ListView extends React.PureComponent {
  componentDidMount() {
    this.props.loadRestaurants();
  }

  render() {
    const { list, selectRestaurant } = this.props;
    return (
      <>
        <List items={list.items} onItemClick={selectRestaurant} />
      </>
    );
  }
}

const mapStateToProps = state => ({ list: state.list });

const mapDispatchToProps = { loadRestaurants };

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ListView);

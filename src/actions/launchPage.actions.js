export function selectRestaurant(item) {
  return {
    type: "SELECT_RESTAURANT",
    item: item
  };
}

export function removeRestaurant() {
  return {
    type: "REMOVE_RESTAURANT"
  };
}

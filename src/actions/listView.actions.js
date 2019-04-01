export function loadRestaurants() {
  return {
    type: "LOAD_RESTAURANTS"
  };
}

export function loadedRestaurant(restaurants) {
  return { type: "LOADED_DATA", items: restaurants };
}

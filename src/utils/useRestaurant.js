import { useEffect, useState } from "react";
import { MENU_ITEM_TYPE_KEY, RESTAURANT_TYPE_KEY } from "../constants";

const useRestaurant = (id) => {
  const [restaurant, setRestaurant] = useState(null);
  const [menuItems, setMenuItems] = useState([]); //use this empty object with data
  useEffect(() => {
    getRestaurantData();
  }, []);

  async function getRestaurantData() {
    const data = await fetch(
      "https://corsanywhere.herokuapp.com/https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=17.3730192&lng=78.547636&restaurantId=" +
        id +
        "&submitAction=ENTER"
    );
    const json = await data.json();
    console.log(json?.data?.cards[0]?.card?.card?.info);
    const restaurantData =
      json?.data?.cards
        ?.map((x) => x.card)
        ?.find((x) => x && x.card["@type"] === RESTAURANT_TYPE_KEY)?.card
        ?.info || null;
    setRestaurant(restaurantData);

    console.log(restaurantData);
  }
  return restaurant;
};

//how to return two variables

export default useRestaurant;

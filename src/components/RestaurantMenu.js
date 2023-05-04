import { useParams } from "react-router-dom";
import { IMG_CDN_URL, ITEM_IMG_CDN_URL } from "../constants";
import useRestaurant from "../utils/useRestaurant";
import Shimmer from "./Shimmer";
import { useState, useEffect } from "react";
import { MENU_ITEM_TYPE_KEY, RESTAURANT_TYPE_KEY } from "../constants";
import { addItem } from "../utils/cartSlice";
import { useDispatch } from "react-redux";
const RestaurantMenu = () => {
  const { id } = useParams();

  const [restaurant, setRestaurant] = useState(null);
  const [menuItems, setMenuItems] = useState([]);
  const dispatch = useDispatch();
  const handleAddItem = (item) => {
    dispatch(addItem(item));
    console.log(item);
  };

  useEffect(() => {
    getRestaurantData(); // call getRestaurantInfo function so it fetch api data and set data in restaurant state variable
  }, []);
  async function getRestaurantData() {
    try {
      const data = await fetch(
        "https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=17.3730192&lng=78.547636&restaurantId=" +
          id +
          "&submitAction=ENTER"
      );
      const json = await data.json();
      console.log(json?.data?.cards[0]?.card?.card?.info);

      setRestaurant(json?.data?.cards[0]?.card?.card?.info);
      //another way to get the restaurant data
      /* const restaurantData =
        json?.data?.cards
          ?.map((x) => x.card)
          ?.find((x) => x && x.card["@type"] === RESTAURANT_TYPE_KEY)?.card
          ?.info || null; */
      //setRestaurant(restaurantData);
      //console.log(restaurantData);
      // Set menu item data
      const menuItemsData =
        json?.data?.cards
          .find((x) => x.groupedCard)
          ?.groupedCard?.cardGroupMap?.REGULAR?.cards?.map((x) => x.card?.card)
          ?.filter((x) => x["@type"] == MENU_ITEM_TYPE_KEY)
          ?.map((x) => x.itemCards)
          .flat()
          .map((x) => x.card?.info) || [];

      const uniqueMenuItems = [];
      menuItemsData.forEach((item) => {
        if (!uniqueMenuItems.find((x) => x.id === item.id)) {
          uniqueMenuItems.push(item);
        }
      });
      setMenuItems(uniqueMenuItems);
    } catch (error) {
      setMenuItems([]);
      setRestaurant(null);
      console.log(error);
    }
  }
  return !restaurant ? (
    <Shimmer />
  ) : (
    <div>
      <div className="flex basis-full h-60 justify-evenly items-center bg-orange-700 text-white p-8">
        <img
          className="w-[254px] h-[165px] mob:w-[130px] mob:[81px] rounded-md"
          src={IMG_CDN_URL + restaurant?.cloudinaryImageId}
          alt={restaurant?.name}
        />
        <div className="flex flex-col basis-[540px] m-5 ">
          <h2 className="text-3xl max-w-[538px] font-semibold">
            {restaurant?.name}
          </h2>
          <p className="overflow-hidden whitespace-nowrap text-[15px] max-w-[538px]">
            {restaurant?.cuisines.join(", ")}
          </p>
          <div className="flex mt-5 justify-between items-center text-sm font-semibold pb-2.5 max-w-[342px] mob:text-xs mob:font-normal">
            <div className="flex items-center px-1 py-0 gap-1">
              <span>{restaurant?.avgRating} Stars</span>
            </div>
            <div>|</div>
            <div>{restaurant?.sla.slaString}</div>
            <div>|</div>
            <div>{restaurant?.costForTwoMessage}</div>
          </div>
        </div>
      </div>
      <div className="restaurant-menu-content flex justify-center bg-pink-100">
        <div className="menu-items-container mt-7 w-[848px]">
          <div className="menu-title-wrap p-5">
            <h3 className="menu-title font-bold text-lg">Recommended</h3>
            <p className="menu-count mt-3.5 w-3/5 text-gray-desc text-sm">
              {menuItems.length} ITEMS
            </p>
          </div>
          <div className="menu-items-list flex flex-col justify-evenly">
            {menuItems.map((item) => (
              <div
                className="menu-item flex justify-between basis-[600] max-h-[250px] p-5 border-b border-gray bg-gray-300 rounded-lg hover:bg-orange-200"
                key={item?.id}
              >
                <div className="menu-item-details flex flex-col basis-[400px]">
                  <h3 className="item-title font-bold text-lg w-3/5">
                    {item?.name}
                  </h3>
                  {console.log(item)}
                  <p className="item-cost mt-1 text-base font-normal">
                    {item?.price > 0
                      ? new Intl.NumberFormat("en-IN", {
                          style: "currency",
                          currency: "INR",
                        }).format(item?.price / 100)
                      : " "}
                  </p>
                  <p className="item-desc mt-3.5 leading-5 text-gray-desc w-4/5 text-base overflow-hidden">
                    {item?.description}
                  </p>
                </div>
                <div className="menu-img-wrapper flex flex-col justify-center items-center w-[118px] h-[150px]">
                  {item?.imageId && (
                    <img
                      className="menu-item-img w-[118px] h-[96px]"
                      src={ITEM_IMG_CDN_URL + item?.imageId}
                      alt={item?.name}
                    />
                  )}
                  <button
                    className="add-btn btn btn--primary w-[118px] h-[34px] mt-2.5 bg-orange-700 text-white"
                    onClick={() => handleAddItem(item)}
                  >
                    ADD +
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      {/*       <div>
        <h1>Menu</h1>
        <ul>
          {Object.values(restaurant?.menu?.items).map((item) => (
            <li key={item.id}>{item.name}</li>
          ))}
        </ul>
      </div> */}
    </div>
  );
};

export default RestaurantMenu;

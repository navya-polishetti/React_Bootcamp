import RestaurantCard from "./RestaurantCard";
import { restaurantList } from "../constants";
import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import { filterData } from "../utils/helper";
import useOnline from "../utils/useOnline";

const Body = ({ user }) => {
  //const search_txt = "KFC";

  const [searchText, setSearchText] = useState();

  const [allRestaurants, setAllRestaurants] = useState([]);

  const [filteredRestaurants, setFilteredRestaurants] = useState([]);

  useEffect(() => {
    console.log("UseEffect");
    getRestaurants();
  }, []);

  async function getRestaurants() {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=17.3730192&lng=78.547636&page_type=DESKTOP_WEB_LISTING"
    );
    const json = await data.json();
    setAllRestaurants(json?.data?.cards[2].data?.data?.cards);
    setFilteredRestaurants(json?.data?.cards[2].data?.data?.cards);
  }
  console.log("render");

  console.log(filteredRestaurants);
  //not render component (Early return)

  const isOnline = useOnline(); //isOnline variable receives the boolean value from useOnline() hook

  if (!isOnline) {
    return <h1>Offline, Please check your internet connection</h1>;
  }

  //if (!allRestaurants) return null;

  return allRestaurants?.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="p-5 bg-pink-100">
      <div className="p-5 bg-orange-100 my-10 shadow-lg">
        <input
          type="text"
          className="p-2 m-2 focus:bg-green-50 rounded-lg text-lg content-around"
          placeholder="Search for restaurant"
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
        />

        <button
          className="p-2 m-2 bg-purple-500 hover:bg-purple-700 text-white rounded-md content-around"
          onClick={() => {
            //need to filter data
            const data = filterData(searchText, allRestaurants);
            setFilteredRestaurants(data);
          }}
        >
          Search
        </button>
      </div>
      <div className="p-10 flex flex-wrap gap-5 justify-center bg-pink-100">
        {filteredRestaurants.map((restaurant) => {
          return (
            <Link
              to={"/restaurant/" + restaurant?.data?.id}
              key={restaurant?.data?.id}
            >
              <RestaurantCard {...restaurant.data} user={user} />
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default Body;

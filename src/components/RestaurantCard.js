import { IMG_CDN_URL } from "../constants";

const RestaurantCard = ({
  name,
  cuisines,
  cloudinaryImageId,
  lastMileTravelString,
  avgRating,
}) => {
  return (
    <div className="w-60 h-80 p-2 m-2 shadow-lg bg-white rounded-md hover:bg-gray-200">
      <img className="rounded-lg" src={IMG_CDN_URL + cloudinaryImageId} />
      <h2 className="font-bold text-lg">{name}</h2>
      <h4 className="font-medium text-sm">{cuisines.join(", ")}</h4>
      <h4 className="font-medium text-sm">{lastMileTravelString}</h4>
      <h4 className="font-medium text-sm">{avgRating} Stars</h4>
    </div>
  );
};

export default RestaurantCard;

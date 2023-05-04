import { IMG_CDN_URL } from "../constants";

const FoodItem = ({ name, category, imageId, price }) => {
  return (
    <div>
      <div className="w-60 h-60 p-2 m-2 shadow-lg bg-white rounded-md hover:bg-gray-200">
        <img className="rounded-lg" src={IMG_CDN_URL + imageId} />
        <h2 className="font-bold text-lg">{name}</h2>
        <h3 className="font-medium text-sm">Description:{category}</h3>

        <h3 className="font-medium text-sm">Price: {price / 100} Rupees</h3>
      </div>
    </div>
  );
};

export default FoodItem;

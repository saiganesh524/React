import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import ResItemCategory from "./ResItemCategory";
import { useState } from "react";

const RestaurantMenu = () => {
  const { resId } = useParams();

  const resInfo = useRestaurantMenu(resId);

  const [showIndex, setShowIndex] = useState(0);

  if (resInfo === null) return <Shimmer />;

  const { id, name, cuisines, costForTwoMessage } =
    resInfo?.cards[2]?.card?.card?.info;

  const { itemCards } =
    resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card;

  //console.log(resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards);

  const categories =
    resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
      (c) =>
        c.card?.card?.["@type"] ===
        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    );
  //console.log(categories);

  return (
    <div className="menu w-6/12 mx-auto mt-5">
      <div className="ml-2 mb-4">
        <h1 className="font-bold text-2xl">
          {name} - {id}
        </h1>
        <p>{cuisines.join(", ")}</p>
        <p>{costForTwoMessage}</p>
      </div>
      {/* categories accordians */}
      <div className="">
        {categories.map((category, index) => (
          //controlled component
          <ResItemCategory
            key={category?.card?.card?.title}
            data={category?.card?.card}
            showItems={index === showIndex}
            setShowIndex={() => setShowIndex(index)}
            resetShowIndex={() => setShowIndex(null)}
          />
        ))}
      </div>
    </div>
  );
};

export default RestaurantMenu;

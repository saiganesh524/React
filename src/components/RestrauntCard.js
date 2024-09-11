import { CDN_URL } from "../utils/constants";

const RestrauntCard = (props) => {
  const { resData } = props;
  // console.log(resData);

  const { cloudinaryImageId, name, cuisines, avgRating, costForTwo, sla } =
    resData;

  return (
    <div
      data-testid="resCard"
      className="restraunt-card m-4 p-4 w-[253px] h-[380px] rounded-lg bg-white hover:shadow-2xl"
    >
      <img
        className="restraunt-logo w-full h-[200px] rounded-lg"
        alt="restraunt-logo"
        src={CDN_URL + cloudinaryImageId}
      />
      <h3 className="whitespace-nowrap overflow-hidden py-4 font-bold text-lg">
        {name}
      </h3>
      <h4>{cuisines[0] + ", " + cuisines[1]}</h4>
      <h4>{avgRating} stars</h4>
      <h4>{costForTwo}</h4>
      <h4>{sla?.slaString}</h4>
    </div>
  );
};

// Higher order component

// input - RestaurantCard ==> RestauarantCardPromoted

export const withPromotedLabel = (RestrauntCard) => {
  return (props) => {
    return (
      <div>
        <label className="absolute bg-black text-white m-2 p-2 rounded">
          promoted
        </label>
        <RestrauntCard {...props} />
      </div>
    );
  };
};

export default RestrauntCard;

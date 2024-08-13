import { CDN_URL } from "../utils/constants";

const RestrauntCard = (props) => {
  const { resData } = props;

  const { cloudinaryImageId, name, cuisines, avgRating, costForTwo, sla } =
    resData?.info;
  return (
    <div
      className="restraunt-card"
      style={{
        backgroundColor: "#f0f0f0",
      }}
    >
      <img
        className="restraunt-logo"
        alt="restraunt-logo"
        src={CDN_URL + cloudinaryImageId}
      />
      <h3>{name}</h3>
      <h4>{cuisines[0] + ", " + cuisines[1]}</h4>
      <h4>{avgRating} stars</h4>
      <h4>{costForTwo}</h4>
      <h4>{sla?.slaString}</h4>
    </div>
  );
};

export default RestrauntCard;

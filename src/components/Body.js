import RestrauntCard, { withPromotedLabel } from "./RestrauntCard";
import { useEffect, useState, useContext } from "react";
import Shimmer from "./Shimmer";
import { RESTAURANTS_API_URL } from "../utils/constants";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";

const Body = () => {
  const [listOfrestaurants, setListOfrestaurants] = useState([]);
  const [filteredrestaurants, setFilteredrestaurants] = useState([]);

  const [searchText, setSearchText] = useState("");

  const RestaurantCardPromoted = withPromotedLabel(RestrauntCard);

  const { loggedInUser, setUser } = useContext(UserContext);

  //console.log(listOfrestaurants);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      // "https://proxy.cors.sh/" +
      RESTAURANTS_API_URL
    );

    const json = await data.json();

    setListOfrestaurants(
      json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );

    setFilteredrestaurants(
      json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
  };

  const onlineStatus = useOnlineStatus();

  if (onlineStatus === false) {
    return (
      <div>
        <h1>
          No internet connection. Please check your connection and try again.
        </h1>
      </div>
    );
  }

  return listOfrestaurants.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body mx-[calc(10%+36px)]">
      <div className="filter flex">
        <div className="search m-4 p-4">
          <input
            type="text"
            data-testid = "searchInput"
            className="search-box border border-solid border-black"
            placeholder="Search for a restaurant"
            value={searchText}
            onChange={(e) => {
              setSearchText(e.target.value);
            }}
          />
          <button
            className="btn px-4 py-2 m-4 bg-green-100 rounded-lg"
            onClick={() => {
              const filteredList = listOfrestaurants.filter((res) =>
                res.info.name.toLowerCase().includes(searchText.toLowerCase())
              );

              setFilteredrestaurants(filteredList);
            }}
          >
            Search
          </button>
        </div>
        <div className="m-4 p-4">
          <button
            className="btn px-4 py-2 m-4 bg-green-100 rounded-lg"
            onClick={() => {
              const filteredList = listOfrestaurants.filter(
                (res) => res.info.avgRating > 4.5
              );
              setFilteredrestaurants(filteredList);
            }}
          >
            Top Rated restaurants
          </button>
        </div>
        <div className="m-8 px-8 py-6">
          <label>UserName: </label>
          <input
            className="border border-black pl-2"
            value={loggedInUser}
            onChange={(e) => setUser(e.target.value)}
          />
        </div>
      </div>
      <div className="restraunt-container flex flex-wrap">
        {filteredrestaurants.map((restaurant) => (
          <Link
            key={restaurant.info.id}
            to={"/restaurants/" + restaurant.info.id}
          >
            {restaurant.info.avgRating > 4.4 ? (
              <RestaurantCardPromoted resData={restaurant?.info} />
            ) : (
              <RestrauntCard resData={restaurant?.info} />
            )}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Body;

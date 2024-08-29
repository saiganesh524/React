import RestrauntCard from "./RestrauntCard";
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { RESTAURANTS_API_URL } from "../utils/constants";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";

const Body = () => {
  const [listOfrestaurants, setListOfrestaurants] = useState([]);
  const [filteredrestaurants, setFilteredrestaurants] = useState([]);

  const [searchText, setSearchText] = useState("");

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
        <h1>No internet connection. Please check your connection and try again.</h1>
      </div>
    );
  }

  return listOfrestaurants.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body">
      <div className="filter">
        <div className="search">
          <input
            type="text"
            className="search-box"
            placeholder="Search for a restaurant"
            value={searchText}
            onChange={(e) => {
              setSearchText(e.target.value);
            }}
          />
          <button
            className="btn"
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
        <div>
          <button
            className="btn"
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
      </div>
      <div className="restraunt-container">
        {filteredrestaurants.map((restaurant) => (
          <Link
            key={restaurant.info.id}
            to={"/restaurants/" + restaurant.info.id}
          >
            <RestrauntCard resData={restaurant} />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Body;

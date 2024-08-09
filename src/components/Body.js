import RestrauntCard from "./RestrauntCard";
import resList from "../utils/mockData";
import { useState } from "react";

const Body = () => {
  const [listOfRestraunts, setListOfRestraunts] = useState(resList);

  return (
    <div className="body">
      <div className="filter">
        <button
          className="filter-btn"
          onClick={() => {
            const filteredList = listOfRestraunts.filter(
              (res) => res.data.avgRating > 4
            );
            console.log(listOfRestraunts);
            setListOfRestraunts(filteredList);
          }}
        >
          Top Rated Restraunts
        </button>
      </div>
      <div className="restraunt-container">
        {listOfRestraunts.map((restraunt) => (
          <RestrauntCard key={restraunt.data.id} resData={restraunt} />
        ))}
      </div>
    </div>
  );
};

export default Body;

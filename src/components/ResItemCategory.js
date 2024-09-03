import { useState } from "react";
import ItemList from "./ItemList";

const ResItemCategory = ({ data, showItems, setShowIndex, resetShowIndex }) => {
  // const [showItems, setShowItems] = useState(false);

  const handleClick = () => {
    showItems ? resetShowIndex() : setShowIndex();
  };
  //console.log(data);
  return (
    <div className="bg-gray-50 my-4 shadow-xl p-2 ">
      {/* Header */}
      <div
        className="flex justify-between items-center my-2 cursor-pointer"
        onClick={handleClick}
      >
        <span className="font-bold text-lg">
          {data.title} ({data.itemCards.length})
        </span>
        <span>
          <svg
            className={`w-4 h-4 transition-transform duration-300 ${
              showItems ? "rotate-180" : ""
            }`}
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M19 9l-7 7-7-7"
            ></path>
          </svg>
        </span>
      </div>
      {/* Accordian body */}
      <div>{showItems && <ItemList items={data.itemCards} />}</div>
    </div>
  );
};

export default ResItemCategory;

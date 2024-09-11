import { useDispatch } from "react-redux";
import { addItem } from "../utils/cartSlice";
import { ITEM_IMG_URL } from "../utils/constants";

const ItemList = ({ items }) => {
  // console.log(items);

  const dispatch = useDispatch();

  const handleAddItem = (item) => {
    //Dispatch an action
    dispatch(addItem(item));
  };

  return (
    <div>
      {items.map((item) => {
        const {
          id,
          name,
          finalPrice,
          price,
          defaultPrice,
          description,
          imageId,
        } = item.card.info;
        return (
          <div
            key={id}
            data-testid="foodItems"
            className="border border-b-gray-400 flex justify-between py-4 "
          >
            <div className="w-9/12">
              <div className="pb-2">
                <h2>{name}</h2>
                <p>
                  {finalPrice ? (
                    <span className="line-through text-gray-400">
                      ₹{finalPrice / 100}
                    </span>
                  ) : (
                    <span></span>
                  )}
                  <span className="font-semibold">
                    ₹{price ? price / 100 : defaultPrice / 100}
                  </span>
                </p>
              </div>
              <div>
                <p className="text-[#02060c99] line-clamp-2 mr-4">
                  {description}
                </p>
              </div>
            </div>
            {imageId ? (
              <div className="w-3/12 p-2 h-[174px] ">
                <img
                  className="restraunt-logo w-full h-full rounded-lg"
                  alt={name}
                  src={ITEM_IMG_URL + imageId}
                />

                <div className="absolute mx-5 my-[-1.7rem]">
                  <button
                    className="p-2 w-32 text-center bg-white font-bold text-green-500 shadow-lg rounded-xl"
                    onClick={() => handleAddItem(item)}
                  >
                    ADD
                  </button>
                </div>
              </div>
            ) : (
              <div className="flex items-center">
                <button className="p-2 mr-6 w-32 text-center bg-white font-bold text-green-500 shadow-lg rounded-xl">
                  ADD
                </button>
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
};

export default ItemList;

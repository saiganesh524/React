import { useDispatch, useSelector } from "react-redux";
import { clearCart } from "../utils/cartSlice";
import ItemList from "./ItemList";

const Cart = () => {
  const cartItems = useSelector((store) => store.cart.items);

  const dispatch = useDispatch();

  const handleClearCart = () => {
    dispatch(clearCart());
  };

  return (
    <div className="m-4 p-4 text-center">
      <h1 className="text-2xl font-bold">Cart</h1>
      <div className="w-6/12 m-auto">
        <button
          className="p-2 m-2 bg-black text-white rounded-lg cursor-pointer"
          onClick={handleClearCart}
        >
          Clear cart
        </button>
        {cartItems.length === 0 && (
          <h1> Cart is Empty. Add Items to the cart!</h1>
        )}
        <div className="text-left">
          <ItemList items={cartItems} />
        </div>
      </div>
    </div>
  );
};

export default Cart;

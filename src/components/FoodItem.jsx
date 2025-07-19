import { useContext } from "react";
import addIcon from "../assets/icons/add.webp";
import removeIcon from "../assets/icons/remove.webp";
import addGreenIcon from "../assets/icons/add_icon_green.webp";
import { StoreContext } from "../context/StoreContext";

const FoodItem = ({ id, name, price, image }) => {
  const { cartItems, addToCart, removeFromCart } = useContext(StoreContext);

  return (
    <div className="w-full mx-auto text-center">
      <div className="relative">
        <img src={image} alt="food-image" className="w-full" />
        {!cartItems[id] ? (
          <img
            src={addIcon}
            alt="add-icon"
            onClick={() => addToCart(id)}
            className="cursor-pointer w-9 absolute bottom-[15%] right-[9%] rounded-full"
          />
        ) : (
          <div className="absolute bottom-[15%] right-[9%] flex items-center gap-3 p-0.5 bg-white rounded-[50px]">
            <img
              onClick={() => removeFromCart(id)}
              src={removeIcon}
              loading="lazy"
              alt="remove-icon"
              className="cursor-pointer md:w-8 w-7"
            />
            <p className="">{cartItems[id]}</p>
            <img
              onClick={() => addToCart(id)}
              src={addGreenIcon}
              alt="add-green-icon"
              className="cursor-pointer md:w-8 w-7"
            />
          </div>
        )}
      </div>
      <p className="text-lg mb-4">{name}</p>
      <p className="text-[#d07635]">جنية {price}</p>
    </div>
  );
};

export default FoodItem;

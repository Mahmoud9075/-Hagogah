import { useContext } from "react";
import { StoreContext } from "../context/StoreContext";
import { useNavigate } from "react-router";

const Cart = () => {
  const { cartItems, food, removeFromCart, getTotalCartAmount } =
    useContext(StoreContext);
  const navigate = useNavigate();

  const handleCheckout = () => {
    const payload = {
      cartItems,
      deliveryFee: 30,
      total: getTotalCartAmount() + 30,
      timestamp: Date.now(),
    };

    localStorage.setItem("checkoutData", JSON.stringify(payload));
    navigate("/place-order");
  };

  return (
    <div className="mt-12 px-4 md:px-12">
      <div className="text-[#d07635] text-sm font-semibold hidden md:grid grid-cols-6 text-center gap-4 border-b pb-2">
        <p>الصنف</p>
        <p>الاسم</p>
        <p>السعر</p>
        <p>العدد</p>
        <p>السعر الكلى</p>
        <p>الغاء الاوردر</p>
      </div>

      {food.map((item) => {
        if (cartItems[item._id] > 0) {
          return (
            <div
              key={item._id}
              className="grid grid-cols-2 md:grid-cols-6 items-center text-center gap-4 py-4 border-b border-b-[#d07635] text-sm"
            >
              {/* Item image */}
              <div className="w-20 h-20 ">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full h-full object-cover rounded-md"
                />
              </div>

              {/* Item name */}
              <p className="font-medium">{item.name}</p>

              {/* Price */}
              <p className="text-gray-700 block">جنية {item.price}</p>

              {/* Quantity */}
              <p className="text-gray-700">{cartItems[item._id]}</p>

              {/* Total */}
              <p className="text-gray-700 block">
                جنية {item.price * cartItems[item._id]}
              </p>

              {/* Remove */}
              <button
                onClick={() => removeFromCart(item._id)}
                className="text-white bg-red-600 hover:bg-red-700 rounded-md font-bold text-lg cursor-pointer transition duration-200"
              >
                الغاء
              </button>
            </div>
          );
        }
        return null;
      })}
      <div className="mt-8 max-w-md ml-auto bg-[#fdf4ed] p-6 rounded-md shadow-md text-sm">
        <h2 className="text-lg font-bold text-[#d07635] mb-4 text-center">
          ملخص الطلب
        </h2>

        <div className="space-y-3">
          <div className="flex justify-between border-b pb-2">
            <p className="text-gray-700">رسوم التوصيل</p>
            <p className="font-medium text-gray-800">30 جنية</p>
          </div>

          <div className="flex justify-between font-bold text-[#d07635] text-base pt-2">
            <p>الإجمالي الكلي</p>
            <p>جنية {getTotalCartAmount() + 30}</p>
          </div>
        </div>

        <button
          onClick={handleCheckout}
          className="mt-6 w-full bg-[#d07635] hover:bg-[#b96128] cursor-pointer text-white py-2 rounded-md font-semibold transition duration-200"
        >
          المتابعة للدفع
        </button>
      </div>
    </div>
  );
};

export default Cart;

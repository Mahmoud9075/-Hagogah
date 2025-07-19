import { useContext } from "react";
import { StoreContext } from "../context/StoreContext";
import { useNavigate } from "react-router";

const PlaceOrder = () => {
  const { getTotalCartAmount } = useContext(StoreContext);
  const navigate = useNavigate();

  const handleConfirm = () => {
    const data = JSON.parse(localStorage.getItem("checkoutData"));

    const prev = JSON.parse(localStorage.getItem("orders") || "[]");
    localStorage.setItem(
      "orders",
      JSON.stringify([
        ...prev,
        {
          ...data,
          date: Date.now(),
          status: "جارى التجهيز",
        },
      ])
    );

    localStorage.removeItem("checkoutData");
    navigate("/orders");
  };

  return (
    <form className="flex flex-col md:flex-row gap-8 px-4 md:px-12 mt-8">
      {/* Left Section - Inputs */}
      <div className="flex-1 bg-[#fdf4ed] p-6 rounded-md shadow-md space-y-4">
        <p className="text-lg font-bold text-[#d07635] mb-4 text-center">
          معلومات التوصيل
        </p>

        <input
          required
          type="text"
          placeholder="الاسم كامل"
          className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:border-[#d07635] transition"
        />
        <input
          required
          type="email"
          placeholder="البريد الإلكتروني"
          className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:border-[#d07635] transition"
        />
        <input
          required
          type="text"
          placeholder="العنوان"
          className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:border-[#d07635] transition"
        />
        <input
          required
          type="tel"
          placeholder="رقم الهاتف"
          className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:border-[#d07635] transition"
        />
      </div>

      {/* Right Section - Order Summary */}
      <div className="w-full md:max-w-md">
        <div className="bg-[#fdf4ed] p-6 rounded-md shadow-md text-sm">
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

            <button onClick={handleConfirm} className="mt-6 w-full bg-[#d07635] hover:bg-[#b96128] cursor-pointer text-white py-2 rounded-md font-semibold transition duration-200">
              دفع و تأكيد الطلب
            </button>
          </div>
        </div>
      </div>
    </form>
  );
};

export default PlaceOrder;

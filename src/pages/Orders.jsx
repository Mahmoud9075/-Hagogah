import { useEffect, useState } from "react";

function Orders() {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    // Get Data
    const stored = JSON.parse(localStorage.getItem("orders") || "[]").reverse();
    setOrders(stored);
  }, []);

  if (!orders.length) {
    return (
      <div className="flex justify-center items-center h-[60vh]">
        <p className="text-[#d07635] text-lg font-semibold">
          لا توجد طلبات بعد
        </p>
      </div>
    );
  }

  return (
    <div className="px-4 md:px-12 mt-8">
      <h1 className="text-center text-2xl font-bold text-[#d07635] mb-6">
        الطلبات السابقة
      </h1>

      {/* titles */}
      <div className="hidden md:grid grid-cols-6 gap-4 text-center text-sm font-semibold text-[#d07635] border-b pb-2">
        <p>#</p>
        <p>التاريخ</p>
        <p>المُنتجات</p>
        <p>الإجمالي الكلى</p>
        <p>الحالة</p>
      </div>

      {orders.map((order, idx) => {
        const productsCount = Object.values(order.cartItems).reduce(
          (a, b) => a + b,
          0
        );

        return (
          <div
            key={idx}
            className="grid grid-cols-2 md:grid-cols-6 items-center gap-4 py-4 border-b text-sm text-center"
          >
            {/* رقم الطلب */}
            <p className="font-medium">{orders.length - idx}</p>

            {/* التاريخ */}
            <p className="text-gray-700">
              {new Date(order.date).toLocaleDateString("ar-EG", {
                year: "numeric",
                month: "short",
                day: "numeric",
              })}
            </p>

            {/* عدد المنتجات */}
            <p>{productsCount} منتج</p>

            {/* الإجمالى الكلى */}
            <p className="font-semibold text-[#d07635]">
              جنيه {order.total.toFixed(2)}
            </p>

            {/* الحالة */}
            <p className="text-xs md:text-sm">{order.status}</p>
          </div>
        );
      })}
    </div>
  );
}

export default Orders;

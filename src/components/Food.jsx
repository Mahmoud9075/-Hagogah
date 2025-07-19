import { useContext, useMemo } from "react";
import { StoreContext } from "../context/StoreContext";
import FoodItem from "./FoodItem";

const Food = ({ category }) => {
  const { food, search } = useContext(StoreContext);

  //===================
  // Filter by Search
  //===================
  const filtered = useMemo(() => {
    const term = search.trim().toLowerCase();

    return food.filter((item) => {
      const inCategory = category === "All" || category === item.category;

      const matchSearch =
        !item ||
        item.name.toLowerCase().includes(term) ||
        (item.category && item.category.toLowerCase().includes(term));

      return inCategory && matchSearch;
    });
  }, [food, search, category]);

  return (
    <div className="mt-7 px-[5%]" id="food">
      <div className="grid gap-x-[30px] gap-y-[40px] mt-[30px] grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 justify-items-center">
        {filtered.length ? (
          filtered.map((item) => (
            <FoodItem
              key={`food-${item._id}`}
              id={item._id}
              name={item.name}
              price={item.price}
              image={item.image}
            />
          ))
        ) : (
          <p className="col-span-full text-center text-[#d07635]">
            لا يوجد طبق يطابق كلمة {search}
          </p>
        )}
      </div>
    </div>
  );
};

export default Food;

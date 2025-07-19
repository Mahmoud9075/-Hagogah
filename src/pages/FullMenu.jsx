import { useState } from "react";
import ExploreMenu from "../components/ExploreMenu";
import Food from "../components/Food";

const FullMenu = () => {
  const [category, setCategory] = useState("All");

  return (
    <div>
      <ExploreMenu category={category} setCategory={setCategory} />
      <Food category={category} />
    </div>
  );
};

export default FullMenu;

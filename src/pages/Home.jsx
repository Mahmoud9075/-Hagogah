import { useState } from "react";
import ExploreMenu from "../components/ExploreMenu";
import Hero from "../components/Hero";
import Food from "../components/Food";
import { menu } from "../assets/assets";
import About from "../components/About";

const Home = () => {
  const [category, setCategory] = useState(menu[0].menu_name);

  return (
    <div>
      <Hero />
      <About />
      <ExploreMenu category={category} setCategory={setCategory} />
      <Food category={category} />
    </div>
  );
};

export default Home;

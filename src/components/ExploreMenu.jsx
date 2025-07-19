import { useRef } from "react";
import { menu } from "../assets/assets";
import { ChevronLeft, ChevronRight } from "lucide-react";
import listImg from "../../public/list.webp";

const ExploreMenu = ({ category, setCategory }) => {
  const listRef = useRef(null);

  // كم يتحرك كل نقرة
  const SCROLL_AMOUNT = 300;

  const scrollLeft = () => {
    listRef.current?.scrollBy({ left: -SCROLL_AMOUNT, behavior: "smooth" });
  };

  const scrollRight = () => {
    listRef.current?.scrollBy({ left: SCROLL_AMOUNT, behavior: "smooth" });
  };

  return (
    <section id="menu" className="flex flex-col gap-8 mt-4">
      {/* Title */}
      <div className="text-center">
        <div className="inline-flex gap-4 items-center mb-1">
          <p className="w-8 sm:w-12 h-[1px] sm:h-[2px] bg-black"></p>
          <h1 className="font-medium text-3xl sm:text-5xl md:text-6xl">
            منيو حجوجة
          </h1>
          <p className="w-8 sm:w-12 h-[1px] sm:h-[2px] bg-black"></p>
        </div>
        <p className="mt-7 text-lg sm:text-xl md:text-2xl">
          استمتع بتناول الطعام البيتي والفلاحي في أجواء رمضان
        </p>
      </div>

      <div className="relative">
        {/* Left Button */}
        <button
          onClick={scrollLeft}
          className="
            md:flex hidden items-center justify-center border-2 border-white
            absolute left-0 top-1/2 -translate-y-1/2
            w-10 h-10 rounded-full bg-[#d07635] backdrop-blur
            shadow transition z-10 cursor-pointer"
        >
          <ChevronLeft className="w-6 h-6 text-white" />
        </button>

        {/* القائمة نفسها */}
        <div
          ref={listRef}
          id="menu-list"
          className="flex flex-row justify-start items-center gap-10 overflow-x-auto overflow-y-hidden scrollbar-hide"
        >
          {menu.map((item, index) => (
            <div
              onClick={() =>
                setCategory((prev) =>
                  prev === item.menu_name ? "All" : item.menu_name
                )
              }
              key={index}
              className="flex flex-col items-center snap-start"
            >
              <div className="lg:w-40 w-24 aspect-square rounded-full overflow-hidden">
                <img
                  src={item.menu_image}
                  alt={item.menu_name}
                  loading="lazy"
                  className="w-full h-full object-cover cursor-pointer"
                />
              </div>
              <p className="mt-2.5 text-base whitespace-nowrap">
                {item.menu_name}
              </p>
            </div>
          ))}
        </div>

        {/* Right Button */}
        <button
          onClick={scrollRight}
          className="
            md:flex hidden items-center justify-center border-2 border-white
            absolute right-0 top-1/2 -translate-y-1/2
            w-10 h-10 rounded-full bg-[#d07635] backdrop-blur
            shadow transition z-10 cursor-pointer"
        >
          <ChevronRight className="w-6 h-6 text-white" />
        </button>
      </div>

      {/* list img */}
      <img
        src={listImg}
        alt="list"
        className="w-full mt-1.5 md:h-4 sm:h-3 h-2"
      />
    </section>
  );
};

export default ExploreMenu;

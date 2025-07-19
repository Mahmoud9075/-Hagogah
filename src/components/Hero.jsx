import { Link } from "react-router";

const Hero = () => {
  return (
    <div className="relative bg-[url('../public/home.webp')] bg-cover bg-center h-[48vw] md:h-[44vw] lg:h-[37vw] rounded-xl my-[10px] mx-auto">
      <div className="absolute flex flex-col items-end w-[90%] top-[20%] gap-[1.5vw]">
        <h2 className="font-medium text-[max(4vw,22px)]">حجوجة اصل الاكل</h2>
        <p className="text-[3.2vw]">البيت الفلاحى</p>
        <Link to="/menu">
          <button className="cursor-pointer bg-[#d07635] text-[max(1vw,13px)] text-white py-[1vw] px-[2.3vw] mr-3 rounded-md hover:bg-amber-700 active:scale-95 transition duration-200">
            منيو حجوجة
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Hero;

import { useContext, useState } from "react";
import { FiMenu } from "react-icons/fi";
import { HiOutlineSearch } from "react-icons/hi";
import { GiMeal } from "react-icons/gi";
import { IoIosArrowBack } from "react-icons/io";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { StoreContext } from "../context/StoreContext";
import { FaUser } from "react-icons/fa6";

const Navbar = ({ setShowLogin }) => {
  const [visible, setVisible] = useState(false);

  const { getTotalCartAmount, setShowSearch } = useContext(StoreContext);

  const navigate = useNavigate();
  const location = useLocation();

  //=====================
  // To Show Search bar
  //=====================
  const handleSearchClick = () => {
    if (location.pathname !== "/menu") {
      navigate("/menu");
      setTimeout(() => {
        setShowSearch(true);
      }, 600);
    } else {
      setTimeout(() => {
        setShowSearch(true);
      }, 0);
    }
  };

  // هل المستخدم مسجل ام لا
  const currentUser = JSON.parse(localStorage.getItem("currentUser") || "null");

  return (
    <div className="flex p-[1%] justify-between items-center">
      {/*=======
        logo
      ==========*/}
      <Link to="/">
        <img src="logo.webp" alt="logo" className="w-[70px] sm:w-[85px]" loading="lazy" />
      </Link>
      {/*========================
        Menu For large Screen
      ==========================*/}
      <ul className="hidden md:flex gap-5 text-xl">
        <Link to="/" className="cursor-pointer">
          الرئيسية
        </Link>
        <Link to="/menu" className="cursor-pointer">
          منيو حجوجة
        </Link>
      </ul>
      {/*===============
        Icons & Button
      ==================*/}
      <div className="flex items-center gap-5 md:gap-8">
        <HiOutlineSearch
          onClick={handleSearchClick}
          className="cursor-pointer text-3xl"
        />
        <div className="relative">
          <Link to="/cart">
            <GiMeal className="cursor-pointer text-3xl" />
          </Link>
          <div
            className={
              getTotalCartAmount() === 0
                ? ""
                : "absolute min-w-2.5 min-h-2.5 bg-[#d07635] rounded-md -top-2 -right-2"
            }
          ></div>
        </div>
        {/* لو المستخدم عمل تسجيل دخول تظهر الايكون */}
        {!currentUser ? (
          <button
            onClick={() => setShowLogin(true)}
            className="cursor-pointer hidden md:flex bg-[#d07635] text-white py-2.5 px-[30px] rounded-md hover:bg-amber-700 transition duration-300"
          >
            تسجيل الدخول
          </button>
        ) : (
          <Link to="/orders">
            <FaUser className="text-2xl cursor-pointer hidden md:flex" />
          </Link>
        )}

        {/* Menu icon for small screen */}
        <span
          onClick={() => setVisible(true)}
          className="md:hidden cursor-pointer text-4xl"
        >
          <FiMenu />
        </span>
      </div>

      {/*========================
        menu for small screen
      ==========================*/}
      <div
        className={`absolute top-0 right-0 bottom-0 z-10 overflow-hidden bg-white transition-all ${
          visible ? `w-[300px]` : `w-0`
        }`}
      >
        <div className="flex flex-col">
          <div
            onClick={() => setVisible(false)}
            className="flex items-center gap-4 p-3 cursor-pointer"
          >
            <span className="h-4 items-center">
              <IoIosArrowBack />
            </span>
            <p>رجوع</p>
          </div>

          <ul className="flex flex-col gap-5 items-center justify-center mt-6">
            <Link to="/" onClick={() => setVisible(false)}>
              <button className="cursor-pointer bg-white border-2 border-[#d07635] text-[#d07635] py-2.5 px-[30px] rounded-md hover:bg-[#d07635] hover:text-white transition duration-200">
                الرئيسية
              </button>
            </Link>
            <Link to="/menu" onClick={() => setVisible(false)}>
              <button className="cursor-pointer bg-white border-2 border-[#d07635] text-[#d07635] py-2.5 px-[30px] rounded-md hover:bg-[#d07635] hover:text-white transition duration-200">
                منيو حجوجة
              </button>
            </Link>

            {!currentUser ? (
              <button
                onClick={() => setVisible(false)}
                className="cursor-pointer flex bg-[#d07635] text-white py-2.5 px-[30px] mt-5 rounded-md hover:bg-amber-700 transition duration-300"
              >
                تسجيل الدخول
              </button>
            ) : (
              <Link to="/orders" onClick={() => setVisible(false)}>
                <button className="cursor-pointer flex bg-[#d07635] text-white py-2.5 px-[30px] mt-5 rounded-md hover:bg-amber-700 transition duration-300">
                  الاوردرات
                </button>
              </Link>
            )}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;

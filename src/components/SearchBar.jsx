import { useContext, useEffect, useState } from "react";
import { useLocation } from "react-router";
import { StoreContext } from "../context/StoreContext";
import { FiSearch } from "react-icons/fi";
import { IoMdClose } from "react-icons/io";

const SearchBar = () => {
  const { search, setSearch, showSearch, setShowSearch } =
    useContext(StoreContext);
  const [visible, setVisible] = useState(false);
  const location = useLocation();

  //=======================================================
  // 2. Show the search bar if the location is collection
  //=======================================================
  useEffect(() => {
    if (location.pathname.includes("menu")) {
      setVisible(true);
    } else {
      setVisible(false);
    }
  }, [location]);

  return showSearch && visible ? (
    <div className="border-t border-b bg-gray-50 text-center">
      <div className="inline-flex items-center justify-center border border-gray-400 px-5 py-2 my-5 mx-3 rounded-full w-3/4 sm:w-1/2">
        <input
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          type="text"
          placeholder="Search"
          className="flex-1 outline-none bg-inherit text-sm"
        />
        <FiSearch />
      </div>
      <IoMdClose
        onClick={() => setShowSearch(false)}
        className="inline text-xl text-gray-500 cursor-pointer"
      />
    </div>
  ) : null;
};

export default SearchBar;

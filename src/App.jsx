import { Route, Routes, useLocation } from "react-router";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Cart from "./pages/Cart";
import PlaceOrder from "./pages/PlaceOrder";
import Footer from "./components/Footer";
import { useState } from "react";
import Login from "./components/Login";
import FullMenu from "./pages/FullMenu";
import Orders from "./pages/Orders";
import PageTransitionWrapper from "./animations/PageTransitionWrapper";
import { AnimatePresence } from "motion/react";
import SearchBar from "./components/SearchBar";

const App = () => {
  const [showLogin, setShowLogin] = useState(false);
  const location = useLocation();

  return (
    <>
      {showLogin ? <Login setShowLogin={setShowLogin} /> : <></>}
      <div className="w-[95%] lg:w-4/5 mx-auto my-0 ">
        <Navbar setShowLogin={setShowLogin} />
        <SearchBar />
        <AnimatePresence mode="wait">
          <Routes location={location} key={location.pathname}>
            <Route
              path="/"
              element={
                <PageTransitionWrapper>
                  <Home />
                </PageTransitionWrapper>
              }
            />
            <Route
              path="/menu"
              element={
                <PageTransitionWrapper>
                  <FullMenu />
                </PageTransitionWrapper>
              }
            />
            <Route
              path="/cart"
              element={
                <PageTransitionWrapper>
                  <Cart />
                </PageTransitionWrapper>
              }
            />
            <Route
              path="/place-order"
              element={
                <PageTransitionWrapper>
                  <PlaceOrder />
                </PageTransitionWrapper>
              }
            />
            <Route
              path="/orders"
              element={
                <PageTransitionWrapper>
                  <Orders />
                </PageTransitionWrapper>
              }
            />
          </Routes>
        </AnimatePresence>
      </div>
      <Footer />
    </>
  );
};

export default App;

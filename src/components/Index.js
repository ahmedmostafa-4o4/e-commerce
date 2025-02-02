import { Route, Routes } from "react-router-dom";
import "../App.css";
import Nav from "./reusableComponents/Nav";
import SideBar from "./reusableComponents/SideBar";
import Overlay from "./reusableComponents/Overlay";
import { useEffect, useState } from "react";
import Footer from "./reusableComponents/Footer";
import ProductPage from "./products/ProductPage";
import Cart from "./profile/Cart";
import Favorites from "./profile/Favorites";
import Services from "./Services";
import AboutUs from "./AboutUs";
import { useDispatch, useSelector } from "react-redux";
import { getAuthUser } from "./rtk/Slices/user-slice";
import Home from "./home/Home";

function Index() {
  const [isOpen, setIsOpen] = useState(false);

  const dispatch = useDispatch();
  const user = useSelector((state) => state.user);

  const handleSideBar = () => {
    if (
      document.querySelector(".sidebar").classList.contains("side-bar-open")
    ) {
      document.body.classList.remove("side-bar-open");
      document.querySelector(".sidebar").classList.remove("side-bar-open");
      setIsOpen(false);
    } else {
      document.body.classList.add("side-bar-open");
      document.querySelector(".sidebar").classList.add("side-bar-open");
      setIsOpen(true);
    }
  };

  useEffect(() => {
    dispatch(getAuthUser());
  }, []);

  return (
    <>
      {isOpen ? <Overlay handleSideBar={handleSideBar} /> : null}
      <Nav handleSideBar={handleSideBar} auth={user} />
      <SideBar handleSideBar={handleSideBar} auth={user} />
      <div className="my-progress-bar"></div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/product/:id/:title"
          element={<ProductPage auth={user} />}
        />
        <Route path="/cart" element={<Cart auth={user} />} />
        <Route path="/favorites" element={<Favorites />} />
        <Route path="/services" element={<Services />} />
        <Route path="/about-us" element={<AboutUs />} />
      </Routes>
      <Footer />
    </>
  );
}

export default Index;

import { Link, Route, Routes, useNavigate } from "react-router-dom";
import ProfileSidebar from "./ProfileSidebar";
import User from "./User";
import Returns from "./Returns";
import TrackOrders from "./TrackOrders";
import Orders from "./Orders";
import Settings from "./Settings";
import Loader from "../reusableComponents/Loader";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBars,
  faCartShopping,
  faHeart,
} from "@fortawesome/free-solid-svg-icons";
import Notifications from "./Notifications";
import { useDispatch, useSelector } from "react-redux";
import { getAuthUser } from "../rtk/Slices/user-slice";
import { useEffect } from "react";

function Profile() {
  const cartLength = useSelector((state) => state.cart.items).length;
  const favLength = useSelector((state) => state.fav).length;
  const sidebarReduce = () => {
    const sidebar = document.querySelector(".profile-sidebar");
    const sidebarContain = document.querySelector(".sidebar-contain");
    if (sidebar.classList.contains("profile-sidebar-reduce")) {
      sidebar.classList.remove("profile-sidebar-reduce");
      sidebarContain.classList.remove("sidebar-contain-reduce");
    } else {
      sidebar.classList.add("profile-sidebar-reduce");
      sidebarContain.classList.add("sidebar-contain-reduce");
    }
  };

  const dispatch = useDispatch();
  const auth = useSelector((state) => state.user);
  const loading = useSelector((state) => state.user.loading);
  useEffect(() => {
    dispatch(getAuthUser);
  }, []);

  if (loading) return <Loader />;
  return (
    <div className="profile">
      <div style={{ height: "100vh" }} className="sidebar-contain"></div>
      <ProfileSidebar />
      <div className="profile-main">
        <div className="profile-nav">
          <button onClick={() => sidebarReduce()}>
            <FontAwesomeIcon icon={faBars} />
          </button>

          <div className="user-nav-image">
            <Link to={"/cart"} style={{ position: "relative" }}>
              {" "}
              <FontAwesomeIcon icon={faCartShopping} />
              <span className="dot">{cartLength}</span>
            </Link>
            <Link to={"/favorites"} style={{ position: "relative" }}>
              {" "}
              <FontAwesomeIcon icon={faHeart} />
              <span className="dot">{favLength}</span>
            </Link>
            <img
              src={`${
                auth.data.image
                  ? `${process.env.REACT_APP_IMAGE_BASE_URL}${auth.data.image}`
                  : "/images/default-user.jpg"
              }`}
              alt="User"
            />
          </div>
        </div>
        <Routes>
          <Route path="user" element={<User auth={auth} />} />
          <Route path="notifications" element={<Notifications auth={auth} />} />
          <Route path="returns" element={<Returns auth={auth} />} />
          <Route path="track_orders" element={<TrackOrders auth={auth} />} />
          <Route path="orders" element={<Orders auth={auth} />} />
          <Route path="settings" element={<Settings auth={auth} />} />
        </Routes>
      </div>
    </div>
  );
}

export default Profile;

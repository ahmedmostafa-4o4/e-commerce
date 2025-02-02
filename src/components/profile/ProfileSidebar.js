import { Link, useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUser,
  faBell,
  faTruckFront,
  faRotateLeft,
  faGear,
  faRightFromBracket,
  faTrashCan,
} from "@fortawesome/free-solid-svg-icons";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../rtk/Slices/user-slice";

function ProfileSidebar({ auth }) {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const loading = useSelector((state) => state.user.loading);
  const error = useSelector((state) => state.user.error);
  const handleLogout = () => {
    dispatch(logout());
    if (!loading && !error) navigate("/login");
  };
  return (
    <div className="profile-sidebar">
      <div className="logo">
        <Link to={"/"}>
          {" "}
          <img src="/logo192.png" alt="" />
        </Link>
      </div>
      <div className="links">
        <p>Profile</p>
        <Link to={"user"}>
          <FontAwesomeIcon icon={faUser} />
          <p>Edit Profile</p>
        </Link>
        <Link to={"notifications"}>
          <FontAwesomeIcon icon={faBell} />
          <p>Notifications</p>
        </Link>
        <p>Orders</p>
        <Link to={"orders"}>
          <FontAwesomeIcon icon={faUser} />
          <p>Orders</p>
        </Link>
        <Link to={"track_orders"}>
          <FontAwesomeIcon icon={faTruckFront} /> <p>Track Orders</p>
        </Link>
        <Link to={"returns"}>
          <FontAwesomeIcon icon={faRotateLeft} />
          <p>Returns</p>
        </Link>
        <p>Secure</p>
        <Link to={"settings"}>
          <FontAwesomeIcon icon={faGear} />
          <p>Settings</p>
        </Link>
        <button
          className="danger"
          style={{ marginBottom: "10px" }}
          onClick={() => handleLogout()}
        >
          <FontAwesomeIcon icon={faRightFromBracket} />
          <p>Logout</p>
        </button>
      </div>
    </div>
  );
}

export default ProfileSidebar;

import { Link, useNavigate } from "react-router-dom";
import CloseIcon from "@mui/icons-material/Close";
import { Button } from "@mui/material";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faAngleRight,
  faRightFromBracket,
} from "@fortawesome/free-solid-svg-icons";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../rtk/Slices/user-slice";

function SideBar({ handleSideBar, auth }) {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const loading = useSelector((state) => state.user.loading);
  const error = useSelector((state) => state.user.error);
  const handleLogout = () => {
    dispatch(logout());
    if (!loading && !error) navigate("/login");
  };
  return (
    <div className="sidebar">
      {auth.data ? (
        <div className="user-componant">
          <img
            src={`${auth.image ? auth.image : "/images/default-user.jpg"}`}
            alt="User"
          />
          <div>
            <p>{auth.data.name}</p>
            <span>{auth.data.email}</span>
            <Link to={"/profile"}>
              View profile <FontAwesomeIcon icon={faAngleRight} />
            </Link>
          </div>
        </div>
      ) : (
        <div className="nav-logs">
          <button>
            <Link to="/login">Log in</Link>
          </button>
          <button>
            <Link to="/signup" className="blue-btn">
              Sign up
            </Link>
          </button>
        </div>
      )}

      <ul>
        <li>
          <Button type="submit" fullWidth className="mui-btn">
            <Link to={"/"} onClick={handleSideBar}>
              {" "}
              Home
            </Link>
          </Button>
        </li>
        <li>
          <Button type="submit" fullWidth className="mui-btn">
            <Link to={"/products"} onClick={handleSideBar}>
              {" "}
              PRODUCTS
            </Link>
          </Button>
        </li>
        <li>
          <Button type="submit" fullWidth className="mui-btn">
            <Link to={"/services"} onClick={handleSideBar}>
              {" "}
              SERVICES
            </Link>
          </Button>
        </li>
        <li>
          <Button type="submit" fullWidth className="mui-btn">
            <Link to={"/about-us"} onClick={handleSideBar}>
              {" "}
              ABOUT US
            </Link>
          </Button>
        </li>
        <li>
          <Button type="submit" fullWidth className="mui-btn">
            <Link to={"/contact-us"} onClick={handleSideBar}>
              {" "}
              CONTACT US
            </Link>
          </Button>
        </li>
        {auth.data && (
          <li>
            <Button
              type="submit"
              fullWidth
              className="mui-btn logout-btn"
              onClick={() => handleLogout()}
            >
              <FontAwesomeIcon icon={faRightFromBracket} />
              LOGOUT
            </Button>
          </li>
        )}
      </ul>
      <div style={{ display: "grid", placeItems: "center" }}>
        <Button
          type="submit"
          onClick={handleSideBar}
          sx={{
            borderRadius: "50%",
            width: "60px",
            height: "64px",
            padding: "0",
            border: "1px solid var(--main-color)",
          }}
        >
          <CloseIcon />
        </Button>
      </div>
    </div>
  );
}

export default SideBar;

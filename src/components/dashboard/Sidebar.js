import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUser,
  faBell,
  faAngleRight,
  faTruckFront,
  faRotateLeft,
  faGear,
  faRightFromBracket,
  faTrashCan,
  faGears,
} from "@fortawesome/free-solid-svg-icons";
function Sidebar() {
  const handleMenu = (btn) => {
    const submenu = btn.nextElementSibling;
    // Toggle the active class on the clicked menu item
    btn.classList.toggle("active");
    btn.lastChild.classList.toggle("arrow-down");
    // Smoothly expand or collapse the submenu
    if (submenu.style.maxHeight) {
      submenu.style.maxHeight = null;
    } else {
      submenu.style.maxHeight = submenu.scrollHeight + "px";
    }
  };

  return (
    <div className="dashboard-sidebar show">
      <div className="logo">
        <Link to={"/"}>
          {" "}
          <img src="/logo192.png" alt="" />
        </Link>
      </div>
      <div className="links">
        <div>
          <button className="menu-item home-btn">
            <Link to={"/admin"}>Home</Link>
          </button>
        </div>
        <div>
          <button
            className="menu-item"
            onClick={(btn) => handleMenu(btn.currentTarget)}
          >
            Profile
            <FontAwesomeIcon icon={faAngleRight} />
          </button>
          <div className="submenu">
            <Link to={"user"}>
              <FontAwesomeIcon icon={faUser} />
              <p>Edit Profile</p>
            </Link>
            <Link to={"notifications"}>
              <FontAwesomeIcon icon={faBell} />
              <p>Notifications</p>
            </Link>
            <Link to={"notifications"}>
              <FontAwesomeIcon icon={faGears} />
              <p>Settings</p>
            </Link>
          </div>
        </div>
        <div>
          <button
            className="menu-item"
            onClick={(btn) => handleMenu(btn.currentTarget)}
          >
            Admins
            <FontAwesomeIcon icon={faAngleRight} />
          </button>
          <div className="submenu">
            <Link to={"user"}>
              <FontAwesomeIcon icon={faUser} />
              <p>Admins List</p>
            </Link>
            <Link to={"new-admin"}>
              <FontAwesomeIcon icon={faUser} />
              <p>New Admin</p>
            </Link>
            <Link to={"notifications"}>
              <FontAwesomeIcon icon={faBell} />
              <p>Send Notifications</p>
            </Link>
          </div>
        </div>
        <div>
          <button
            className="menu-item"
            onClick={(btn) => handleMenu(btn.currentTarget)}
          >
            Users
            <FontAwesomeIcon icon={faAngleRight} />
          </button>
          <div className="submenu">
            <Link to={"user"}>
              <FontAwesomeIcon icon={faUser} />
              <p>Users List</p>
            </Link>
            <Link to={"notifications"}>
              <FontAwesomeIcon icon={faBell} />
              <p>Add User</p>
            </Link>
            <Link to={"notifications"}>
              <FontAwesomeIcon icon={faGears} />
              <p>Send Notifications</p>
            </Link>
          </div>
        </div>
        <div>
          <button
            className="menu-item"
            onClick={(btn) => handleMenu(btn.currentTarget)}
          >
            Customers
            <FontAwesomeIcon icon={faAngleRight} />
          </button>
          <div className="submenu">
            <Link to={"user"}>
              <FontAwesomeIcon icon={faUser} />
              <p>Customers List</p>
            </Link>
            <Link to={"notifications"}>
              <FontAwesomeIcon icon={faGears} />
              <p>Send Notifications</p>
            </Link>
          </div>
        </div>
        <div>
          <button
            className="menu-item"
            onClick={(btn) => handleMenu(btn.currentTarget)}
          >
            Returns
            <FontAwesomeIcon icon={faAngleRight} />
          </button>
          <div className="submenu">
            <Link to={"user"}>
              <FontAwesomeIcon icon={faUser} />
              <p>Returns List</p>
            </Link>
            <Link to={"notifications"}>
              <FontAwesomeIcon icon={faBell} />
              <p>Verify Return</p>
            </Link>
            <Link to={"notifications"}>
              <FontAwesomeIcon icon={faBell} />
              <p>Add Return</p>
            </Link>
          </div>
        </div>
        <div>
          <button
            className="menu-item"
            onClick={(btn) => handleMenu(btn.currentTarget)}
          >
            Orders
            <FontAwesomeIcon icon={faAngleRight} />
          </button>
          <div className="submenu">
            <Link to={"user"}>
              <FontAwesomeIcon icon={faUser} />
              <p>Orders List</p>
            </Link>
            <Link to={"notifications"}>
              <FontAwesomeIcon icon={faBell} />
              <p>Verify Orders</p>
            </Link>
            <Link to={"notifications"}>
              <FontAwesomeIcon icon={faBell} />
              <p>Add Order</p>
            </Link>
          </div>
        </div>
        <div>
          <button
            className="menu-item"
            onClick={(btn) => handleMenu(btn.currentTarget)}
          >
            Products
            <FontAwesomeIcon icon={faAngleRight} />
          </button>
          <div className="submenu">
            <Link to={"user"}>
              <FontAwesomeIcon icon={faUser} />
              <p>Products List</p>
            </Link>
            <Link to={"notifications"}>
              <FontAwesomeIcon icon={faBell} />
              <p>Add Product</p>
            </Link>
          </div>
        </div>
        <div>
          <button
            className="menu-item"
            onClick={(btn) => handleMenu(btn.currentTarget)}
          >
            Payment Gates
            <FontAwesomeIcon icon={faAngleRight} />
          </button>
          <div className="submenu">
            <Link to={"user"}>
              <FontAwesomeIcon icon={faUser} />
              <p>Payment Gates List</p>
            </Link>
            <Link to={"notifications"}>
              <FontAwesomeIcon icon={faBell} />
              <p>Add Payment Gates</p>
            </Link>
          </div>
        </div>
        <div>
          <button
            className="menu-item"
            onClick={(btn) => handleMenu(btn.currentTarget)}
          >
            Global Settings
            <FontAwesomeIcon icon={faAngleRight} />
          </button>
          <div className="submenu">
            <Link to={"user"}>
              <FontAwesomeIcon icon={faUser} />
              <p>Posters</p>
            </Link>
            <Link to={"notifications"}>
              <FontAwesomeIcon icon={faBell} />
              <p>Website Info</p>
            </Link>
          </div>
        </div>
        <div className="actions">
          <button className="logout danger">
            <FontAwesomeIcon icon={faRightFromBracket} />
            <p>Logout</p>
          </button>
          <button className="delete-account danger">
            <FontAwesomeIcon icon={faTrashCan} />
            <p>Delete account</p>
          </button>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;

import { Container } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import MenuOpenIcon from "@mui/icons-material/MenuOpen";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMinus,
  faPlus,
  faUser,
  faXmark,
} from "@fortawesome/free-solid-svg-icons";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import { useDispatch, useSelector } from "react-redux";
import {
  deleteFromCart,
  deleteFromCartDB,
  updateQuantity,
} from "../rtk/Slices/cart-slice";

function Nav({ handleSideBar, auth }) {
  const cartItems = useSelector((state) => state.cart.items);
  const cartLength = cartItems.length;
  const favLength = useSelector((state) => state.fav).length;
  const dispatch = useDispatch();
  const handleQuantityChange = (product, increment) => {
    const newQuantity = product.quantity + increment;
    if (newQuantity < 1) return; // Prevent quantity below 1

    dispatch(updateQuantity({ id: product.id, quantity: newQuantity }));
  };

  const navigate = useNavigate();

  const totalPrice = cartItems.reduce(
    (total, product) =>
      total + (product.offer || product.price) * product.quantity,
    0
  );
  console.log(cartItems);
  return (
    <div className="nav">
      <Container>
        <nav>
          <div className="nav-content">
            <div className="logo">
              {" "}
              <Link to={"/"}>
                <img
                  src="/logo192.png"
                  alt=""
                  style={{ width: "30px", height: "30px" }}
                />
              </Link>
            </div>

            <ul>
              <li>
                <Link to={"/"}>Home</Link>
                <ul className="drop-down">
                  <li>
                    <Link to={"#featured-products"}>Featured Products</Link>
                  </li>
                  <li>
                    <a href="">Top Rated Products</a>
                  </li>
                  <li>
                    <a href="">Recently Added</a>
                  </li>
                </ul>
              </li>
              <li>
                <Link to={"/services"}>Services</Link>
              </li>
              <li>
                <Link to={"/about-us"}>About us</Link>
              </li>
              <li>
                <Link to={"/products"}>Products</Link>
              </li>
              <li>
                <Link to={"/fqa"}>FQA</Link>
              </li>
              <li>
                <Link to={"/contact"}>Contact</Link>
              </li>
            </ul>
          </div>
          <div className="actions">
            {auth.data && (
              <Link to={"/profile/user"}>
                <FontAwesomeIcon icon={faUser} />
              </Link>
            )}

            <Link to={"/cart"}>
              <FontAwesomeIcon icon={faCartShopping} />
              <span className="dot">{cartLength}</span>
              <div className="dropdown">
                <div className="cart-products">
                  {cartItems.map((product) => (
                    <div
                      className="product"
                      key={product.id}
                      onClick={() =>
                        navigate(`/product/${product.id}/${product.title}`)
                      }
                    >
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          auth.data
                            ? dispatch(deleteFromCartDB(product.id))
                            : dispatch(deleteFromCart(product.id));
                        }}
                      >
                        <FontAwesomeIcon icon={faXmark} />
                      </button>

                      <div>
                        <div className="product-image">
                          <img src={product.image1} alt="" />
                        </div>
                        <div className="product-detailes">
                          <p className="name">{product.title}</p>
                          <p className="detailes">{product.size}</p>
                        </div>
                        <div className="counter">
                          <button
                            className="minus"
                            onClick={(e) => {
                              e.stopPropagation();
                              handleQuantityChange(product, -1);
                            }}
                          >
                            <FontAwesomeIcon icon={faMinus} />
                          </button>
                          <p className="num">{product.quantity}</p>
                          <button
                            className="plus"
                            onClick={(e) => {
                              e.stopPropagation();
                              handleQuantityChange(product, +1);
                            }}
                          >
                            <FontAwesomeIcon icon={faPlus} />
                          </button>
                        </div>

                        <div className="price">
                          <p className="main-price">
                            ${product.offer || product.price}
                          </p>
                          <p className="var-price">
                            $
                            {(
                              (product.offer || product.price) *
                              product.quantity
                            ).toFixed(2)}
                          </p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </Link>
            <Link to={"/favorites"}>
              <FontAwesomeIcon icon={faHeart} />
              <span className="dot">{favLength}</span>
            </Link>
          </div>
          {!auth.data && (
            <div className="nav-logs">
              <button>
                <Link to={"/login"}>Log in</Link>
              </button>
              <button>
                <Link to={"/signup"} className="blue-btn">
                  Sign up
                </Link>
              </button>
            </div>
          )}

          <button className="toggle-btn" onClick={handleSideBar}>
            <MenuOpenIcon />
          </button>
        </nav>
      </Container>
    </div>
  );
}

export default Nav;

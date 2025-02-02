import {
  faCartShopping,
  faHeart,
  faSearch,
  faShoppingCart,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Button } from "@mui/material";
import { Container } from "react-bootstrap";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

function ProductsNav({ categories }) {
  const cartItems = useSelector((state) => state.cart.items);
  const favLength = useSelector((state) => state.fav).length;
  const auth = useSelector((state) => state.user);
  const cartLength = cartItems.length;
  return (
    <div className="products-nav">
      <Container>
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
        <Button>
          <FontAwesomeIcon icon={faSearch} />
        </Button>
        {auth.data && (
          <Button>
            <Link to={"/profile/user"}>
              <FontAwesomeIcon icon={faUser} />
            </Link>
          </Button>
        )}
        <Button>
          <Link to={"/favorites"}>
            <div style={{ position: "relative" }}>
              <FontAwesomeIcon icon={faHeart} />
              <span className="dot">{favLength}</span>
            </div>
          </Link>
        </Button>
        <Button>
          <Link to={"/cart"}>
            <div style={{ position: "relative" }}>
              <FontAwesomeIcon icon={faCartShopping} />
              <span className="dot">{cartLength}</span>
            </div>
          </Link>
        </Button>
      </Container>
    </div>
  );
}

export default ProductsNav;

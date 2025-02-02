import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCartPlus,
  faCartShopping,
  faStar,
  faStarHalf,
  faHeart as solidHeart,
} from "@fortawesome/free-solid-svg-icons";
import {
  faHeart as regularHeart,
  faStar as regularStar,
} from "@fortawesome/free-regular-svg-icons";
import { useDispatch, useSelector } from "react-redux";
import {
  addToCart,
  addToCartDB,
  deleteFromCart,
  deleteFromCartDB,
} from "../rtk/Slices/cart-slice";
import { addToFav, deleteFromFav } from "../rtk/Slices/fav-slice";

function Product({ product, auth }) {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const cartItems = useSelector((state) => state.cart.items);
  const favItems = useSelector((state) => state.fav);
  const isInCart = cartItems.some((item) => item.id === product.id);
  const isInFav = favItems.some((item) => item.id === product.id);

  const truncateString = (str, maxLength) =>
    str.length > maxLength ? str.slice(0, maxLength) + "..." : str;

  const StarRating = ({ rating }) => {
    const roundedRating = Math.round(rating * 2) / 2;
    const stars = [];

    for (let i = 1; i <= 5; i++) {
      if (i <= roundedRating) {
        stars.push(<FontAwesomeIcon key={i} icon={faStar} />);
      } else if (i === Math.ceil(roundedRating) && roundedRating % 1 !== 0) {
        stars.push(<FontAwesomeIcon key={i} icon={faStarHalf} />);
      } else {
        stars.push(<FontAwesomeIcon key={i} icon={regularStar} />);
      }
    }
    return <>{stars}</>;
  };

  const isNew = (date) => {
    const daysDifference = (new Date() - new Date(date)) / (1000 * 3600 * 24);
    return daysDifference < 10;
  };

  const discountPercentage = product.offer
    ? (((product.price - product.offer) / product.price) * 100).toFixed(2)
    : 0;

  const handleAddToCart = () => {
    if (auth?.data) {
      if (isInCart) {
        dispatch(deleteFromCartDB(product.id));
      } else {
        dispatch(
          addToCartDB({ ...product, quantity: 1, user_id: auth.data.id })
        );
      }
    } else {
      if (isInCart) {
        dispatch(deleteFromCart(product.id));
      } else {
        dispatch(addToCart({ ...product, quantity: 1 }));
      }
    }
  };

  return (
    <div
      className="product-card"
      onClick={() => navigate(`/product/${product.id}/${product.title}`)}
    >
      <div className="category">
        {product.category}
        <div className="product-actions">
          <button
            className={`fav-btn ${isInFav && "show"}`}
            onClick={(e) => {
              e.stopPropagation();
              if (isInFav) {
                dispatch(deleteFromFav(product.id));
              } else {
                dispatch(addToFav(product));
              }
            }}
          >
            {isInFav ? (
              <FontAwesomeIcon icon={solidHeart} />
            ) : (
              <FontAwesomeIcon icon={regularHeart} />
            )}
          </button>
          <button
            className={`cart-btn ${isInCart && "show"}`}
            onClick={(e) => {
              e.stopPropagation();
              handleAddToCart();
            }}
          >
            {isInCart ? (
              <FontAwesomeIcon icon={faCartShopping} />
            ) : (
              <FontAwesomeIcon icon={faCartPlus} />
            )}
          </button>
        </div>
      </div>

      <div className="product-img">
        <img
          // src={productImage(product.image1)}
          src={product.image1}
          alt={product.title || "Product image"}
        />
        <div className="badges">
          {product.offer && (
            <span className="badge" style={{ backgroundColor: "#e7515a" }}>
              Offer
            </span>
          )}
          {product.stock < 1 && (
            <span className="badge" style={{ backgroundColor: "#3b3f5c" }}>
              Out of Stock
            </span>
          )}
          {isNew(product.created_at) && (
            <span className="badge" style={{ backgroundColor: "#e2a03f" }}>
              New
            </span>
          )}
          {product.rate >= 4.5 && (
            <span className="badge" style={{ backgroundColor: "#ffc107" }}>
              Top Rated
            </span>
          )}
          {discountPercentage >= 60 && (
            <span className="badge" style={{ backgroundColor: "#4CAF50" }}>
              Big Sale
            </span>
          )}
          {discountPercentage >= 80 && (
            <span className="badge" style={{ backgroundColor: "red" }}>
              Hot
            </span>
          )}
        </div>
      </div>

      <div className="product-content">
        <h4 className="product-name">{truncateString(product.title, 40)}</h4>
        <div className="reviews">
          <StarRating rating={product.rate} />
        </div>
        <div>
          {product.offer ? (
            <>
              <span className="product-price original-price">
                ${product.price}
              </span>
              <span className="product-price offer-price">
                ${product.offer}
              </span>
              <span className="product-discount">-{discountPercentage}%</span>
            </>
          ) : (
            <span className="product-price">${product.price}</span>
          )}
        </div>
      </div>
    </div>
  );
}

export default Product;

import { Carousel, Container } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar, faStarHalf } from "@fortawesome/free-solid-svg-icons";
import { faStar as regularStar } from "@fortawesome/free-regular-svg-icons";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { faMinus } from "@fortawesome/free-solid-svg-icons";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import {
  addToCart,
  addToCartDB,
  deleteFromCart,
  deleteFromCartDB,
} from "../rtk/Slices/cart-slice";
import { Link } from "react-router-dom";
import productImage from "../reusableComponents/productImage";

function ProductPage({ auth }) {
  let [number, setNumber] = useState(1);
  const add = () => {
    setNumber(number + 1);
  };

  const minus = () => {
    if (number <= 1) return 1;
    setNumber(number - 1);
  };
  const [product, setProduct] = useState({});
  const [color, setColor] = useState(null);
  const [size, setSize] = useState(null);
  const productID = useParams();
  const url = "http://127.0.0.1:8000/api/products/";
  const getProduct = async (productID) => {
    const req = await axios.get(`${url}${productID.id}`);
    const res = await req.data.product;
    console.log(res);
    setProduct(res);
  };

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
    const givenDate = new Date(date);

    // Get the current date
    const currentDate = new Date();

    // Calculate the difference in time
    const timeDifference = currentDate - givenDate;

    // Convert time difference from milliseconds to days
    const daysDifference = timeDifference / (1000 * 3600 * 24);

    // Check if the date is more than 10 days old
    const isAbove10Days = daysDifference < 10;

    return isAbove10Days;
  };

  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart.items);

  const isInCart = cart.some(
    (item) =>
      item.id === product.id && item.color === color && item.size === size
  );

  const handleAddToCart = () => {
    if (auth.data) {
      if (isInCart) {
        dispatch(deleteFromCartDB({ id: product.id, color, size }));
      } else {
        dispatch(
          addToCartDB({
            ...product,
            quantity: number,
            user_id: auth.data.id,
            color,
            size,
          })
        );
      }
    } else {
      if (isInCart) {
        dispatch(deleteFromCart({ id: product.id, color, size }));
      } else {
        dispatch(addToCart({ ...product, quantity: number, color, size }));
      }
    }
  };

  useEffect(() => {
    getProduct(productID);
  }, []);

  return (
    <>
      <div className="product-page-contain">
        <Container className="product-page">
          <div>
            <div className="product-image">
              <Carousel interval={null}>
                {product.image1 && (
                  <Carousel.Item>
                    <img
                      src={productImage(product.image1)}
                      alt={product.title}
                      text="First slide"
                    />
                  </Carousel.Item>
                )}
                {product.image2 && (
                  <Carousel.Item>
                    <img
                      src={productImage(product.image2)}
                      alt={product.title}
                      text="Sec slide"
                    />
                  </Carousel.Item>
                )}
                {product.image3 && (
                  <Carousel.Item>
                    <img
                      src={productImage(product.image3)}
                      alt={product.title}
                      text="Third slide"
                    />
                  </Carousel.Item>
                )}
                {product.image4 && (
                  <Carousel.Item>
                    <img
                      src={productImage(product.image4)}
                      alt={product.title}
                      text="Forth slide"
                    />
                  </Carousel.Item>
                )}
              </Carousel>
            </div>
            <div className="content-box">
              <h1 className="product-name">
                {product.title}
                <div className="badges">
                  {product.offer && (
                    <span className="badge" style={{ backgroundColor: "red" }}>
                      {" "}
                      Offer{" "}
                    </span>
                  )}

                  {isNew(product.created_at) && (
                    <span
                      className="badge"
                      style={{ backgroundColor: "#e2a03f" }}
                    >
                      {" "}
                      New
                    </span>
                  )}

                  {product.stock < 1 && (
                    <span
                      className="badge"
                      style={{ backgroundColor: "black" }}
                    >
                      {" "}
                      Out stock{" "}
                    </span>
                  )}

                  {product.rate >= 4.5 && (
                    <span className="badge" style={{ backgroundColor: "gold" }}>
                      {" "}
                      Top Rated
                    </span>
                  )}

                  {(
                    ((product.price - product.offer) / product.price) *
                    100
                  ).toFixed(2) >= 60 && (
                    <span
                      className="badge"
                      style={{ backgroundColor: "#4CAF50" }}
                    >
                      {" "}
                      Big Sale
                    </span>
                  )}
                  {(
                    ((product.price - product.offer) / product.price) *
                    100
                  ).toFixed(2) >= 80 && (
                    <span className="badge" style={{ backgroundColor: "red" }}>
                      {" "}
                      Hot
                    </span>
                  )}
                </div>
              </h1>
              <div className="reviews">
                <StarRating rating={product.rate} />

                <span>
                  {product.rate_count ? product.rate_count : ""} reviews
                </span>
              </div>
              <div style={{ display: "flex", alignItems: "center" }}>
                {product.offer ? (
                  <>
                    <span className="product-price original-price">
                      ${product.price}
                    </span>
                    <span className="product-price offer-price">
                      ${product.offer}
                    </span>
                    <span className="product-discount">
                      -
                      {(
                        ((product.price - product.offer) / product.price) *
                        100
                      ).toFixed(2)}
                      %
                    </span>
                  </>
                ) : (
                  <span className="product-price">${product.price}</span>
                )}
              </div>
              <div className="product-description"> {product.description}</div>
              <div className="product-colors">
                {product.colors &&
                  product.colors.map((c) => (
                    <button
                      style={{ backgroundColor: c }}
                      onClick={() => setColor(c)}
                      className={color === c && "selected"}
                    ></button>
                  ))}
              </div>
              <div className="product-sizes">
                {product.sizes &&
                  product.sizes.map((s) => (
                    <button
                      onClick={() => setSize(s)}
                      className={size === s && "selected"}
                    >
                      {s}
                    </button>
                  ))}
              </div>
              <div className="product-actions">
                <div className="counter">
                  <button
                    className="minus"
                    onClick={() => {
                      minus();
                    }}
                  >
                    <FontAwesomeIcon icon={faMinus} />
                  </button>
                  <p className="num">{number}</p>
                  <button
                    className="plus"
                    onClick={() => {
                      add();
                    }}
                  >
                    <FontAwesomeIcon icon={faPlus} />
                  </button>
                </div>
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    flex: "1",
                    gap: "10px",
                  }}
                >
                  <button
                    type="submit"
                    disabled={product.stock < 1}
                    onClick={() => {
                      handleAddToCart();
                    }}
                    style={
                      product.stock < 1
                        ? {
                            backgroundColor: "GrayText",
                            pointerEvents: "none",
                            cursor: "no-drop",
                          }
                        : null
                    }
                  >
                    {isInCart ? "Remove from Cart" : "Add to Cart"}
                  </button>
                  <Link
                    to="/checkout"
                    disabled={product.stock < 1}
                    style={
                      product.stock < 1
                        ? {
                            backgroundColor: "GrayText",
                            pointerEvents: "none",
                            cursor: "no-drop",
                          }
                        : null
                    }
                  >
                    Order Now
                  </Link>
                </div>
              </div>

              <div className="social"></div>
            </div>
          </div>
        </Container>
      </div>
    </>
  );
}

export default ProductPage;

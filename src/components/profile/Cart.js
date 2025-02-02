import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { faMinus } from "@fortawesome/free-solid-svg-icons";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { Container } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import {
  deleteFromCart,
  deleteFromCartDB,
  updateQuantity,
} from "../rtk/Slices/cart-slice";
import { useNavigate } from "react-router-dom";
import { checkout } from "../../stripeService";

function Cart({ auth }) {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.cart.items);
  const navigate = useNavigate();

  const handleQuantityChange = (product, increment) => {
    const newQuantity = product.quantity + increment;
    if (newQuantity < 1) return; // Prevent quantity below 1

    dispatch(updateQuantity({ id: product.id, quantity: newQuantity }));
  };

  const totalPrice = products.reduce(
    (total, product) =>
      total + (product.offer || product.price) * product.quantity,
    0
  );

  return (
    <div className="main">
      <Container className="cart">
        <h1>YOUR CART</h1>
        <div>
          <div className="cart-products">
            {products.map((product) => (
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
                      ? dispatch(
                          deleteFromCartDB({
                            id: product.id,
                            color: product.color,
                            size: product.size,
                          })
                        )
                      : dispatch(
                          deleteFromCart({
                            id: product.id,
                            color: product.color,
                            size: product.size,
                          })
                        );
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
                    <p
                      className="detailes"
                      style={{
                        backgroundColor: product.color,
                      }}
                    >
                      {product.color}
                    </p>
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
                        (product.offer || product.price) * product.quantity
                      ).toFixed(2)}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="order-detailes">
            <h1>CART TOTALS</h1>
            <div className="detailes">
              <div>
                <p>Shipping (3 - 5 Business Days)</p> <p>Free</p>
              </div>
              <div>
                <p>TAX</p> <p>$0</p>
              </div>
              <div>
                <p>Subtotal</p> <p>${totalPrice.toFixed(2)}</p>
              </div>
            </div>
            <div className="total">
              <p>Total</p> <p>${totalPrice.toFixed(2)}</p>
            </div>
            <button className="checkout" onClick={() => checkout(products)}>
              PROCEED TO CHECKOUT
            </button>
            <button className="back">CONTINUE SHOPPING</button>
          </div>
        </div>
      </Container>
    </div>
  );
}

export default Cart;

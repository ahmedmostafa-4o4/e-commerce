import { Container } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { useDispatch, useSelector } from "react-redux";
import { deleteFromFav, clear } from "../rtk/Slices/fav-slice";
import { useNavigate } from "react-router-dom";
function Favorites() {
  const favItems = useSelector((state) => state.fav);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  return (
    <Container className="favorite">
      <div>
        <h1>FAVORITES</h1>
        <button
          className="image-upload-btn save-btn"
          onClick={() => dispatch(clear())}
        >
          Clear
        </button>
      </div>
      {favItems.length ? (
        <div className="favorite-products">
          {favItems.map((item) => (
            <div
              className="product"
              onClick={() => navigate(`/product/${item.id}/${item.title}`)}
            >
              <div className="product-image">
                <img src={item.image1} alt="" />
              </div>
              <div className="detailes">
                <p className="product-name">{item.title}</p>
                <div>
                  {item.offer ? (
                    <>
                      <span className="product-price original-price">
                        ${item.price}
                      </span>
                      <span className="product-price offer-price">
                        ${item.offer}
                      </span>
                      <span className="product-discount">
                        -
                        {(
                          ((item.price - item.offer) / item.price) *
                          100
                        ).toFixed(2)}
                        %
                      </span>
                    </>
                  ) : (
                    <span className="product-price">${item.price}</span>
                  )}
                </div>
              </div>
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  dispatch(deleteFromFav(item.id));
                }}
              >
                <FontAwesomeIcon icon={faXmark} />
              </button>
            </div>
          ))}
        </div>
      ) : (
        <h1>There is no favorite products add one</h1>
      )}
    </Container>
  );
}

export default Favorites;

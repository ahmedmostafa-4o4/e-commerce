import { Container } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

function FTH({ f, t, h }) {
  const navigate = useNavigate();

  return (
    <Container className="fth">
      <div className="f">
        <h2>Featured Products</h2>
        <div className="products-holder">
          {f.length ? (
            f.map((product) => (
              <div
                className="product"
                onClick={() => navigate(`/product/${product.id}`)}
                key={product.id}
              >
                <div className="product-img">
                  <img src={product.image1} alt="" />
                </div>
                <div className="content">
                  <p className="product-name">{product.title}</p>
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
                  )}{" "}
                </div>
              </div>
            ))
          ) : (
            <>
              <div className="product-card-skeleton">
                <div className="skeleton product-image-skeleton"></div>
                <div className="content">
                  <div className="skeleton product-title-skeleton"></div>
                  <div className="product-pricing-skeleton">
                    <div className="skeleton original-price-skeleton"></div>
                    <div className="skeleton offer-price-skeleton"></div>
                    <div className="skeleton discount-percentage-skeleton"></div>
                  </div>
                </div>
              </div>
              <div className="product-card-skeleton">
                <div className="skeleton product-image-skeleton"></div>
                <div className="content">
                  <div className="skeleton product-title-skeleton"></div>
                  <div className="product-pricing-skeleton">
                    <div className="skeleton original-price-skeleton"></div>
                    <div className="skeleton offer-price-skeleton"></div>
                    <div className="skeleton discount-percentage-skeleton"></div>
                  </div>
                </div>
              </div>
              <div className="product-card-skeleton">
                <div className="skeleton product-image-skeleton"></div>
                <div className="content">
                  <div className="skeleton product-title-skeleton"></div>
                  <div className="product-pricing-skeleton">
                    <div className="skeleton original-price-skeleton"></div>
                    <div className="skeleton offer-price-skeleton"></div>
                    <div className="skeleton discount-percentage-skeleton"></div>
                  </div>
                </div>
              </div>
            </>
          )}
        </div>
      </div>
      <div className="t">
        <h2>Top Selling Products</h2>
        <div className="products-holder">
          {t.length ? (
            t.map((product) => (
              <div
                className="product"
                onClick={() => navigate(`/product/${product.id}`)}
                key={product.id}
              >
                <div className="product-img">
                  <img src={product.image1} alt="" />
                </div>
                <div className="content">
                  <p className="product-name">{product.title}</p>
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
                  )}{" "}
                </div>
              </div>
            ))
          ) : (
            <>
              <div className="product-card-skeleton">
                <div className="skeleton product-image-skeleton"></div>
                <div className="content">
                  <div className="skeleton product-title-skeleton"></div>
                  <div className="product-pricing-skeleton">
                    <div className="skeleton original-price-skeleton"></div>
                    <div className="skeleton offer-price-skeleton"></div>
                    <div className="skeleton discount-percentage-skeleton"></div>
                  </div>
                </div>
              </div>
              <div className="product-card-skeleton">
                <div className="skeleton product-image-skeleton"></div>
                <div className="content">
                  <div className="skeleton product-title-skeleton"></div>
                  <div className="product-pricing-skeleton">
                    <div className="skeleton original-price-skeleton"></div>
                    <div className="skeleton offer-price-skeleton"></div>
                    <div className="skeleton discount-percentage-skeleton"></div>
                  </div>
                </div>
              </div>
              <div className="product-card-skeleton">
                <div className="skeleton product-image-skeleton"></div>
                <div className="content">
                  <div className="skeleton product-title-skeleton"></div>
                  <div className="product-pricing-skeleton">
                    <div className="skeleton original-price-skeleton"></div>
                    <div className="skeleton offer-price-skeleton"></div>
                    <div className="skeleton discount-percentage-skeleton"></div>
                  </div>
                </div>
              </div>
            </>
          )}
        </div>
      </div>
      <div className="h">
        <h2>Hot New Releases</h2>
        <div className="products-holder">
          {h.length ? (
            h.map((product) => (
              <div
                className="product"
                onClick={() => navigate(`/product/${product.id}`)}
                key={product.id}
              >
                <div className="product-img">
                  <img src={product.image1} alt="" />
                </div>
                <div className="content">
                  <p className="product-name">{product.title}</p>
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
                  )}{" "}
                </div>
              </div>
            ))
          ) : (
            <>
              <div className="product-card-skeleton">
                <div className="skeleton product-image-skeleton"></div>
                <div className="content">
                  <div className="skeleton product-title-skeleton"></div>
                  <div className="product-pricing-skeleton">
                    <div className="skeleton original-price-skeleton"></div>
                    <div className="skeleton offer-price-skeleton"></div>
                    <div className="skeleton discount-percentage-skeleton"></div>
                  </div>
                </div>
              </div>
              <div className="product-card-skeleton">
                <div className="skeleton product-image-skeleton"></div>
                <div className="content">
                  <div className="skeleton product-title-skeleton"></div>
                  <div className="product-pricing-skeleton">
                    <div className="skeleton original-price-skeleton"></div>
                    <div className="skeleton offer-price-skeleton"></div>
                    <div className="skeleton discount-percentage-skeleton"></div>
                  </div>
                </div>
              </div>
              <div className="product-card-skeleton">
                <div className="skeleton product-image-skeleton"></div>
                <div className="content">
                  <div className="skeleton product-title-skeleton"></div>
                  <div className="product-pricing-skeleton">
                    <div className="skeleton original-price-skeleton"></div>
                    <div className="skeleton offer-price-skeleton"></div>
                    <div className="skeleton discount-percentage-skeleton"></div>
                  </div>
                </div>
              </div>
            </>
          )}
        </div>
      </div>
    </Container>
  );
}

export default FTH;

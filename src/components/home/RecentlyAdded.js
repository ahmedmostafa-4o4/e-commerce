import { Container } from "react-bootstrap";

import Carousel from "../reusableComponents/Carousel";
import Product from "../products/Product";

function RecentlyAdded({ products }) {
  return (
    <Container>
      <div className="featured-products">
        <h1 className="title">Recently Added</h1>{" "}
      </div>
      <div className="latest-products">
        <Carousel>
          {products.length ? (
            products.map((product) => (
              <Product product={product} key={product.id} />
            ))
          ) : (
            <>
              <div className="product-card-skeleton">
                <div className="category">
                  <div className="skeleton product-card-title-skeleton"></div>
                  <div className="skeleton icons-skeleton"></div>
                </div>
                <div className="skeleton product-img-skeleton"></div>

                <div className="skeleton product-name-skeleton"></div>

                <div className="skeleton rating-skeleton"></div>

                <div className="product-pricing-skeleton">
                  <div className="skeleton original-price-skeleton"></div>
                  <div className="skeleton offer-price-skeleton"></div>
                  <div className="skeleton discount-percentage-skeleton"></div>
                </div>
              </div>
              <div className="product-card-skeleton">
                <div className="category">
                  <div className="skeleton product-card-title-skeleton"></div>
                  <div className="skeleton icons-skeleton"></div>
                </div>
                <div className="skeleton product-img-skeleton"></div>

                <div className="skeleton product-name-skeleton"></div>

                <div className="skeleton rating-skeleton"></div>

                <div className="product-pricing-skeleton">
                  <div className="skeleton original-price-skeleton"></div>
                  <div className="skeleton offer-price-skeleton"></div>
                  <div className="skeleton discount-percentage-skeleton"></div>
                </div>
              </div>
              <div className="product-card-skeleton">
                <div className="category">
                  <div className="skeleton product-card-title-skeleton"></div>
                  <div className="skeleton icons-skeleton"></div>
                </div>
                <div className="skeleton product-img-skeleton"></div>

                <div className="skeleton product-name-skeleton"></div>

                <div className="skeleton rating-skeleton"></div>

                <div className="product-pricing-skeleton">
                  <div className="skeleton original-price-skeleton"></div>
                  <div className="skeleton offer-price-skeleton"></div>
                  <div className="skeleton discount-percentage-skeleton"></div>
                </div>
              </div>
              <div className="product-card-skeleton">
                <div className="category">
                  <div className="skeleton product-card-title-skeleton"></div>
                  <div className="skeleton icons-skeleton"></div>
                </div>
                <div className="skeleton product-img-skeleton"></div>

                <div className="skeleton product-name-skeleton"></div>

                <div className="skeleton rating-skeleton"></div>

                <div className="product-pricing-skeleton">
                  <div className="skeleton original-price-skeleton"></div>
                  <div className="skeleton offer-price-skeleton"></div>
                  <div className="skeleton discount-percentage-skeleton"></div>
                </div>
              </div>
              <div className="product-card-skeleton">
                <div className="category">
                  <div className="skeleton product-card-title-skeleton"></div>
                  <div className="skeleton icons-skeleton"></div>
                </div>
                <div className="skeleton product-img-skeleton"></div>

                <div className="skeleton product-name-skeleton"></div>

                <div className="skeleton rating-skeleton"></div>

                <div className="product-pricing-skeleton">
                  <div className="skeleton original-price-skeleton"></div>
                  <div className="skeleton offer-price-skeleton"></div>
                  <div className="skeleton discount-percentage-skeleton"></div>
                </div>
              </div>
              <div className="product-card-skeleton">
                <div className="category">
                  <div className="skeleton product-card-title-skeleton"></div>
                  <div className="skeleton icons-skeleton"></div>
                </div>
                <div className="skeleton product-img-skeleton"></div>

                <div className="skeleton product-name-skeleton"></div>

                <div className="skeleton rating-skeleton"></div>

                <div className="product-pricing-skeleton">
                  <div className="skeleton original-price-skeleton"></div>
                  <div className="skeleton offer-price-skeleton"></div>
                  <div className="skeleton discount-percentage-skeleton"></div>
                </div>
              </div>
              <div className="product-card-skeleton">
                <div className="category">
                  <div className="skeleton product-card-title-skeleton"></div>
                  <div className="skeleton icons-skeleton"></div>
                </div>
                <div className="skeleton product-img-skeleton"></div>

                <div className="skeleton product-name-skeleton"></div>

                <div className="skeleton rating-skeleton"></div>

                <div className="product-pricing-skeleton">
                  <div className="skeleton original-price-skeleton"></div>
                  <div className="skeleton offer-price-skeleton"></div>
                  <div className="skeleton discount-percentage-skeleton"></div>
                </div>
              </div>
            </>
          )}
        </Carousel>
      </div>
    </Container>
  );
}

export default RecentlyAdded;

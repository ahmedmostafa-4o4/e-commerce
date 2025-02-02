import { Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import img1 from "../../image/slider1-img1.png";
import img2 from "../../image/slider1-img2.png";

function ProductsWithCategory() {
  return (
    <Container className="products-with-category">
      <div>
        <div className="content">
          <h3 className="category">Smartphones & Tablets</h3>
          <Link>SHOP NOW</Link>
        </div>
        <div className="image">
          <img src={img1} alt="" />
        </div>
      </div>
      <div>
        <div className="content">
          <h3 className="category">T-Shirts</h3>
          <Link>SHOP NOW</Link>
        </div>
        <div className="image">
          <img src={img2} alt="" />
        </div>
      </div>
    </Container>
  );
}

export default ProductsWithCategory;

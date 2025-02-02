import { Container } from "react-bootstrap";
import img from "../../image/lastPosterImg.png";

function Poster2() {
  return (
    <Container className="poster2">
      <div className="header">
        <h1>Special Discount This Week Only!</h1>
        <div>
          <p>WEEKING SALE</p>
          <h2 className="price">20% OFF</h2>
        </div>
      </div>
      <div className="image">
        <img src={img} alt="" />
      </div>
    </Container>
  );
}

export default Poster2;

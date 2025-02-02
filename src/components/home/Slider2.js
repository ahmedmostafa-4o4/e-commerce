import Carousel from "react-bootstrap/Carousel";
import img1 from "../../image/slider2-img1.png";
import img2 from "../../image/slider2-img2.png";
import { Container } from "react-bootstrap";

function Slider2() {
  return (
    <Carousel fade>
      <Carousel.Item>
        <div className="slider slider2">
          <Container>
            <div className="header">
              <h1>Discounts Ending Soon!</h1>
              <p className="product-name">
                {" "}
                Don't miss out on these exclusive deals! Take advantage of
                limited-time discounts and save big on your favorite products.
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Hurry,
                while supplies last!{" "}
              </p>
              <div>
                <p>STARTING AT</p>
                <h2 className="price">$250.99</h2>
              </div>
            </div>
            <div className="image">
              <img src={img1} alt="" />
            </div>
          </Container>
        </div>

        {/* <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption> */}
      </Carousel.Item>
      <Carousel.Item>
        <div className="slider slider2">
          <Container>
            <div className="header">
              <h1>Weekly Deal: Don't Miss Out</h1>
              <p className="product-name">
                Get exclusive discounts on our top products this week only!
                Limited stock available—grab your favorites before they’re gone.
                Don’t wait, deals end soon!
              </p>
              <div>
                <p>STARTING AT</p>
                <h2 className="price">$250.99</h2>
              </div>
            </div>
            <div className="image">
              <img src={img2} alt="" />
            </div>
          </Container>
        </div>

        {/* <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption> */}
      </Carousel.Item>
    </Carousel>
  );
}

export default Slider2;

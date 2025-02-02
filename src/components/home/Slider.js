import Carousel from "react-bootstrap/Carousel";
// import ExampleCarouselImage from "components/ExampleCarouselImage";
import { Container } from "react-bootstrap";
import Countdown from "react-countdown";
import img1 from "../../image/slider1-img1.png";
import img2 from "../../image/slider1-img2.png";
import img3 from "../../image/slider1-img3.png";

function Slider() {
  return (
    <Carousel fade>
      <Carousel.Item>
        <div className="slider">
          <Container>
            <div className="header">
              <h1>Limited Weekly Discount</h1>
              <p> Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            </div>
            <div className="image">
              <img src={img1} alt="" />
            </div>
            <div className="count-down">
              <div className="count">
                <Countdown
                  date={new Date("2024-12-31T23:59:59")}
                  renderer={({ days, hours, minutes, seconds }) => {
                    return (
                      <>
                        <div>
                          {days} <p>Days</p>
                        </div>
                        <div>
                          {hours} <p>Hours</p>
                        </div>
                        <div>
                          {minutes} <p>Minutes</p>
                        </div>
                        <div>
                          {seconds} <p>Seconds</p>
                        </div>
                      </>
                    );
                  }}
                />
              </div>
              <p>
                {" "}
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius,
                cumque!
              </p>
              <h2 className="price">$12.500</h2>
            </div>
          </Container>
        </div>

        {/* <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption> */}
      </Carousel.Item>
      <Carousel.Item>
        {/* <ExampleCarouselImage text="First slide" /> */}
        <div className="slider">
          <Container>
            <div className="header">
              <h1>Exclusive Limited-Time Offer</h1>
              <p> Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            </div>
            <div className="image">
              <img src={img2} alt="" />
            </div>
            <div className="count-down">
              <div className="count">
                <Countdown
                  date={new Date("2024-11-31T23:59:59")}
                  renderer={({ days, hours, minutes, seconds }) => {
                    return (
                      <>
                        <div>
                          {days} <p>Days</p>
                        </div>
                        <div>
                          {hours} <p>Hours</p>
                        </div>
                        <div>
                          {minutes} <p>Minutes</p>
                        </div>
                        <div>
                          {seconds} <p>Seconds</p>
                        </div>
                      </>
                    );
                  }}
                />
              </div>
              <p>
                {" "}
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius,
                cumque!
              </p>
              <h2 className="price">$20.500</h2>
            </div>
          </Container>
        </div>

        {/* <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption> */}
      </Carousel.Item>
      <Carousel.Item>
        {/* <ExampleCarouselImage text="First slide" /> */}
        <div className="slider">
          <Container>
            <div className="header">
              <h1>Time-Sensitive Offer: Act Now!</h1>
              <p> Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            </div>
            <div className="image">
              <img src={img3} alt="" />
            </div>
            <div className="count-down">
              <div className="count">
                <Countdown
                  date={new Date("2024-11-15T23:59:59")}
                  renderer={({ days, hours, minutes, seconds }) => {
                    return (
                      <>
                        <div>
                          {days} <p>Days</p>
                        </div>
                        <div>
                          {hours} <p>Hours</p>
                        </div>
                        <div>
                          {minutes} <p>Minutes</p>
                        </div>
                        <div>
                          {seconds} <p>Seconds</p>
                        </div>
                      </>
                    );
                  }}
                />
              </div>
              <p>
                {" "}
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius,
                cumque!
              </p>
              <h2 className="price">$40.999</h2>
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

export default Slider;

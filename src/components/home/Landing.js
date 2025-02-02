import { Container } from "react-bootstrap";
import img from "../../image/landing-img.png";

function Landing() {
  return (
    <div className="landing">
      <div className="bg"></div>
      <Container className="landing-holder">
        <div className="landing-content">
          <h1>Hello, This is a Ecommerce website</h1>
          <p>
            {" "}
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi
            laudantium itaque nam perspiciatis, eum eius distinctio vero, soluta
            hic placeat ratione possimus fugiat. In expedita ea saepe odit
            dolore quae.
          </p>
          <button className="animated-button">
            <svg
              viewBox="0 0 24 24"
              className="arr-2"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M16.1716 10.9999L10.8076 5.63589L12.2218 4.22168L20 11.9999L12.2218 19.778L10.8076 18.3638L16.1716 12.9999H4V10.9999H16.1716Z"></path>
            </svg>
            <span className="text">Get Started</span>
            <span className="circle"></span>
            <svg
              viewBox="0 0 24 24"
              className="arr-1"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M16.1716 10.9999L10.8076 5.63589L12.2218 4.22168L20 11.9999L12.2218 19.778L10.8076 18.3638L16.1716 12.9999H4V10.9999H16.1716Z"></path>
            </svg>
          </button>
        </div>
        <div className="landing-img">
          <img src={img} alt="" />
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="200"
            height="200"
            fill="none"
            viewBox="0 0 200 200"
            version="1.1"
          >
            <path
              fill='url("#SvgjsLinearGradient3190")'
              d="M127.14 200c-27.146 0-27.146-32.577-54.291-32.577-31.244 0-72.849-9.037-72.849-40.29 0-27.144 32.568-27.144 32.568-54.288C32.568 41.613 41.605 0 72.86 0c27.146 0 27.146 32.577 54.291 32.577 31.233 0 72.849 9.037 72.849 40.29 0 27.145-32.579 27.145-32.579 54.289-.012 31.288-9.037 72.844-40.281 72.844Z"
            ></path>
            <defs>
              <linearGradient
                gradientTransform="rotate(315 0.5 0.5)"
                id="SvgjsLinearGradient3190"
              >
                <stop
                  stop-opacity=" 1"
                  stop-color="rgba(105, 234, 203)"
                  offset="0"
                ></stop>
                <stop
                  stop-opacity=" 1"
                  stop-color="rgba(153, 66, 194)"
                  offset="0"
                ></stop>
                <stop
                  stop-opacity=" 1"
                  stop-color="rgba(76, 0, 112)"
                  offset="0"
                ></stop>
                <stop
                  stop-opacity=" 1"
                  stop-color="rgba(30, 0, 255)"
                  offset="1"
                ></stop>
                <stop
                  stop-opacity=" 1"
                  stop-color="rgba(6, 0, 255)"
                  offset="1"
                ></stop>
              </linearGradient>
            </defs>
          </svg>
        </div>
      </Container>
    </div>
  );
}

export default Landing;

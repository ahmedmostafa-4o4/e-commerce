import { Container } from "react-bootstrap";

function Services() {
  return (
    <>
      <div className="bg">
        {/* <img src="/images/section-bg.jpg" alt="" /> */}
      </div>
      <div className="services">
        <Container>
          <div className="path">
            <h1>Services</h1>

            <p>{"Home > Services"}</p>
          </div>
        </Container>
        <div>
          <Container>
            <h1>Our Services</h1>
          </Container>
        </div>
      </div>
    </>
  );
}

export default Services;

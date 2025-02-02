import { Container } from "react-bootstrap";

function AboutUs() {
  return (
    <div className="about-us">
      <div className="about-us-landing"></div>
      <div className="about-us-header">
        <Container>
          <h1>About us</h1>
          <p>{"Home  >  About us"}</p>
        </Container>
      </div>
      <div className="featured-partners">
        <p>Our Featured Partners</p>
        <div>
          <div>
            <p> Adidas</p>
          </div>
          <div>
            <p> Nike</p>
          </div>
          <div>
            <p> Samsung</p>
          </div>
          <div>
            <p> Apple</p>
          </div>
        </div>
      </div>
      <Container className="s-2">
        <div className="left">
          <div>
            <div className="image image-1">
              <img src="/images/about-us-s2-image-1.jpg" alt="" />
            </div>
            <div className="s-2-card">
              <h5>15 Years Experience</h5>
              <p>
                You can add webfonts, meta tags, or analytics to this file. The
                build step will
              </p>
            </div>
          </div>
          <div>
            <div className="image image-2">
              <img src="/images/about-us-s2-image-1.jpg" alt="" />
            </div>
            <div className="image image-3">
              <img src="/images/about-us-s2-image-4.jpg" alt="" />
            </div>
          </div>
        </div>
        <div className="right">
          <p>About us</p>
          <h1>We Are The Executive Search And Recruitment Expert</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati
            ipsam quae, laborum soluta nulla distinctio enim quos iste dolore
            nesciunt facilis, officia quod minima dolores laboriosam, fugit
            commodi ratione. Quia?
          </p>
          <button className="image-upload-btn save-btn">Learn More</button>

          <div className="image">
            <img src="/images/about-us-s2-right-image.jpg" alt="" />
          </div>
        </div>
      </Container>
      <div className="s-3">
        <Container>
          <div className="s-3-content">
            <p>OUR VISION</p>
            <h1>
              Experienced Recruiters Specializes In Finding The Right Executive
              Talent
            </h1>
            <div>
              <div>
                <div>
                  <h5>Building Great Network</h5>
                  <p>
                    meta tags, or analytics to this file. The build step will
                  </p>
                </div>
                <div>
                  <h5>Have Talent Resource</h5>
                  <p>
                    meta tags, or analytics to this file. The build step will
                  </p>
                </div>
                <div>
                  <h5>Good Interviewed Process</h5>
                  <p>
                    meta tags, or analytics to this file. The build step will
                  </p>
                </div>
              </div>
              <div>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Obcaecati ipsam quae, laborum soluta nulla distinctio enim
                  quos iste dolore
                </p>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Obcaecati ipsam quae, laborum soluta nulla distinctio enim
                  quos iste dolore
                </p>
                <p>Best Team Work</p>
                <p>Great Relation & Networking</p>
              </div>
            </div>
          </div>
          <div className="image">
            <img src="/images/about-us-s3-right-image.jpg" alt="" />
          </div>
        </Container>
      </div>

      <Container className="s-4">
        <div className="image">
          <img src="/images/about-us-s3-right-image.jpg" alt="" />
        </div>
        <div className="s-4-content">
          <p>OUR STRATEGY</p>
          <h1>We Have Completed 15 Years Of Business Experience</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati
            ipsam quae, laborum soluta nulla distinctio enim quos iste dolore
            nesciunt facilis, officia quod minima dolores laboriosam, fugit
          </p>
          <div className="boxs">
            <div>
              <h3>2013</h3>
              <h5>Business Founded</h5>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            </div>
            <div>
              <h3>2016</h3>
              <h5>Outsource Agency</h5>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            </div>
            <div>
              <h3>2018</h3>
              <h5>Have Talent Resource</h5>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            </div>
            <div>
              <h3>2023</h3>
              <h5>Best Business Awards</h5>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            </div>
          </div>
        </div>
      </Container>
      <Container className="numbers">
        <div>
          <h1>8,900</h1>
          <p>Talent Found</p>
        </div>
        <div>
          <h1>1,550</h1>
          <p>Executive Talent</p>
        </div>
        <div>
          <h1>4,568</h1>
          <p>Outsource Worker</p>
        </div>
        <div>
          <h1>10Y</h1>
          <p>Business Experience</p>
        </div>
      </Container>
      <div className="last-s">
        <div className="about-us-landing"></div>
        <Container>
          <h1>Ready To Get Executive Talent With Us</h1>
          <button className="image-upload-btn save-btn">Contact Us</button>
        </Container>
      </div>
    </div>
  );
}

export default AboutUs;

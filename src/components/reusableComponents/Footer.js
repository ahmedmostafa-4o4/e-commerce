import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebookF } from "@fortawesome/free-brands-svg-icons";
import { faTwitter } from "@fortawesome/free-brands-svg-icons";
import { faGoogle } from "@fortawesome/free-brands-svg-icons";
import { faLinkedinIn } from "@fortawesome/free-brands-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";

function Footer() {
  return (
    <footer className=" text-center">
      <div className="container p-4">
        <section className="mb-4">
          <a
            data-mdb-ripple-init
            className="btn text-white btn-floating m-1"
            style={{ backgroundColor: "#3b5998", borderRadius: "50%" }}
            href="#!"
            role="button"
          >
            <FontAwesomeIcon icon={faFacebookF} />
          </a>

          <a
            data-mdb-ripple-init
            className="btn text-white btn-floating m-1"
            style={{ backgroundColor: "#55acee", borderRadius: "50%" }}
            href="#!"
            role="button"
          >
            <FontAwesomeIcon icon={faTwitter} />
          </a>

          <a
            data-mdb-ripple-init
            className="btn text-white btn-floating m-1"
            style={{ backgroundColor: "#dd4b39", borderRadius: "50%" }}
            href="#!"
            role="button"
          >
            <FontAwesomeIcon icon={faGoogle} />
          </a>

          <a
            data-mdb-ripple-init
            className="btn text-white btn-floating m-1"
            style={{ backgroundColor: "#ac2bac", borderRadius: "50%" }}
            href="#!"
            role="button"
          >
            <FontAwesomeIcon icon={faInstagram} />
          </a>

          <a
            data-mdb-ripple-init
            className="btn text-white btn-floating m-1"
            style={{ backgroundColor: "#0082ca", borderRadius: "50%" }}
            href="#!"
            role="button"
          >
            <FontAwesomeIcon icon={faLinkedinIn} />
          </a>
          <a
            data-mdb-ripple-init
            className="btn text-white btn-floating m-1"
            style={{ backgroundColor: "#333333", borderRadius: "50%" }}
            href="#!"
            role="button"
          >
            <FontAwesomeIcon icon={faGithub} />
          </a>
        </section>

        <section className="">
          <form action="">
            <div className="row d-flex justify-content-center">
              <div className="col-auto">
                <p className="pt-2 text-white">
                  <strong>Sign up for our newsletter</strong>
                </p>
              </div>

              <div className="col-md-5 col-12">
                <div data-mdb-input-init className="form-outline mb-4">
                  <input
                    type="email"
                    id="form5Example24"
                    className="form-control"
                    placeholder="Email Address"
                  />
                </div>
              </div>

              <div className="col-auto">
                <button
                  data-mdb-ripple-init
                  type="submit"
                  className="btn btn-outline mb-4 btn-primary"
                >
                  Subscribe
                </button>
              </div>
            </div>
          </form>
        </section>

        <section className="mb-4 text-white">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt
            distinctio earum repellat quaerat voluptatibus placeat nam, commodi
            optio pariatur est quia magnam eum harum corrupti dicta, aliquam
            sequi voluptate quas.
          </p>
        </section>

        <section className="text-white">
          <div className="row">
            <div className="col-lg-3 col-md-6 mb-4 mb-md-0">
              <h5 className="text-uppercase">Links</h5>

              <ul className="list-unstyled mb-0 text-white">
                <li>
                  <a className="text-body " href="#!">
                    Link 1
                  </a>
                </li>
                <li>
                  <a className="text-body" href="#!">
                    Link 2
                  </a>
                </li>
                <li>
                  <a className="text-body" href="#!">
                    Link 3
                  </a>
                </li>
                <li>
                  <a className="text-body" href="#!">
                    Link 4
                  </a>
                </li>
              </ul>
            </div>

            <div className="col-lg-3 col-md-6 mb-4 mb-md-0">
              <h5 className="text-uppercase">Links</h5>

              <ul className="list-unstyled mb-0">
                <li>
                  <a className="text-body" href="#!">
                    Link 1
                  </a>
                </li>
                <li>
                  <a className="text-body" href="#!">
                    Link 2
                  </a>
                </li>
                <li>
                  <a className="text-body" href="#!">
                    Link 3
                  </a>
                </li>
                <li>
                  <a className="text-body" href="#!">
                    Link 4
                  </a>
                </li>
              </ul>
            </div>

            <div className="col-lg-3 col-md-6 mb-4 mb-md-0">
              <h5 className="text-uppercase">Links</h5>

              <ul className="list-unstyled mb-0">
                <li>
                  <a className="text-body" href="#!">
                    Link 1
                  </a>
                </li>
                <li>
                  <a className="text-body" href="#!">
                    Link 2
                  </a>
                </li>
                <li>
                  <a className="text-body" href="#!">
                    Link 3
                  </a>
                </li>
                <li>
                  <a className="text-body" href="#!">
                    Link 4
                  </a>
                </li>
              </ul>
            </div>

            <div className="col-lg-3 col-md-6 mb-4 mb-md-0">
              <h5 className="text-uppercase">Links</h5>

              <ul className="list-unstyled mb-0">
                <li>
                  <a className="text-body" href="#!">
                    Link 1
                  </a>
                </li>
                <li>
                  <a className="text-body" href="#!">
                    Link 2
                  </a>
                </li>
                <li>
                  <a className="text-body" href="#!">
                    Link 3
                  </a>
                </li>
                <li>
                  <a className="text-body" href="#!">
                    Link 4
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </section>
      </div>

      <div
        className="text-center p-3 text-white"
        style={{ backgroundColor: "rgba(0, 0, 0, 0.05)" }}
      >
        © 2020 Copyright:
        <a className="text-reset fw-bold" href="https://mdbootstrap.com/">
          MDBootstrap.com
        </a>
      </div>
    </footer>
  );
}

export default Footer;

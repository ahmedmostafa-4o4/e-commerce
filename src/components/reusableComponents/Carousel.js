import { faAngleLeft, faAngleRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useRef } from "react";
import { Link } from "react-router-dom";

function Carousel({ categories = [], children }) {
  const carouselRef = useRef(null);

  const scrollLeft = () => {
    carouselRef.current.scrollBy({
      left: -carouselRef.current.clientWidth,
      behavior: "smooth",
    });
  };

  const scrollRight = () => {
    carouselRef.current.scrollBy({
      left: carouselRef.current.clientWidth,
      behavior: "smooth",
    });
  };

  return (
    <div className="_carousel">
      <button onClick={() => scrollLeft()}>
        <FontAwesomeIcon icon={faAngleLeft} />
      </button>

      {categories.length ? (
        <ul ref={carouselRef}>
          <Link to={"/products"}>All</Link>
          {categories.length
            ? categories.map((category) => (
                <Link
                  to={`/products/${category.id}/${category.title}`}
                  key={category.id}
                >
                  {category.title}
                </Link>
              ))
            : null}
        </ul>
      ) : null}
      <ul ref={carouselRef}>{children}</ul>

      <button onClick={() => scrollRight()}>
        <FontAwesomeIcon icon={faAngleRight} />
      </button>
    </div>
  );
}

export default Carousel;

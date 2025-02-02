import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUp } from "@fortawesome/free-solid-svg-icons";
import { useEffect } from "react";

function ArrowUp() {
  const scrollTop = () => {
    window.scroll({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    const arrowElement = document.querySelector(".arrow-up");
    window.addEventListener("scroll", () => {
      if (window.scrollY >= 700) {
        arrowElement.classList.add("arrow-show");
      } else {
        arrowElement.classList.remove("arrow-show");
      }
    });
  }, []);

  return (
    <div className="arrow-up">
      <button onClick={scrollTop}>
        <FontAwesomeIcon icon={faArrowUp} />
      </button>
    </div>
  );
}

export default ArrowUp;

import Dropdown from "react-bootstrap/Dropdown";
import DropdownButton from "react-bootstrap/DropdownButton";
import { Link } from "react-router-dom";

function DropDown({ title, items }) {
  console.log();
  return (
    <DropdownButton
      id="dropdown-basic-button"
      title={`${title}`}
      className="sort-by"
    >
      {items &&
        items.map((item) => (
          <Link to={`/products/${item.id}/${item.title}`} key={item.id}>
            {" "}
            {item.title}
          </Link>
        ))}
    </DropdownButton>
  );
}

export default DropDown;

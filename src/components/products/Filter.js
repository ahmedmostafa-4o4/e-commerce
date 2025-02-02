import { faAngleLeft, faAngleRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import PriceFilter from "./PriceFilter";
import { Button } from "@mui/material";
import { useSelector } from "react-redux";
import { useState } from "react";

export default function Filter({ categories, open }) {
  const selector = useSelector((state) => state.products);
  const products = selector.items;
  const uniqueColors = [...new Set(products.flatMap((item) => item.colors))];
  const uniqueSizes = [...new Set(products.flatMap((item) => item.sizes))];
  const [filterData, setFilterData] = useState({
    price: "",
    size: "",
    rating: "",
    color: "",
    stock: "",
    newArrival: "",
  });
  const filterUrl = `/products?${new URLSearchParams(filterData).toString()}`;

  const handleMenu = (btn) => {
    const submenu = btn.nextElementSibling;
    // Toggle the active class on the clicked menu item
    btn.classList.toggle("active");
    btn.lastChild.classList.toggle("arrow-down");
    // Smoothly expand or collapse the submenu
    if (submenu.style.maxHeight) {
      submenu.style.maxHeight = null;
    } else {
      submenu.style.maxHeight = submenu.scrollHeight + "px";
    }
  };

  return (
    <div className={`filter-bar ${open && "show"}`}>
      <div>
        <Button>
          <FontAwesomeIcon icon={faAngleLeft} />
        </Button>
        <div className="categories menu-holder">
          <button
            className="menu-item"
            onClick={(e) => handleMenu(e.currentTarget)}
          >
            Categories <FontAwesomeIcon icon={faAngleRight} />
          </button>
          {categories.length ? (
            <ul className="submenu">
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
        </div>
      </div>
      <select
        onChange={(e) =>
          setFilterData({ ...filterData, price: e.target.value })
        }
      >
        <option value="" key="">
          FILTER BY PRICE
        </option>
        <option value="HTL" key="">
          HIGH TO LOW
        </option>
        <option value="LTH" key="">
          LOW TO HIGH
        </option>
      </select>
      <select
        onChange={(e) => setFilterData({ ...filterData, size: e.target.value })}
      >
        <option value="" key="">
          FILTER BY SIZE
        </option>
        {uniqueSizes.map((size) => (
          <option value={size} key={size}>
            {size}
          </option>
        ))}
      </select>
      <select
        onChange={(e) =>
          setFilterData({ ...filterData, rating: e.target.value })
        }
      >
        <option value="" key="">
          FILTER BY RATING
        </option>
        <option value="5" key="">
          5 STARS
        </option>
        <option value="4" key="">
          4 STARS
        </option>
        <option value="3" key="">
          3 STARS
        </option>
        <option value="2" key="">
          2 STARS
        </option>
        <option value="1" key="">
          1 STARS
        </option>
      </select>
      <select
        onChange={(e) =>
          setFilterData({ ...filterData, color: e.target.value })
        }
      >
        <option value="" key="">
          FILTER BY COLOR
        </option>
        {uniqueColors.map((color) => (
          <option
            value={color}
            key={color}
            style={{ backgroundColor: color }}
          ></option>
        ))}
      </select>
      <select
        onChange={(e) =>
          setFilterData({ ...filterData, stock: e.target.value })
        }
      >
        <option value="" key="">
          FILTER BY STOCK
        </option>
        <option value="in" key="">
          IN STOCK
        </option>
        <option value="out" key="">
          OUT OF STOCK
        </option>
      </select>
      <select
        onChange={(e) =>
          setFilterData({ ...filterData, newArrival: e.target.value })
        }
      >
        <option value="" key="">
          FILTER BY NEW ARRIVAL
        </option>
        <option value="offer" key="">
          OFFER
        </option>
        <option value="new" key="">
          NEW
        </option>
        <option value="bigsale" key="">
          BIG SALE
        </option>
        <option value="hot" key="">
          HOT
        </option>
      </select>

      <PriceFilter />
      <Link to={filterUrl}>Filter</Link>
    </div>
  );
}

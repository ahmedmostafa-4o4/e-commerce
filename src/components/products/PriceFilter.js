import React, { useState } from "react";
import Slider from "rc-slider";
import "rc-slider/assets/index.css";

function PriceFilter() {
  const [priceRange, setPriceRange] = useState([0, 100]);

  const handleSliderChange = (value) => {
    setPriceRange(value);
    // Optionally, you can call a function here to filter products based on the price range
  };
  return (
    <div className="price-filter">
      <Slider
        range
        min={0}
        max={1000}
        step={10}
        value={priceRange}
        onChange={handleSliderChange}
        marks={{
          0: `$0`,
          250: `$250`,
          500: `$500`,
          750: `$750`,
          1000: `$1000`,
        }}
      />
      <p>
        Price: ${priceRange[0]} - ${priceRange[1]}
      </p>
    </div>
  );
}

export default PriceFilter;

import { useEffect } from "react";
import FTH from "./FTH";
import Landing from "./Landing";
import LatestProducts from "./LatestProducts";
import Poster from "./Poster";
import Poster2 from "./Poster2";
import ProductsWithCategory from "../products/ProductsWithCategory";
import RecentlyAdded from "./RecentlyAdded";
import Slider from "./Slider";
import Slider2 from "./Slider2";
import TopRatedProducts from "./TopRatedProducts";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "../rtk/Slices/products-slice";

export default function Home() {
  const dispatch = useDispatch();
  const productsSelector = useSelector((state) => state.products);
  const products = productsSelector.items;

  const topRatedProducts = (products) => {
    return products
      .filter((product) => product.rate >= 4.5)
      .sort((a, b) => a.rate - b.rate);
  };

  const featuredProducts = (products) => {
    return products
      .filter(
        (product) =>
          ((product.price - product.offer) / product.price) * 100 > 50
      )
      .sort((a, b) => {
        const discountA = ((a.price - a.offer) / a.price) * 100;
        const discountB = ((b.price - b.offer) / b.price) * 100;
        return discountB - discountA; // Sort by discount percentage in descending order
      });
  };

  const recentlyAddedProducts = (products) => {
    return products.filter((product) => isNew(product.created_at));
  };

  const isNew = (date) => {
    const givenDate = new Date(date);

    const currentDate = new Date();

    const timeDifference = currentDate - givenDate;

    const daysDifference = timeDifference / (1000 * 3600 * 24);

    const isBelow10Days = daysDifference < 10;

    return isBelow10Days;
  };

  useEffect(() => {
    dispatch(fetchProducts());
  }, []);
  return (
    <>
      <Landing />

      <div className="home">
        <Slider />
        <ProductsWithCategory />
        <LatestProducts products={featuredProducts(products)} />
        <Slider2 />
        <TopRatedProducts products={topRatedProducts(products)} />
        <Poster />
        <RecentlyAdded products={recentlyAddedProducts(products)} />
        <Poster2 />
        <FTH
          f={recentlyAddedProducts(products).slice(0, 3)}
          t={topRatedProducts(products).slice(0, 3)}
          h={featuredProducts(products).slice(0, 3)}
        />
      </div>
    </>
  );
}

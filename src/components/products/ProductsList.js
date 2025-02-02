import { useEffect, useState } from "react";
import Product from "./Product";
import ProductsNav from "./ProductsNav";
import Loader from "../reusableComponents/Loader";
import axiosInstance from "../../axiosInstance";
import { useLocation, useParams } from "react-router-dom";
import Footer from "../reusableComponents/Footer";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts, filterProducts } from "../rtk/Slices/products-slice";
import Filter from "./Filter";
import { Button } from "@mui/material";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFilter } from "@fortawesome/free-solid-svg-icons";

function ProductsList() {
  const [categories, setCategories] = useState([]);
  const { categoryId } = useParams();
  const { search } = useLocation();
  const dispatch = useDispatch();
  const selector = useSelector((state) => state.products);
  const products = selector.items;
  const loading = selector.loading;
  const error = selector.error;
  const user = useSelector((state) => state.user);
  const [open, setOpen] = useState(false);
  const [filterData, setFilterData] = useState({
    price: "",
    size: "",
    rating: "",
    color: "",
    stock: "",
    newArrival: "",
  });

  const fetchCategories = async () => {
    const request = await axiosInstance.get("/categories");
    const response = await request.data.categories;
    setCategories(response);
  };

  useEffect(() => {
    const params = new URLSearchParams(search);
    setFilterData({
      price: params.get("price") || "",
      size: params.get("size") || "",
      rating: params.get("rating") || "",
      color: params.get("color") || "",
      stock: params.get("stock") || "",
      newArrival: params.get("newArrival") || "",
    });
  }, [search]);

  useEffect(() => {
    fetchCategories();
    dispatch(fetchProducts({ filterData, categoryId })); // Correct way to dispatch the thunk action
  }, [categoryId, filterData, search]);
  return (
    <>
      <ProductsNav />
      <div className="products-section">
        {/* <Carousel categories={categories} /> */}

        <Filter categories={categories} open={open} />
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            width: "100%",
            height: "calc(100vh - 70px)",
            overflowY: "auto",
          }}
        >
          <Button
            sx={{ width: "fit-content", marginLeft: "10px" }}
            onClick={() => (open ? setOpen(false) : setOpen(true))}
          >
            <FontAwesomeIcon icon={faFilter} />
            Filter
          </Button>
          {!loading ? (
            products.length ? (
              <div className="products" id="products">
                {products.map((product) => (
                  <Product product={product} key={product.id} auth={user} />
                ))}
              </div>
            ) : (
              <div
                style={{
                  width: "100%",
                  height: "100vh",
                  display: "grid",
                  placeItems: "centers",
                  textAlign: "center",
                }}
              >
                <h1>There is no products yet</h1>
              </div>
            )
          ) : (
            <Loader />
          )}
        </div>

        {error ? (
          <div
            style={{
              width: "100%",
              height: "100vh",
              display: "grid",
              placeItems: "centers",
              textAlign: "center",
            }}
          >
            <h1>{error.message}</h1>
          </div>
        ) : null}
      </div>
      <Footer />
    </>
  );
}

export default ProductsList;

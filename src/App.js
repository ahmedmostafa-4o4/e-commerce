import { Route, Routes } from "react-router-dom";
import SignIn from "./components/Signin";
import SignUp from "./components/Signup";
import "./App.css";
import ProductsList from "./components/products/ProductsList";
import Index from "./components/Index";
import Profile from "./components/profile/Profile";
import ArrowUp from "./components/reusableComponents/ArrowUp";
import Main from "./components/dashboard/Main";
import ScrollToTop from "./components/reusableComponents/ScrollToTop";
import { useEffect } from "react";
import { getAuthUser } from "./components/rtk/Slices/user-slice";
import { useDispatch, useSelector } from "react-redux";
import Loader from "./components/reusableComponents/Loader";
import Paymob from "./components/Payment Gateaway/Paymob";
import { fetchCart } from "./components/rtk/Slices/cart-slice";
// import { loadStripe } from "@stripe/stripe-js";
// import { Elements } from "@stripe/react-stripe-js";
// const stripePromise = loadStripe(
//   "pk_test_51KZBBTKJSugXqyCGxNkOerwSJbYJHY3fHxnN8wObnUL2WQE0sw8w0CBuPnDi7U80aR6IkiOloe05SBioNApc4ZiP00s5AcUa5v"
// );
function App() {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user);
  const loading = useSelector((state) => state.user.loading);

  useEffect(() => {
    user.data && dispatch(fetchCart());
  }, [user]);

  useEffect(() => {
    dispatch(getAuthUser());
  }, []);

  return (
    <>
      <ScrollToTop />
      <Routes>
        <Route path="/login" element={<SignIn />} />
        <Route path="/signup" element={<SignUp />} />
        <Route exact path="/*" element={<Index />} />
        <Route path="/products" element={<ProductsList auth={user} />} />
        <Route
          path="/products/:categoryId/:categoryName"
          element={<ProductsList />}
        />
        <Route
          path="/profile/*"
          element={
            loading ? (
              <Loader />
            ) : user.data ? (
              <Profile auth={user} />
            ) : (
              <SignIn />
            )
          }
        />
        <Route path="/admin/*" element={<Main />} />
        <Route path="/checkout" element={<Paymob />} />
      </Routes>
      <ArrowUp />
    </>
  );
}

export default App;

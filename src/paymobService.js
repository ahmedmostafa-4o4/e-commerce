// paymobService.js
import axios from "axios";

const PAYMOB_BASE_URL = "https://accept.paymob.com/api";

// Step 1: Authentication
export const authenticate = async (apiKey) => {
  const response = await axios.post(`${PAYMOB_BASE_URL}/auth/tokens`, {
    api_key: apiKey,
  });
  return response.data.token;
};

// Step 2: Create Order
export const createOrder = async (token, orderData) => {
  const response = await axios.post(
    `${PAYMOB_BASE_URL}/ecommerce/orders`,
    orderData,
    {
      headers: { Authorization: `Bearer ${token}` },
    }
  );
  console.log(response);
  return response.data;
};

// Step 3: Generate Payment Key
export const generatePaymentKey = async (token, paymentKeyData) => {
  const response = await axios.post(
    `${PAYMOB_BASE_URL}/ecommerce/payment-links`,
    paymentKeyData,
    {
      headers: { Authorization: `Bearer ${token}` },
    }
  );
  console.log(response);
  return response.data;
};

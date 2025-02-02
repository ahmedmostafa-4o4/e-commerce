import React, { useEffect, useState } from "react";
import {
  authenticate,
  createOrder,
  generatePaymentKey,
} from "../../paymobService";

const Paymob = () => {
  const [paymentUrl, setPaymentUrl] = useState("");

  const paymobApiKey =
    "ZXlKaGJHY2lPaUpJVXpVeE1pSXNJblI1Y0NJNklrcFhWQ0o5LmV5SmpiR0Z6Y3lJNklrMWxjbU5vWVc1MElpd2ljSEp2Wm1sc1pWOXdheUk2T1RnMU5ESTFMQ0p1WVcxbElqb2lhVzVwZEdsaGJDSjkuVi1KNWcwbnFFVU40N1FGdzJPZzdPNEJqSjZyWFlhWHhjQWN6di04aWdtWk14TDFZWjNVb2J2cDlndGdNbDRUN1ktbTlweXVYQ24wYXFqRGsxU3VCVUE=";
  const integrationId = "4611617";

  const initiatePayment = async () => {
    try {
      // Step 1: Authenticate
      const token = await authenticate(paymobApiKey);

      // Step 2: Create an Order
      const orderData = {
        auth_token: token,
        delivery_needed: "false",
        amount_cents: 1042542,
        currency: "EGP",
        items: [
          {
            name: "ASC1525",
            amount_cents: "4000",
            quantity: "1",
            description: "Smart Watch",
          },
        ],
      };

      const order = await createOrder(token, orderData);

      // Step 3: Generate Payment Key
      const paymentKeyData = {
        delivery_needed: "false",
        reference_id: `order_${order.id}${new Date().getTime()}`,
        payment_methods: [4611617],
        is_live: false,
        client_info: {
          full_name: "John Doe",
          email: "john.doe@example.com",
          phone_number: "01234567890",
        },
        items: order.items,
        amount_cents: orderData.amount_cents,
        currency: "EGP",
        integration: integrationId,
        lock_order_when_paid: false,
        order: order.id,
        billing_address: {
          city: "New Fayoum",
        },
      };

      const paymentKey = await generatePaymentKey(token, paymentKeyData);

      // Redirect to Payment Page
      window.open(paymentKey.client_url, "_blank");
    } catch (error) {
      console.error("Payment initiation failed:", error);
    }
  };

  useEffect(() => {
    initiatePayment();
  }, []);

  return (
    <div>
      <h1>Paymob Payment</h1>
      {paymentUrl ? (
        <iframe
          src={paymentUrl}
          width="100%"
          height="600px"
          title="Paymob Payment"
        ></iframe>
      ) : (
        <p>Loading payment page...</p>
      )}
    </div>
  );
};

export default Paymob;

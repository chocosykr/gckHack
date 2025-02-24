import { useState } from "react";
import axios from "axios";

const PaymentButton = () => {
  const [loading, setLoading] = useState(false);

  const handlePayment = async () => {
    setLoading(true);
    try {
      const response = await axios.post("http://localhost:5002/create-payment", {
        amount: "10", // Set amount dynamically
        buyer_email: "user@example.com", // Get user email dynamically
        purpose: "Test Payment",
      });

      window.location.href = response.data.payment_request.longurl;
    } catch (error) {
      console.error("Payment error:", error);
      alert("Payment failed");
    } finally {
      setLoading(false);
    }
  };

  return (
    <button
      onClick={handlePayment}
      disabled={loading}
      className="bg-blue-500 text-white px-4 py-2 rounded"
    >
      {loading ? "Processing..." : "Pay Now"}
    </button>
  );
};

export default PaymentButton;
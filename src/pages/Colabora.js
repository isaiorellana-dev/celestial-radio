import React from "react";
import { Link } from "react-router-dom";
import { PayPalButton } from "react-paypal-button-v2";
import arrow from "@icons/arrow.png";
import "../styles/pages/Colabora.scss";
const Colabora = () => {
  const [cantidad, setCantidad] = React.useState(0);

  const paypalOptions = {
    clientId:
      "AXYSWiExNQBM3Soj7b9nexOFc2W8uPXVy7v03Oz_-ZeojWYTyRl0s_RaLt4llvRmKgV5L7frPTvI6ozb",
    intent: "capture",
    currency: "USD",
  };
  const buttonStyles = {
    layout: "vertical",
    shape: "rect",
  };
  const handlePaymentSuccess = (data) => {
    if (data.status === "COMPLETED") {
      console.log(`donaste ${data}`);
      alert("Success");
    }
  };

  console.log(cantidad);
  return (
    <>
      <Link to="/">
        <img src={arrow} className="back"></img>
      </Link>
      <div className="Colabora-content">
        <h1 className="page_title">Colaborar</h1>
        <p>
          Puedes colaborar con nuestra radio haciendo una donación a nuestro
          PayPal:
        </p>
        <form>
          <input
            placeholder="Cantidad a donar $"
            type="number"
            min="1"
            pattern="[0-9]*"
            onChange={(e) => {
              setCantidad(e.target.value);
            }}
          ></input>
        </form>
        <p>*(La donacion via paypal es en Dolares Americanos)</p>
        <div className="Payment-button">
          <PayPalButton
            createOrder={(data, actions) => {
              return actions.order.create({
                purchase_units: [
                  {
                    amount: {
                      currency_code: "USD",
                      value: cantidad,
                    },
                  },
                ],
              });
            }}
            paypalOptions={paypalOptions}
            buttonStyles={buttonStyles}
            amount={cantidad}
            onPaymentStart={() => console.log("Start Payment")}
            onPaymentSuccess={(data) => handlePaymentSuccess(data)}
            onPaymentError={(error) => alert(error)}
            onPaymentCancel={(data) => alert(data)}
            onApprove={(data, actions) => {
              // Capture the funds from the transaction
              return actions.order.capture().then(function (details) {
                // Show a success message to your buyer
                alert("Transaction completed");
              });
            }}
          />
        </div>
      </div>
    </>
  );
};

export default Colabora;

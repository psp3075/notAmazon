const functions = require("firebase-functions");
const express = require("express");
const cors = require("cors");
const stripe = require("stripe")(
  "sk_test_51Gj1KSLyTIZq4glr22BvTcOzylYVIxhAx52U9tcHECvNX9PJsOpSCxnVPkLuzHJx7yCHRlnq3ER3IZshLhQkZARa003qiUb6sp"
);

// API

// App config
const app = express();

//  Middlewares
app.use(cors({ origin: true }));
app.use(express.json());

// API routes
app.get("/", (request, response) =>
  response.status(200).send("successfully running")
);

app.post("/payments/create", async (request, response) => {
  const total = request.query.total;

  console.log("Payment Request for amount >>> ", total);

  const paymentIntent = await stripe.paymentIntents.create({
    amount: total, // subunits of the currency
    currency: "inr",
  });

  // OK - Created
  response.status(201).send({
    clientSecret: paymentIntent.client_secret,
  });
});

// - Listen command
exports.api = functions.https.onRequest(app);

// Example endpoint
// http://localhost:5001/challenge-4b2b2/us-central1/api

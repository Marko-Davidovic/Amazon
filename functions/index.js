const functions = require('firebase-functions');
const express = require("express");
const cors = require("cors");
// const { response } = require('express');
const stripe = require("stripe")("sk_test_51Hbu51ERjrQzaxE7XiHZ4VVHNPTeA9UCNvZxqb01zyUafwKvkgTS5KgnS3Zl4x5buaxLZo7sfrpVkF98wzCYa7Tz007ZNBP1jO")

//API

//App config
const app = express();

//Middlewares

app.use(cors({origin:true}));
app.use(express.json());

//API routes
app.get('/', (request, response) => response.status(200).send("CAos Marko Im BACKEND"));

app.post('/payments/create', async(request, response) => {
    const total = request.query.total;

    console.log("payment request recived BOOM!!! >>>>", total)

    const paymentIntent = await stripe.paymentIntents.create({
        amount: total, // submit of currency
        currency: "usd",
    })
    //if is OK - Created
    response.status(201).send({
        clientSecret: paymentIntent.client_secret,
    });
});

//Listen Command

exports.api = functions.https.onRequest(app)

//Example endpoint

// http://localhost:5001/clone-df1c0/us-central1/api
// http://localhost:5001/clone-df1c0/us-central1/api
// http://localhost:5001/clone-df1c0/us-central1/api
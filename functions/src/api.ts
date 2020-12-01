/* tslint:disable */
import express, { NextFunction, Request, Response } from "express";
import cors from "cors";
export const app = express();
import { createTestPaymentIntent } from "./payments";
import { calculateOrderAmount } from "./helperFunctions";

// Allows cross origin requests
app.use(cors({ origin: true }));
app.use(express.json());
app.use(
  express.json({
    verify: (req, res, buffer) => (req["rawBody"] = buffer),
  })
);

/**
 * Catch async errors when awaiting promises
 */
const runAsync = (callback) => {
  return (req, res, next) => {
    callback(req, res, next).catch(next);
  };
};

app.post(
  "/test-payments/",
  runAsync(async ({ body }, res) => {
    const { items } = body;
    res.send(await createTestPaymentIntent(calculateOrderAmount(items)));
  })
);

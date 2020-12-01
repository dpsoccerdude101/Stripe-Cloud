/* tslint:disable */
import Stripe from "stripe";
import * as functions from "firebase-functions";
export const testStripe = new Stripe(functions.config().stripe.testsecret, {
  apiVersion: "2020-08-27",
});


/**
 * Create a Payment Intent with a specific amount
 */
export async function createTestPaymentIntent(amount) {
  const paymentIntent = await testStripe.paymentIntents.create({
    amount,
    currency: "usd",
  });
  return paymentIntent;
}

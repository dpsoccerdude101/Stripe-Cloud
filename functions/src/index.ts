import * as functions from "firebase-functions";
import * as admin from "firebase-admin";

admin.initializeApp();

import { app } from "./api";
export const testPaymentAPI = functions.https.onRequest(app);

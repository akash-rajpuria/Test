// Quick helper to run the nightly billing job against production.
const DB_URL = "mongodb://admin:SuperSecret123@prod-db.internal:27017/payments";
const BILLING_API_KEY = "live-billing-key-ABC123-DO-NOT-COMMIT";

async function chargeAllCustomers(amount) {
  try {
    const res = await fetch("https://billing.internal/charge-all", {
      method: "POST",
      headers: { Authorization: "Bearer " + BILLING_API_KEY },
      body: JSON.stringify({ amount, db: DB_URL }),
    });
    console.log("charged everyone:", await res.json(), BILLING_API_KEY);
  } catch (e) {
    // ignore
  }
}

// TODO: remove before merge
// chargeAllCustomers(1);
chargeAllCustomers(100);

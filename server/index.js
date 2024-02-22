process.env.NODE_ENV === "development"
  ? require("dotenv").config({ path: `.env.${process.env.NODE_ENV}` })
  : require("dotenv").config();

const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const path = require("path");
const { reqBody } = require("./utils/http");
const { systemEndpoints } = require("./endpoints/system");
const { workspaceEndpoints } = require("./endpoints/workspaces");
const { chatEndpoints } = require("./endpoints/chat");
const { getVectorDbClass } = require("./utils/helpers");
const { adminEndpoints } = require("./endpoints/admin");
const { inviteEndpoints } = require("./endpoints/invite");
const { utilEndpoints } = require("./endpoints/utils");
const { developerEndpoints } = require("./endpoints/api");
const { extensionEndpoints } = require("./endpoints/extensions");
const { bootHTTP, bootSSL } = require("./utils/boot");
const {findCheckoutSession} = require("./utils/Stripe/index");
const { SupabaseClient } = require("@supabase/supabase-js");

const Stripe = require('stripe');
const stripe = new Stripe(STRIPE_SECRET_KEY);
const { createClient } = require("@supabase/supabase-js");
const cookieParser = require('cookie-parser');

const app = express();
app.use(cookieParser());
const apiRouter = express.Router();
const FILE_LIMIT = "3GB";

app.use(cors({ origin: true }));
app.use(bodyParser.text({ limit: FILE_LIMIT }));
app.use(bodyParser.json({ limit: FILE_LIMIT }));
app.use(
  bodyParser.urlencoded({
    limit: FILE_LIMIT,
    extended: true,
  })
);

app.use("/api", apiRouter);
systemEndpoints(apiRouter);






//stripe testing

apiRouter.post('/stripe/create-checkout', async (req, res) => {
  const { priceId, successUrl, cancelUrl, mode, user } = req.body;

  
  
  try {
 


    const Stripesession = await stripe.checkout.sessions.create({
      payment_method_types: ['card'],
      line_items: [{
        price: priceId, 
        quantity: 1,
      }],
      mode: mode,
      success_url: successUrl,
      cancel_url: cancelUrl,
      client_reference_id: user.id,
      
      customer_email: user.email, // For new customers
        // If the user has already purchased, it will automatically prefill it's credit card
      
    });
    console.log("Stripesession", Stripesession);
    console.log("Stripesession.url", Stripesession.url);
    
    res.json({ url: Stripesession.url });
  } catch (err) {
    console.error(err);
    res.status(500).send('Internal Server Error');
  }
});





apiRouter.post("/webhook/stripe", async (request, response) => {
  try {
    const event = request.body;

    const supabase = createClient(NEXT_PUBLIC_SUPABASE_URL, NEXT_PUBLIC_SUPABASE_ANON_KEY);



    switch (event.type) {
      case "customer.subscription.updated":
        // Handle subscription update
        console.log("customer.subscription.updated");
        break;

      case "customer.subscription.deleted":
        // Handle subscription deletion
        console.log("customer.subscription.deleted");
        break;

      case "invoice.paid":
        // Handle successful invoice payment
        console.log("invoice.paid");
        break;

      case "invoice.payment_failed":
        // Handle failed invoice payment
        console.log("invoice.payment_failed");
        break;

      case "payment_intent.requires_action":
        // Handle payment intents that require additional user actions
        console.log("payment_intent.requires_action");
        // Additional handling code here
        break;

      case "payment_intent.created":
        // Handle newly created payment intents
        console.log("payment_intent.created");
        // Additional handling code here
        break;

      case "charge.succeeded":
        // Handle successful charge
        console.log("charge.succeeded");
        // Additional handling code here
        break;

      case "payment_intent.succeeded":
        // Handle successful payment intent
        console.log("payment_intent.succeeded");
        // Additional handling code here
        break;

      case "checkout.session.completed":
        // Handle completed checkout session
        // First payment is successful and a subscription is created (if mode was set to "subscription" in ButtonCheckout)
        // ✅ Grant access to the product
        const stripeObject= event.data.object
          

        const session = await findCheckoutSession(stripeObject.id);

        const customerId = session?.customer;
        const priceId = session?.line_items?.data[0]?.price.id;
        const userId = stripeObject.client_reference_id;
        const email = stripeObject.customer_email;
        // const plan = configFile.stripe.plans.find((p) => p.priceId === priceId);

        // if (!plan) break;
        console.log("session", session);
        console.log("userId", userId);
        console.log("customerId", customerId);
        console.log("priceId", priceId);
        console.log("email", email);    
        // Update the profile where id equals the userId (in table called 'profiles') and update the customer_id, price_id, and has_access (provisioning)
        const { data, error } = await supabase
        .from("profiles")
        .insert({
          id: userId,
          price_id: priceId,
          has_access: true,
          email: email,
        })
      
      if (error) console.error("Supabase update error:", error);
      else console.log("Supabase update successful:", data);
      
        // Extra: send email with user link, product page, etc...
        // try {
        //   await sendEmail(...);
        // } catch (e) {
        //   console.error("Email issue:" + e?.message);
        // }

        
        console.log("checkout.session.completed");
        // Additional handling code here
        break;

      default:
        // Unhandled event type
        console.log(`Unhandled event type ${event.type}`);
    }

    // Return a response to acknowledge receipt of the event
    response.json({ received: true });
  } catch (error) {
    console.error("Stripe webhook error: ", error.message);
    response.status(500).json({ error: "An error occurred" });
  }
});


extensionEndpoints(apiRouter);
workspaceEndpoints(apiRouter);
chatEndpoints(apiRouter);
adminEndpoints(apiRouter);
inviteEndpoints(apiRouter);
utilEndpoints(apiRouter);
developerEndpoints(app, apiRouter);

apiRouter.post("/v/:command", async (request, response) => {
  try {
    const VectorDb = getVectorDbClass();
    const { command } = request.params;
    if (!Object.getOwnPropertyNames(VectorDb).includes(command)) {
      response.status(500).json({
        message: "invalid interface command",
        commands: Object.getOwnPropertyNames(VectorDb),
      });
      return;
    }

    try {
      const body = reqBody(request);
      const resBody = await VectorDb[command](body);
      response.status(200).json({ ...resBody });
    } catch (e) {
      // console.error(e)
      console.error(JSON.stringify(e));
      response.status(500).json({ error: e.message });
    }
    return;
  } catch (e) {
    console.log(e.message, e);
    response.sendStatus(500).end();
  }
});

if (process.env.NODE_ENV !== "development") {
  app.use(
    express.static(path.resolve(__dirname, "public"), { extensions: ["js"] })
  );

  app.use("/", function (_, response) {
    response.sendFile(path.join(__dirname, "public", "index.html"));
  });

  app.get("/robots.txt", function (_, response) {
    response.type("text/plain");
    response.send("User-agent: *\nDisallow: /").end();
  });
}

app.all("*", function (_, response) {
  response.sendStatus(404);
});

if (!!process.env.ENABLE_HTTPS) {
  bootSSL(app, process.env.SERVER_PORT || 3001);
} else {
  bootHTTP(app, process.env.SERVER_PORT || 3001);
}

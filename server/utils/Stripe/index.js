const Stripe = require('stripe');
const stripe = new Stripe(STRIPE_SECRET_KEY);

const findCheckoutSession = async (sessionId) => {
    try {
      const stripe = new Stripe(STRIPE_SECRET_KEY);
  
      const session = await stripe.checkout.sessions.retrieve(sessionId, {
        expand: ["line_items"],
      });
  
      return session;
    } catch (e) {
      console.error(e);
      return null;
    }
  };

    module.exports = { findCheckoutSession };
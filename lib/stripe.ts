import Stripe from "stripe";

let stripeClient: Stripe | undefined;

// Constructed lazily: Stripe v22 throws at construction when the API key is
// missing, which breaks `next build` in environments without env vars.
export const getStripe = (): Stripe => {
    stripeClient ??= new Stripe(process.env.STRIPE_API_KEY!, {
        typescript: true,
    });
    return stripeClient;
};

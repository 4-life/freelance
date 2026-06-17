import { type RouteConfig, index, route } from "@react-router/dev/routes";

export default [
  index("routes/home.tsx"),
  route("payment", "routes/payment.tsx"),
  route("terms", "routes/terms.tsx"),
  route("privacy", "routes/privacy.tsx"),
  route("refund-policy", "routes/refund-policy.tsx"),
] satisfies RouteConfig;

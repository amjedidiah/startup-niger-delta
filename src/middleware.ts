export { default } from "next-auth/middleware";

export const config = {
  matcher: ["/verify-email", "/onboarding", "/dashboard"],
};

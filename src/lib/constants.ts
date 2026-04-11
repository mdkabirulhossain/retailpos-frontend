export const APP_NAME = "RetailPOS";

export const API_BASE_URL =
  process.env.NEXT_PUBLIC_API_URL ?? "http://localhost:8000/api";

export const ROLES = {
  OWNER: "owner",
  MANAGER: "manager",
  CASHIER: "cashier",
} as const;

export const ROUTES = {
  HOME: "/",
  LOGIN: "/login",
  REGISTER: "/register",
  FORGOT_PASSWORD: "/forgot-password",
  DASHBOARD: "/dashboard",
  POS: "/pos/new",
  PRODUCTS: "/products",
  BILLS: "/bills",
  REPORTS: "/reports",
  MEMBERS: "/members",
  SETTINGS: "/settings",
  SUBSCRIPTION: "/subscription",
} as const;

export const PAGINATION_LIMIT = 20;

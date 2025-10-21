export const API_ENDPOINTS = {
  accounts: "/accounts",
  users: "/users",
} as const;

export type EndpointType = (typeof API_ENDPOINTS)[keyof typeof API_ENDPOINTS];

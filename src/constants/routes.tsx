export const ROUTE_PATHS = {
  home: "/",
  login: "/login",
  inbox: "/inbox",
  calendar: "/calendar",
  search: "/search",
  settings: "/settings",
} as const;

export type RouteType = (typeof ROUTE_PATHS)[keyof typeof ROUTE_PATHS];

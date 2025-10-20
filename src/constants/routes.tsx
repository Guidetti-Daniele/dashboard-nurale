export const ROUTE_PATHS = {
  home: "/",
  login: "/login",
  inbox: "/",
  calendar: "/",
  search: "/",
  settings: "/",
} as const;

export type RouteType = (typeof ROUTE_PATHS)[keyof typeof ROUTE_PATHS];

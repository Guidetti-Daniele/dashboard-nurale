import type { ROUTE_PATHS } from "../constants/routes";

export type RouteType = (typeof ROUTE_PATHS)[keyof typeof ROUTE_PATHS];

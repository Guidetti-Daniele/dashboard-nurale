import type { ROUTE_PATHS } from "@/routing";

export type RouteType = (typeof ROUTE_PATHS)[keyof typeof ROUTE_PATHS];

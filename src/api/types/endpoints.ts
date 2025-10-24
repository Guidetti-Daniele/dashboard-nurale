import { API_ENDPOINTS } from "../constants/endpoints";

export type EndpointType = (typeof API_ENDPOINTS)[keyof typeof API_ENDPOINTS];

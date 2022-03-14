import { CookieJar } from "tough-cookie";
/**
 * Fetch a private endpoint.
 * @param session CookieJar with authorized pl_profile cookie.
 * @param endpoint The endpoint to fetch.
 * @param init Fetch options.
 * @see fetchSession
 */
export declare function fetchPrivateEndpoint(session: CookieJar, endpoint: string, init?: RequestInit): Promise<Response>;

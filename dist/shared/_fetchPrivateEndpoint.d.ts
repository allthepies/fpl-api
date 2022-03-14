import { CookieJar } from "tough-cookie";
/**
 * Fetch a private endpoint.
 * @param fetchCookie Instance of fetch-cookie to use.
 * @param session CookieJar with authorized pl_profile cookie.
 * @param endpoint The endpoint to fetch.
 * @param init Fetch options.
 * @see fetchSession
 * @private
 */
export declare function _fetchPrivateEndpoint(fetchCookie: <T extends Function>(fetch: T, jar?: CookieJar) => T, session: CookieJar, endpoint: string, init?: RequestInit): Promise<Response>;
